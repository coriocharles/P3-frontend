import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function StockDetail(props) {

    const [mongoDbData, setMongoDbData] = useState(null)
    const [apiData, setApiData] = useState(null)
    const [num, setNum] = useState(0)
    const [numSell, setNumSell] = useState(0)
    const [editForm, setEditForm] = useState(null)
    const [message, setMessage] = useState("Add to Watchlist")

    const { symbol } = useParams()

    const apiURL = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_d9852d149e8045839e4b9a57c023b057`
    const mongoURL = 'https://mockstockbackend-production.up.railway.app/portfolios'

    const initialState = {
        "buy": 0,
        "sell": 0
    }
    const [formState, setFormState] = useState(initialState)

    const handleChange = event => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    
    const handleSubmitBuy = event => {
        event.preventDefault()

        const options= {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState)
        }

        fetch(mongoURL, options)
            .then(res=>res.json())
            .then(data=>console.log({data}))

        setFormState(initialState)
    }

    const handleSubmitSell = event => {
        event.preventDefault()

        setFormState(initialState)
    }

    // const getDbDataEdit = () => {
    //         fetch(mongoURL)
    //         .then(res => res.json())
    //         .then(data => setEditForm(data[0]))
    // }

    useEffect(() => {
        // getDbDataEdit()

        // fetch(mongoURL)
        // .then(res => res.json())
        // .then(data => setMongoDbData(data))
        setMongoDbData(props.dbData)

        if (mongoDbData) {
            setEditForm(mongoDbData)
        }

        fetch(apiURL)
        .then(res => res.json())
        .then(data => setApiData(data))
    }, [mongoDbData])

    // const handleChangeNum = event => {
    //     console.log(event.target.value)
    //     let max = editForm.CashBalance / apiData.latestPrice
    //     setNum(Math.min(event.target.value, max))
    // }

    // const handleChangeNumSell = event => {
    //     console.log(event.target.value)
    //     if ((JSON.stringify(mongoDbData[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase()).length) > 0)) {
    //     let max = editForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Shares
    //     setNumSell(Math.min(event.target.value, max))} else {
    //         setNumSell(0)
    //     }
    // }

    const handleClick = () => {
        setMessage(`${apiData.symbol} Added to WatchList`)
    }

    const addToWatchList = event => {
        event.preventDefault()
       
        if ((JSON.stringify(mongoDbData[0].Watch.filter(stock => stock.Symbol === symbol.toUpperCase()).length) === "0")) {
        let copyForm = editForm;
        let temp = { Symbol: apiData.symbol.toUpperCase() }
        copyForm.Watch.push(temp)
        setEditForm(copyForm)
        // updateDbData(editForm, mongoDbData[0]._id)} else {console.log("not working")
        }
    }

    // const handleSubmitBuy = event => {
    //     event.preventDefault()
    //     let copyForm = editForm;
    //     if (copyForm.CashBalance >= (num * apiData.latestPrice)) {
    //         copyForm.CashBalance -= num * apiData.latestPrice
    //         copyForm.PortfolioBalance += num * apiData.latestPrice
    //         if ((JSON.stringify(mongoDbData[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase()).length) > 0)) {
    //         copyForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Shares += num
    //         copyForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Cost += num * apiData.latestPrice
    //         setEditForm(copyForm)
    //         updateDbData(editForm, mongoDbData[0]._id)
    //         setNum(0)
    //             getDbDataUser()
    //             getDbDataEdit()
    //         } else {
    //             let temp = {Symbol: symbol.toUpperCase(), Shares: num, Cost: num * apiData.latestPrice }
    //             copyForm.StockHoldings.push(temp)
    //             setEditForm(copyForm)
    //             updateDbData(editForm, mongoDbData[0]._id)
    //             setNum(0)
    //             getDbDataUser()

    //             getDbDataEdit()
    //         }
    //     } else { console.log("not enough cash") }
    // }

    // const handleSubmitSell = event => {
    //     event.preventDefault()
    //     let copyForm = editForm;
    //     if (copyForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Shares >= (num)) {
    //         copyForm.CashBalance += numSell * apiData.latestPrice
    //         copyForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Shares -= numSell
    //         copyForm.StockHoldings.filter(x => x.Symbol === symbol.toUpperCase())[0].Cost -= numSell * apiData.latestPrice
    //         setEditForm(copyForm)
    //         updateDbData(editForm, mongoDbData[0]._id)
    //         setNumSell(0)
    //         fetch(mongoURL)
    //         .then(res => res.json)
    //         .then(data => setMongoDbData(data))

    //         getDbDataEdit()
    //         getDbDataUser()
    //     } else { console.log("not enough stock") }
    // }

    return (
        <>
            {!apiData
                ? <p>No results found, please double check your Symbol!</p>
                : <div className="card"> 
                    {
                !(apiData || mongoDbData)
                    ? <div className="ring">Loading<span className="loadingAnimation"></span></div>
                    : <div>
                        <h1>{apiData.companyName} ({apiData.symbol})</h1>
                        <h3>Data updated {apiData.latestTime} from {apiData.primaryExchange}</h3>
                        <form 
                            onSubmit={addToWatchList} 
                            onClick={handleClick}
                        >
                            <input type="submit" className="btn btn-primary" value="Add to Watchlist" />
                        </form>
                        <div className="card-body">
                            <p>Latest Price:&nbsp; 
                                {!apiData.latestPrice
                                    ? <i style={{fontSize: "small"}}>  unavailable</i>
                                    : apiData.latestPrice?.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                            </p>
                            <p>Market Open:&nbsp; 
                                {!apiData.iexOpen 
                                    ? <i style={{fontSize: "small"}}>  unavailable</i>
                                    : apiData.iexOpen?.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                            </p>
                            <p>Market Close:&nbsp; 
                                {!apiData.iexClose
                                    ? <i style={{fontSize: "small"}}>  unavailable</i>
                                    : apiData.iexClose?.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                            </p>
                            <p>Daily Change:&nbsp; 
                                {!apiData.changePercent
                                    ? <i style={{fontSize: "small"}}>  unavailable</i>
                                    : apiData.changePercent?.toFixed(2)}%
                            </p>
                            <p>52 Week High:&nbsp; 
                                {!apiData.week52High
                                    ? <i style={{fontSize: "small"}}>  unavailable</i>
                                    : apiData.week52High?.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                            </p>
                            <p>52 Week Low:&nbsp; 
                                {!apiData.week52Low
                                ? <i style={{fontSize: "small"}}>  unavailable</i>
                                : apiData.week52Low?.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                            </p>
                            <p>Year to Date Change:&nbsp; 
                                {!apiData.ytdChange
                                    ? <i style={{fontSize: "small"}}>  unavailable</i>
                                    : apiData.ytdChange?.toFixed(2)}%
                            </p>
                        {!mongoDbData
                            ? null
                            : <div>
                                <p style={{fontWeight: "bold"}}> Your Shares:&nbsp;
                                    {
                                    (JSON.stringify(mongoDbData[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase()).length) > 0)
                                        ? JSON.stringify(mongoDbData[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase())[0].Shares)
                                        : "0"
                                    }
                                </p>
                                <p style={{fontWeight: "bold"}}> Your Holdings:&nbsp;
                                    {
                                    (JSON.stringify(mongoDbData[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase()).length) > 0) 
                                        ? ((mongoDbData[0].StockHoldings.filter(stock => stock.Symbol === symbol.toUpperCase())[0].Shares) * apiData.latestPrice).toLocaleString(undefined, { style: 'currency', currency: 'USD'  })
                                        : "0"
                                    }
                                </p>
                            </div>
                        }
                            <div>
                                <form 
                                    // onSubmit={handleSubmitBuy}
                                >
                                    <input
                                        id="buy"
                                        type="text"
                                        value={formState.buy}
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="submit"
                                        className="btn btn-success"
                                        style={{backgroundColor: "#2bc20e"}}
                                        value={`Buy ${formState.buy} of ${apiData.symbol} for ${(apiData.latestPrice * num).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}`}
                                    />         
                                </form>

                                <form 
                                    // onSubmit={handleSubmitSell}
                                >
                                    <input
                                        id="sell"
                                        type="text"
                                        value={formState.sell}
                                        // onChange={handleChangeNumSell}
                                    />
                                    <input
                                        type="submit"
                                        className="btn btn-danger"
                                        value={`Sell ${numSell} of ${apiData.symbol} for ${(apiData.latestPrice * numSell).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}`}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
            } </div>} 
            
            
        </>

    )
}

export default StockDetail