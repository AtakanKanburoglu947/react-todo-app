import React from "react"
const Todo = ({text,setTodosList,todosList,todo,date,time})=>{
    const deleteHandler = ()=>{
        console.log(todo)
        setTodosList(todosList.filter(element=> element.id !== todo.id))
    }
    const completeHandler = ()=>{
        setTodosList(todosList.map((item)=>{
            if(item.id===todo.id){
                return{
                    ...item, completed: !item.completed 
                }
            }
            return item
        }))
    }
    return (
        <>
        <div className="todo">
                   <li className={`todo-item ${todo.completed ? "completed": ''}`}>
                    {text}
            </li>

            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
        <div className="date-item">
            Scheduled for: {time} {date}
        </div>
     
        </>
    )
}
export default Todo