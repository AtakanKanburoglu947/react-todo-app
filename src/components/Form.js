import React from "react";

const Form = ({setInputText,setTodosList,todosList,inputText,setStatus,setDateInput,dateInput,timeInput,setTimeInput})=>{
    const InputTextHandler = (event)=>{
        setInputText(event.target.value);
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        setTodosList([
            ...todosList, {text:inputText,completed:false, date:dateInput,time: timeInput,id:Math.random()*1000}
        ])
        setInputText("");
      
 
    }
    const statusHandler = (event)=>{
        setStatus(event.target.value)
    }
    const dateHandler = (event)=>{
      setDateInput(event.target.value)
    }
    const timeHandler = (event)=>{
      setTimeInput(event.target.value)
    }
    return(
        <form>
      <input type="text" value={inputText} className="todo-input" onChange={InputTextHandler} />
      <button className="todo-button" onClick={submitHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <input type="date" className="date-input" onChange={dateHandler}/>
      <input type="time" className="time-input" onChange={timeHandler}/>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}
export default Form