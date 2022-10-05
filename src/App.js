import './App.css';
import React,{useState,useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [todosList,setTodosList] = useState([]);
  const [status,setStatus] = useState("all");
  
  const [filteredTodos,setFilteredTodos] = useState([]);
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todosList.filter((todo)=>todo.completed===true))
        break;
      case 'uncompleted':
        setFilteredTodos(todosList.filter((todo)=>todo.completed===false))
        break;
      default:
        setFilteredTodos(todosList)
    }
  }
  useEffect(()=>{
    filterHandler();
  },[todosList,status])
  return (
    <div className='container'>
    <header>
      <h2>Todo List</h2>
    </header>
    <Form 
    setInputText={setInputText} 
    inputText={inputText} 
    todosList={todosList} 
    setTodosList={setTodosList} 
    setDateInput={setDateInput} 
    dateInput = {dateInput}
    timeInput = {timeInput}
    setTimeInput = {setTimeInput}
    setStatus={setStatus}></Form>
    <TodoList todosList={todosList} setTodosList={setTodosList} filteredTodos={filteredTodos} ></TodoList>
    </div>
  );
}

export default App;
