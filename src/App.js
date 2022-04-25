import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useCallback, useState, useEffect } from 'react';
import { v4 } from 'uuid'
const TODO_APP_STORAGE_KEY = "TODO_APP"

function App() {
  const[todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  
  
  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback((e) => {
    setTodoList([...todoList, { id: v4(), name: textInput, isComplete: false }])
    setTextInput('');
  }, [textInput, todoList]);
  
  const onDeleteBtnClick = (e, todo) => {
        console.log(e, todoList.filter((todoEle) => todo.id !== todoEle.id));
        setTodoList(todoList.filter((todoEle) => todo.id !== todoEle.id))
  }
  return (
    <>
      <h2>Todo list:</h2>
      <Textfield 
      name="addTodo" 
      placeholder="Add task..." 
      elemAfterInput={
      <Button appearance="primary" onClick={onAddBtnClick}>
        Add
      </Button>
    }
      css={{
        padding: "2px 4px 2px"
      }}
      value={textInput}
      onChange={onTextInputChange}
    >
    </Textfield>
    <TodoList todoList={todoList} onDeleteBtnClick={onDeleteBtnClick}/>
    </>
    
  );
}

export default App;
