import React from 'react'

const Balance = ({data}) => {

  //mapping through the props
  const amounts =  data.map((e)=> e.amount)

  
  //calculating total by adding all positive number and approximate it to two decimal places
  const total = amounts.reduce((acc,item)=> (acc += parseInt(item)), 0).toFixed(2)
    
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>N{total}</h1>

        </div>
    )
}

export default Balance
