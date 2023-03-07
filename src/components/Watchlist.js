import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Ticker from './Ticker'



function Watchlist(props) {
    return (
        <>
            <h3 style={{ textAlign: "center" }}>Your Watchlist:</h3>
            {
                !props.dbData
                    ? <div className="ring">Loading<span className="loadingAnimation"></span></div>
                    : <div style={{textAlign:"center"}}>
                        {props.dbData.map(portfolio => {
                            return (
                                portfolio.Watch.map(stock => {
                                    return (
                                        !stock.Symbol
                                        ? <></>
                                        : <div>
                                            <Button variant="secondary" style={{margin: "5px"}}>
                                                <Link to={`/portfolio/${stock.Symbol}`}>
                                                    {stock.Symbol}
                                                </Link>
                                            </Button>
                                        </div>
                                    )
                                }))
                        })}
                    </div>
            }
        </>
    )
}


export default Watchlist
