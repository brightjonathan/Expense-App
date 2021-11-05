import React,{useState} from 'react'

const AddExpense = ({tasks}) => {

      //for the input
      const [name, setName] = useState("");
      const [amount, setAmount] = useState("")
      const [date, setdate] = useState("")

      //for the summit form
      const handleEvent =(e)=>{
        e.preventDefault()
  
        //calling it as a props
        tasks({name, amount, date})
        
        //clearing the input when clicked
        setName("")
        setAmount("")
        setdate("")
          
      }


    return (
        <>
        <h3>Add new transaction</h3>
    <form onSubmit={handleEvent}>
      <div className="form-control">
        <label>Text</label>
        <input 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        type="text"  
        placeholder="Enter text..." 
        />
      </div>
      <div className="form-control">
        <label>Amount <br />(negative - expense, positive +income)</label>
        <input 
        type="number"
        value={amount}
        onChange={(e)=> setAmount(e.target.value)}
        placeholder="Enter amount..." 
         />
      </div>

      <div className="form-control">
        <input 
        type="date"
        value={date}
        onChange={(e)=> setdate(e.target.value)}
        className="date"
         />
      </div>
    
      <button className="btn">Add transaction</button>
    </form> 
      </>
    )
}

export default AddExpense
