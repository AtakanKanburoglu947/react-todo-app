import React from "react";
import Todo from './Todo'
const TodoList = ({todosList,setTodosList,filteredTodos})=>{
    return(
          <div className="todo-container">
      <ul className="todo-list">
            {filteredTodos.map(todo =>(
                <Todo text={todo.text} date = {todo.date} time = {todo.time} setTodosList={setTodosList} todosList={todosList} todo={todo} key={todo.id}></Todo>
            ))}
      </ul>
    </div>
    )
}
export default TodoList