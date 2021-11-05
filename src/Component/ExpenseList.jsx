import React from 'react'
import ExpenseListTwo from './ExpenseListTwo'

const ExpenseList = ({data2, Delete_list}) => {
    return (
        <>
            <h3>History</h3>
            <ul  className="list" >
              {data2.map((e)=>(<ExpenseListTwo key={e.id} e={e} Delete_list2={Delete_list}/>))}
            </ul>
        </>
    )
}

export default ExpenseList
