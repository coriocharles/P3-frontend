import React from 'react'

function UserInfo({data}) {

  return (

  !data ? "Loading"
   : <div className = 'userInfo'>
        <h4 className="userName">user: {data[0].Username}</h4>
        <p>Cash Balance: {data[0].CashBalance.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</p>
    </div>
  )
}

export default UserInfo