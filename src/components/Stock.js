import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import StockChart from './StockChart'

function Stock(props) {

    const { symbol } = useParams()
    const [dbData2, setdbData2] = useState(null)
    const [editForm, setEditForm] = useState(null)
    const [stockAPI, setstockAPI] = useState(null)
    const [message, setMessage] = useState(`Add to Watchlist`)

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/portfolio`;
        navigate(path);
    }

    const dbURL = 'https://mockstockbackend-production.up.railway.app/portfolios'
    const getDbData2 = () => {
        try {fetch(dbURL)
            .then(res => res.json())
            .then(data => setdbData2(data))

        if (dbData2) {
            setEditForm(dbData2)
        }}

        catch (error) {
            console.log(error)
        }
        finally {
        }
    }

    const getDbDataEdit = () => {
        try {
            fetch(dbURL)
            .then(res => res.json())
            .then(data => setEditForm(data[0]))
        }

        catch (error) {
            console.log(error)
        }
        finally {
            console.log("pulling from mongo")
        }
    }
    useEffect(() =>
        getDbDataEdit(), [])

    useEffect(() => 
        getDbData2(), [])

    const updateDbData2 = async (data, id) => {
        await fetch(dbURL + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        getDbData2();
        props.getDbDataUser()
    }
    
    
    
    const [num, setNum] = useState(0)
    const [numSell, setNumSell] = useState(0)

    const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_d9852d149e8045839e4b9a57c023b057`

    function componentDidMount() {
        setstockAPI(null)
        console.log("pulling from API")
        axios.get(url)
            .then(res => {

                const data = res.data;
                setstockAPI(data);
            })
    }

   

    const handleChangeNum = event => {
        console.log(event.target.value)
        let max = editForm.CashBalance / stockAPI.latestPrice
        setNum(Math.min(event.target.value, max))
    }

    const handleChangeNumSell = event => {
        console.log(event.target.value)
        if ((JSON.stringify(dbData2[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase()).length) > 0)) {
        let max = editForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Shares
        setNumSell(Math.min(event.target.value, max))} else {
            setNumSell(0)
        }
    }

    // Need to add limit here

    const handleClick = () => {
        setMessage(`${stockAPI.symbol} Added to WatchList`)
    }

    const addToWatchList = event => {
        event.preventDefault()
       
        if ((JSON.stringify(dbData2[0].Watch.filter(stock => stock.Symbol === symbol.toUpperCase()).length) === "0")) {
        let copyForm = editForm;
        let temp = { Symbol: stockAPI.symbol.toUpperCase() }
        copyForm.Watch.push(temp)
        setEditForm(copyForm)
        updateDbData2(editForm, dbData2[0]._id)} else {console.log("not working")}
    }

    const handleSubmitBuy = event => {
        event.preventDefault()
        let copyForm = editForm;
        if (copyForm.CashBalance >= (num * stockAPI.latestPrice)) {
            copyForm.CashBalance -= num * stockAPI.latestPrice
            copyForm.PortfolioBalance += num * stockAPI.latestPrice
            if ((JSON.stringify(dbData2[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase()).length) > 0)) {
            copyForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Shares += num
            copyForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Cost += num * stockAPI.latestPrice
            setEditForm(copyForm)
            updateDbData2(editForm, dbData2[0]._id)
            setNum(0)
            props.getDbDataUser()
                getDbDataEdit()
            } else {
                let temp = {Symbol: symbol.toUpperCase(), Shares: num, Cost: num * stockAPI.latestPrice }
                copyForm.StockHoldings.push(temp)
                setEditForm(copyForm)
                updateDbData2(editForm, dbData2[0]._id)
                setNum(0)
                props.getDbDataUser()

                getDbDataEdit()
            }
        } else { console.log("not enough cash") }
    }

    const handleSubmitSell = event => {
        event.preventDefault()
        let copyForm = editForm;
        if (copyForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Shares >= (num)) {
            copyForm.CashBalance += numSell * stockAPI.latestPrice
            copyForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Shares -= numSell
            copyForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Cost -= numSell * stockAPI.latestPrice
            setEditForm(copyForm)
            updateDbData2(editForm, dbData2[0]._id)
            setNumSell(0)
            getDbData2()

            getDbDataEdit()
            props.getDbDataUser()
        } else { console.log("not enough stock") }
    }

    useEffect(() =>
        componentDidMount(), [])

    console.log(stockAPI)

    return (
        <div className='stockPage'>

            {!stockAPI
                ? <p>No results found, please double check your Symbol!</p>
                : <div className="card"> 
                    {
                        !(stockAPI || dbData2)
                            ? <div className="ring">Loading<span className="loadingAnimation"></span></div>
                            : <div>
                                <h1>{stockAPI.companyName} ({stockAPI.symbol})</h1>
                                <h3>Data updated {stockAPI.latestTime} from {stockAPI.primaryExchange}</h3>
                                <form onSubmit={addToWatchList} onClick={handleClick}>
                                    <input type="submit" className="btn btn-primary" value={message} />
                                </form>
                                <StockChart 
                                    id='chartSm'
                                    type='candlestick'
                                    plotOptions={{
                                        candlestick: {
                                        colors: {
                                            upward: '#2bc20e'
                                        }
                                        }
                                    }}
                                    width='400px'
                                    yLabels={ {show: false} }
                                    xLabels={ {show: false} }
                                />
                                <div className="card-body">
                                <p>Latest Price:&nbsp; 
                                    {!stockAPI.latestPrice
                                        ? <i style={{fontSize: "small"}}>  unavailable</i>
                                        : stockAPI.latestPrice?.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</p>
                                <p>Market Open:&nbsp; 
                                    {!stockAPI.iexOpen 
                                        ? <i style={{fontSize: "small"}}>  unavailable</i>
                                        : stockAPI.iexOpen?.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</p>
                                <p>Market Close:&nbsp; 
                                    {!stockAPI.iexClose
                                    ? <i style={{fontSize: "small"}}>  unavailable</i>
                                    : stockAPI.iexClose?.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</p>
                                <p>Daily Change:&nbsp; 
                                    {!stockAPI.changePercent
                                        ? <i style={{fontSize: "small"}}>  unavailable</i>
                                        : stockAPI.changePercent?.toFixed(2)}%</p>
                                <p>52 Week High:&nbsp; 
                                    {!stockAPI.week52High
                                        ? <i style={{fontSize: "small"}}>  unavailable</i>
                                        : stockAPI.week52High?.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</p>
                                <p>52 Week Low:&nbsp; 
                                    {!stockAPI.week52Low
                                    ? <i style={{fontSize: "small"}}>  unavailable</i>
                                    : stockAPI.week52Low?.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</p>
                                <p>Year to Date Change:&nbsp; 
                                {!stockAPI.ytdChange
                                        ? <i style={{fontSize: "small"}}>  unavailable</i>
                                        : stockAPI.ytdChange?.toFixed(2)}%</p>
                                {!dbData2
                                    ? null
                                    : <div>
                                        <p style={{fontWeight: "bold"}}> Your Shares:   
                                            {
                                                ((JSON.stringify(dbData2[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase()).length) > 0)
                                            ? JSON.stringify(dbData2[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase())[0].Shares)
                                            : "0")}</p>
                                        <p style={{fontWeight: "bold"}}> Your holding: 
                                            {
                                                ((JSON.stringify(dbData2[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase()).length) > 0) 
                                            ? ((dbData2[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase())[0].Shares) * stockAPI.latestPrice).toLocaleString(undefined, { style: 'currency', currency: 'USD'  })
                                            : "0")}</p>
                                    </div>
                                }
                                    <div>
                                        <form onSubmit={handleSubmitBuy}>
                                            <input
                                                type="text"
                                                value={num}
                                                name="name"
                                                placeholder="Amount"
                                                onChange={handleChangeNum}
                                            />
                                            <input 
                                                type="submit"
                                                className="btn btn-success"
                                                style={{backgroundColor: "#2bc20e"}}
                                                value={`Buy ${num} of ${stockAPI.symbol} for ${(stockAPI.latestPrice * num).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}`}
                                            />         
                                        </form>

                                        <form onSubmit={handleSubmitSell}>
                                            <input
                                                type="text"
                                                value={numSell}
                                                name="sell"
                                                placeholder="Amount"
                                                onChange={handleChangeNumSell}
                                            />
                                            <input
                                                type="submit"
                                                className="btn btn-danger"
                                                value={`Sell ${numSell} of ${stockAPI.symbol} for ${(stockAPI.latestPrice * numSell).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}`}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                    } 
                        <StockChart
                            id='chartLg'
                            type='candlestick'
                            plotOptions={{
                                candlestick: {
                                  colors: {
                                    upward: '#2bc20e'
                                  }
                                }
                              }}
                            width='800%'
                            yLabels={ {formatter: function(value){return "$" + value}} }
                            xLabels={ {formatter: function(value){return value}} }
                        />
            </div>}
            
        </div>

    )
}

export default Stock