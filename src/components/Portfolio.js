import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

function Portfolio({dbData}) {
    // console.log({ dbData })
    const [stockData, setStockData] = useState(null)
    
    let symbols = []
    dbData[0].StockHoldings.map(stock => {
        symbols.push(stock.Symbol)
    })
    // console.log(symbols)
    let symbolStrings = symbols.join("%2C")
    // console.log(symbolStrings)
    
    const options = {
        method: 'GET',
        url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${symbolStrings}`,
        headers: {
            // 'x-api-key': 'GW8PTGhaii4nWR17s628j9t73Awi1MOpiy7NRyC4',
            'x-api-key': 'SAt1ZodoG84fd4ZMP1Aq575wHne1e9ts5CUzkfLZ',
            'Content-Type': 'application/json'
        }
    };
    
    useEffect(() => {
        axios.request(options).then(function (response) {
            setStockData(response.data.quoteResponse.result);
        }).catch(function (error) {
            console.error(error);
        })
    }, [])

    // console.log(stockData)
    
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
            if (dbData[0].StockHoldings[i].Shares !== 0) {
                gain += (stockData[i].regularMarketPrice - (dbData[0].StockHoldings[i].Cost / dbData[0].StockHoldings[i].Shares)) * dbData[0].StockHoldings[i].Shares
            // console.log(dbData[0].StockHoldings[i].Cost/dbData[0].StockHoldings[i].Shares)
            }
        }  
        return gain
        
    }
    
    return (
      <div className="main">
            <h3>{dbData[0].Username}'s Holdings</h3><br></br>
        {
            dbData.length <= 0 || !stockData 
            ? <h1>Loading</h1>
            : <div>  
                <h5 style={{fontWeight: "bold"}}>
                    Portfolio Balance: ${calPortfolioBalance().toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </h5> 
                <h6>
                    Total Gain: $
                    {calGain() > 0
                    ?   <span style={{color: '#2bc20e'}}>
                            {calGain().toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </span>
                    :   <span style={{color: 'red'}}>
                            {calGain().toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </span>   
                    }
                </h6>
                    
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Holding</th>
                    <th>Shares</th>
                    <th>Cost</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                                {dbData ? 
                                    dbData[0].StockHoldings.map((each, index) => {
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
                                                            {stockData[index].displayName}
                                                        </td>
                                                        <td>
                                                            ${(stockData[index].regularMarketPrice * each.Shares).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                                                        </td>
                                                        <td>
                                                            {each.Shares}
                                                        </td>
                                                        <td>
                                                            ${each.Cost.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                                                        </td>
                                                        {stockData[index].regularMarketChangePercent > 0
                                                            ? <td className="gain" style={{ color: 'white', background: '#2bc20e', borderRadius: '10px' }}>
                                                                +{stockData[index].regularMarketChangePercent.toFixed(2)}%
                                                            </td>
                                                            : <td className="gain" style={{ color: 'white', background: 'red', borderRadius: '10px' }}>
                                                                {stockData[index].regularMarketChangePercent.toFixed(2)}%
                                                            </td>
                                                        }
                                                    </tr>
                                                </>
                                                : ""
                                        )
                                    })
                                : ""}
                
            </tbody>
        </Table>
      </div>
    }
        
    </div>
    )
}


export default Portfolio
