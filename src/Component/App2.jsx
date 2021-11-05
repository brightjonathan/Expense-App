import React, {useState, useEffect} from 'react'
import Header from './Header'
import Balance from './Balance'
import ExpenseList from './ExpenseList'
import AddExpense from './AddExpense'
import IncomeExpense from './IncomeExpense'


const All_EXPENSE = []

const App2 = () => {

    //useState for All_Expense 
    const [expense, setexpense] = useState(All_EXPENSE)

    //function for add_tasks
    const Add_tasks =(e)=>{
         //created an id
         const id = Math.floor(Math.random()* 10000)
         //adding the id to the tasks
         const newTask ={id, ...e}
        //  console.log([...expense, newTask])
        setexpense([...expense, newTask])
    }

      //function for Delete
      const Delete = (id)=>{
          //delete function with useState
        setexpense(expense.filter((e)=> e.id !== id))
      }


       // **** retriving the data from the localStorage **** //
    useEffect(() => {
    const retrive = localStorage.getItem("expense")
    const loading = JSON.parse(retrive)

    if(loading){
        setexpense(loading)
    }
 }, [])
     

// *** thist is how to set a storage local storage **** //
  useEffect(() => {
     const storage =  JSON.stringify(expense)
     localStorage.setItem("expense", storage)
  }, [expense])


    return (
        <div>
            <Header/>
            <div  className="container">
            <Balance data={expense}/>
            <IncomeExpense data3={expense}/>
            <ExpenseList data2={expense} Delete_list={Delete}/>
            <AddExpense tasks={Add_tasks}/>
            </div>
            
        </div>
    )
}

export default App2
