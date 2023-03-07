import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Chart from 'react-apexcharts'

function StockChart(props) {

  let hardcodeStockData = {
    "chart": {
      "result": [
        {
          "meta": {
            "currency": "USD",
            "symbol": "AAPL",
            "exchangeName": "NMS",
            "instrumentType": "EQUITY",
            "firstTradeDate": 345479400,
            "regularMarketTime": 1677272404,
            "gmtoffset": -18000,
            "timezone": "EST",
            "exchangeTimezoneName": "America/New_York",
            "regularMarketPrice": 146.71,
            "chartPreviousClose": 162.74,
            "priceHint": 2,
            "currentTradingPeriod": {
              "pre": {
                "timezone": "EST",
                "end": 1677249000,
                "start": 1677229200,
                "gmtoffset": -18000
              },
              "regular": {
                "timezone": "EST",
                "end": 1677272400,
                "start": 1677249000,
                "gmtoffset": -18000
              },
              "post": {
                "timezone": "EST",
                "end": 1677286800,
                "start": 1677272400,
                "gmtoffset": -18000
              }
            },
            "dataGranularity": "1mo",
            "range": "1y",
            "validRanges": [
              "1d",
              "5d",
              "1mo",
              "3mo",
              "6mo",
              "1y",
              "2y",
              "5y",
              "10y",
              "ytd",
              "max"
            ]
          },
          "timestamp": [
            1646110800,
            1648785600,
            1651377600,
            1654056000,
            1656648000,
            1659326400,
            1662004800,
            1664596800,
            1667275200,
            1669870800,
            1672549200,
            1675227600,
            1677272404
          ],
          "indicators": {
            "quote": [
              {
                "open": [
                  164.6999969482422,
                  174.02999877929688,
                  156.7100067138672,
                  149.89999389648438,
                  136.0399932861328,
                  161.00999450683594,
                  156.63999938964844,
                  138.2100067138672,
                  155.0800018310547,
                  148.2100067138672,
                  130.27999877929688,
                  143.97000122070312,
                  147.11000061035156
                ],
                "high": [
                  179.61000061035156,
                  178.49000549316406,
                  166.47999572753906,
                  151.74000549316406,
                  163.6300048828125,
                  176.14999389648438,
                  164.25999450683594,
                  157.5,
                  155.4499969482422,
                  150.9199981689453,
                  147.22999572753906,
                  157.3800048828125,
                  147.19000244140625
                ],
                "volume": [
                  2180800100,
                  1687795600,
                  2401040300,
                  1749099800,
                  1447125400,
                  1510239600,
                  2084722800,
                  1868139700,
                  1724847700,
                  1675657600,
                  1443218300,
                  1156067500,
                  55344942
                ],
                "low": [
                  150.10000610351562,
                  155.3800048828125,
                  132.61000061035156,
                  129.0399932861328,
                  135.66000366210938,
                  157.13999938964844,
                  138,
                  134.3699951171875,
                  134.3800048828125,
                  125.87000274658203,
                  124.16999816894531,
                  141.32000732421875,
                  145.72019958496094
                ],
                "close": [
                  174.61000061035156,
                  157.64999389648438,
                  148.83999633789062,
                  136.72000122070312,
                  162.50999450683594,
                  157.22000122070312,
                  138.1999969482422,
                  153.33999633789062,
                  148.02999877929688,
                  129.92999267578125,
                  144.2899932861328,
                  149.39999389648438,
                  146.7100067138672
                ]
              }
            ],
            "adjclose": [
              {
                "adjclose": [
                  173.5586395263672,
                  156.7007293701172,
                  147.9438018798828,
                  136.09645080566406,
                  161.76881408691406,
                  156.50294494628906,
                  137.76077270507812,
                  152.8526611328125,
                  147.55955505371094,
                  129.73191833496094,
                  144.0700225830078,
                  149.17222595214844,
                  146.7100067138672
                ]
              }
            ]
          }
        }
      ],
      "error": null
    }
  }

  let params = useParams()
  console.log({props})
  let symbol = ""
  !params.symbol ? symbol=props.symbol : symbol=params.symbol
  console.log({symbol})

  // let testDate = new Date(1677076200 * 1000)
  // console.log(testDate.toDateString())

  const [stockData, setStockData] = useState(null)

  let url = `https://yfapi.net/v8/finance/chart/${symbol}?range=1y&region=US&interval=1mo&lang=en`
   
  useEffect(() => {
      fetch(url, {
        method: 'GET',
        headers: {
          // 'X-API-KEY': process.env.REACT_APP_YF_X_API_KEY,
          'X-API-KEY': process.env.REACT_APP_YF_BACKUP_KEY2,
          'accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setStockData(data)
      })
      
      // setStockData(hardcodeStockData)
  }, [])
  
  console.log(stockData)
  

  let data = []
  let categories = []
  if(stockData){
    for(let i=0; i<stockData.chart.result[0].timestamp.length; i++){
      let categoryDate = (new Date(stockData.chart.result[0].timestamp[i] * 1000)).toString().substr(3,12)
      categories.push(categoryDate)
    
      let dataObj = {
        x: (new Date(stockData.chart.result[0].timestamp[i] * 1000)).toString().substr(3,12),
        y: [
          stockData.chart.result[0].indicators.quote[0].open[i].toFixed(2),
          stockData.chart.result[0].indicators.quote[0].high[i].toFixed(2),
          stockData.chart.result[0].indicators.quote[0].low[i].toFixed(2),
          stockData.chart.result[0].indicators.quote[0].close[i].toFixed(2)]
      }

      data.push(dataObj)
    }
    console.log(data)
  }

  console.log({categories})

  let chartData = {
    options: {
      plotOptions: props.plotOptions,
      // {  
        // candlestick: {
        //   colors: {
        //     upward: '#2bc20e'
        //   }
        // }
      // },
      chart: {
        id: 'candlestick'
      },
      yaxis: {
        // show: props.showAxis,
        labels: props.yLabels,
      },
      xaxis: {
        // show: props.showAxis,
        labels: props.xLabels
      }
    },
    series: [
      {
        data: data
      }
    ],
    responsive: [
      {
        breakpoint: 1000,
        options: {
          yaxis: {
            labels: {
              show: false
            },
          },
          xaxis: {
            labels: {
              show: false
            }
          }
        },
      }
    ],
  }

  return (
    <div className='stockChart' id={props.id}>
      <div className='row'>
        <div className='col-4'>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type={props.type}
          width={props.width}
          // height='300'
        />
        </div>
      </div>
    </div>
  )
}

export default StockChart