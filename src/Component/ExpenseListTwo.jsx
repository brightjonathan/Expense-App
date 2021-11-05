import React from 'react'

const ExpenseListTwo = ({e, Delete_list2}) => {

    //a terney operation
    const sign = e.amount < 0 ? "-" : "+"

    return (
        <div>
            <li className={e.amount < 0 ? "minus" : "plus"}>
            {e.name} 
        <span>{sign}N{Math.abs(e.amount)}</span>
            {e.date}
        <button className="delete-btn" onClick={()=> Delete_list2(e.id)} className="delete-btn" >x</button>
            </li>

        </div>
    )
}

export default ExpenseListTwo
