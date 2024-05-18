import {useState} from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const todoOnChangeHandler = (event): void => {
    setTodo(event.target.value);
  }

  const addTodo = (event): void => {
    if (todo.length > 0) {
      setTodos(prevTodos => [...prevTodos, todo]);
      setTodo("");
    }
  }

  const deleteTodo = (index: number): void => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i != index));
  }

  const uprankTodo = (index: number): void => {
    if (index === 0) {
      return;
    }

    const updatedTodos = [...todos];
    const todoToUprank = updatedTodos.splice(index, 1)[0];
    updatedTodos.splice(index - 1, 0, todoToUprank);
    setTodos(updatedTodos);
  } 

  const downrankTodo = (index: number): void => {
    if (index === todos.length - 1) {
      return;
    }

    const updatedTodos = [...todos];
    const todoToDownrank = updatedTodos.splice(index, 1)[0];
    updatedTodos.splice(index + 1, 0, todoToDownrank);
    setTodos(updatedTodos);
  }

  return (
    <div id="todo-list">
      <h1>To-Do List</h1>
      <div id="new-todo">
        <input 
          id="todo-input"
          type="text"
          value={todo}
          onChange={todoOnChangeHandler}
          placeholder="Enter a task!"
        />&nbsp;&nbsp;&nbsp;
        <button onClick={addTodo} id="button-add">
          Add
        </button>
      </div>
      <div id="todos">
        {
          todos.map((todoTask, index) => 
            <div className="todo">
              {todoTask} &nbsp;&nbsp;&nbsp;
              <button className="button-delete" onClick={() => deleteTodo(index)}>Delete</button>&nbsp;
              <button className="button-up" onClick={() => uprankTodo(index)}>👆</button>&nbsp;
              <button className="button-down" onClick={() => downrankTodo(index)}>👇</button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ToDoList;