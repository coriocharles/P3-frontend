import React, {useState, useEffect} from 'react'
import {BiDownArrow, BiUpArrow} from 'react-icons/bi'

function Ticker(props) {
    const [tickerData, setTickerData] = useState([])

    // fetch stock symbols from portfolio, make array

    console.log(props)
    console.log(props.mongoData)
    
    let symbols = []
    props.mongoData[0].StockHoldings.map(stock => {
        symbols.push(stock.Symbol)
    })

    props.mongoData[0].Watch.map(stock => {
        symbols.push(stock.Symbol)
    })
    console.log({symbols})

    useEffect(() => {
        // map over array, set symbol for url
        // use symbol dynamically in url to fetch api data
        // push api data into an array
        symbols.map((eachSymbol) => {
            fetch(`https://cloud.iexapis.com/stable/stock/${eachSymbol}/quote?token=pk_696f559b3cb64b788e34f7848ef884cb`)
            .then (res => res.json())
            .then (data => tickerData.push(data))
            console.log(tickerData)
        })
    }, [])

    let tickerDataCondensed = []

    tickerData && tickerData.map((each)=>{
        // tickerDataCondensed.push(`${each.symbol}: ${each.iexVolume} @ $${each.latestPrice.toFixed(2)} ^ ${each.change}`)
        // console.log(tickerDataCondensed.toString())
        tickerDataCondensed.push(
        {
            symbol: each.symbol,
            volume: each.iexVolume,
            latestPrice: each.latestPrice.toFixed(2),
            change: each.change
        }
      )
    })

  if(props.mongoData){
    return (
        <div className='ticker'>
            <marquee>
                {tickerDataCondensed.map((each) => {
                        return(
                            <>
                            {each.change < 0
                            ? <span className='negative'>
                                <span id='tickerSymbol'>{each.symbol} </span>
                                <span id='tickerVolume'>{each.volume} </span>@
                                <span id='tickerPrice'> ${each.latestPrice} </span>
                                <span id='tickerDownArrow'><BiDownArrow/> </span>
                                <span id='tickerChange'>{each.change}  </span>
                            </span>
                            : <span className={each.change < 0 ? 'negative' : 'positive'}>
                                <span id='tickerSymbol'>{each.symbol} </span>
                                <span id='tickerVolume'>{each.volume} </span>@
                                <span id='tickerPrice'> ${each.latestPrice} </span>
                                <span id='tickerUpArrow'><BiUpArrow/> </span>
                                <span id='tickerChange'>{each.change}  </span>
                            </span>
                            }
                            </>
                        )
                })}
                
            </marquee>
    </div>
    )
  }
}

export default Ticker