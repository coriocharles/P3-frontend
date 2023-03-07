import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import Table from 'react-bootstrap/Table'
import News from './News'

function Portfolio(props) {
    const [stockData, setStockData] = useState(null)

    let dbData = props.dbData
    

    useEffect(() => {
        if(props.dbData){
            let portfolioSymbols = []
            dbData[0].StockHoldings.map(stock => {
                portfolioSymbols.push(stock.Symbol)
            })
            console.log({portfolioSymbols})

            let portfolioSymbolStrings = portfolioSymbols.join("%2C")
            console.log({portfolioSymbolStrings})

            fetch(
                `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${portfolioSymbolStrings}`,
                {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': '035rMsHHng85urOT3x4jQE9t22lhUCS70WkpePP7',
                }
                }
            )
            .then(res => res.json())
            .then(data => {
                console.log(data.quoteResponse.result)
                setStockData(data.quoteResponse.result)
            })
        }
    }, [dbData])
    
    const calPortfolioBalance = () => {
        let portfolioBalance = 0
        for (let i = 0; i < stockData.length; i++) {
            portfolioBalance += stockData[i].regularMarketPrice * dbData[0].StockHoldings[i].Shares;
        }
        return portfolioBalance
    }

    const calGain = () => {
        let gain = 0
        for (let i = 0; i < stockData.length; i++) {
            if (dbData[0].StockHoldings[i].Shares > 0) {
                gain += (stockData[i].regularMarketPrice - (dbData[0].StockHoldings[i].Cost / dbData[0].StockHoldings[i].Shares)) * dbData[0].StockHoldings[i].Shares
            // console.log(stockData.regularMarketPrice)
            }
        }  
        return gain
    }
    
    if(dbData && stockData){
        return (<>
            <div className="main">
                <br></br>
                <div>  
                    <h5 style={{fontWeight: "bold"}}>
                        Portfolio Balance: {calPortfolioBalance().toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                    </h5> 
                        {calGain() > 0
                        ?   <h6>
                                Total Gain:&nbsp;
                                <span style={{color: '#2bc20e'}}>
                                    {calGain().toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                                    {/* {typeof(calGain())} */}
                                </span>
                            </h6>
                        :   <h6>
                                Total Loss:&nbsp;
                                <span style={{color: 'red'}}>
                                    {calGain().toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                                </span>
                            </h6>  
                        }
                        
                    <Table striped hover bordered responsive id='portfolioTable'>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Holding</th>
                                <th>Shares</th>
                                <th>Cost</th>
                                <th></th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dbData[0].StockHoldings.map(function(each, index) {                                      
                                    return (
                                        (each.Shares > 0.000000001)
                                            ? <>
                                                <tr>
                                                    <td>
                                                        <Link to={`/portfolio/${each.Symbol}`}>
                                                            {each.Symbol}
                                                        </Link>
                                                    </td>
                                                    <td>        
                                                        {stockData[index].shortName}
                                                    </td>
                                                    <td>
                                                        {(stockData[index].regularMarketPrice * each.Shares).toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                                                    </td>
                                                    <td>
                                                        {Math.floor(each.Shares)}
                                                    </td>
                                                    <td>
                                                        {each.Cost.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}
                                                    </td>
                                                        {stockData[index].regularMarketChangePercent > 0
                                                            ? <td className="gain" style={{ color: 'white', background: '#2bc20e', borderRadius: '10px' }}>
                                                                +{stockData[index].regularMarketChangePercent.toFixed(2)}%
                                                            </td>
                                                            : <td className="gain" style={{ color: 'white', background: 'red', borderRadius: '10px' }}>
                                                                {stockData[index].regularMarketChangePercent.toFixed(2)}%
                                                            </td>
                                                        }
                                                    {/* <td>
                                                    <StockChart
                                                        id='chartThumbnail'
                                                        type='line'
                                                        plotOptions={{
                                                            fill:{
                                                                colors: ['#2bc20e']
                                                            } 
                                                        }}
                                                        symbol='aapl'
                                                        width='200%'
                                                        yLabels={ {show: false} }
                                                        xLabels={ {show: false} }
                                                        showAxis='false'
                                                    /> 
                                                    </td> */}
                                                    {/* <td>
                                                        <canvas role='img' height='34' width='140' style='display: block; box-sizing: border-box; height: 34px; width: 140px;'></canvas>
                                                    </td> */}
                                                </tr>
                                            </>
                                            : <div className="ring">Loading<span className="loadingAnimation"></span></div>
                                    )
                                })
                            }
                    
                        </tbody>
                    </Table>
                </div>
                <News/>
            </div>
        </>)}
}


export default Portfolio
