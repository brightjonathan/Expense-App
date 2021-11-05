import React from 'react'

const IncomeExpense = ({data3}) => {

    
   //mapping through the props
  const amounts =  data3.map((e)=> e.amount)

  
   //calculating the income adding all the positive number
   const income = amounts.filter((e) => e > 0).reduce((acc,item) => (acc += parseInt(item)),0).toFixed(2)

   //adding the all the negative numbers 
   const expense = (amounts.filter((e) => e < 0 ).reduce((acc, item) => (acc += parseInt(item)),0)* -1).toFixed(2)

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">N{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">N{expense}</p>
        </div>
      </div>
    )
}

export default IncomeExpense
