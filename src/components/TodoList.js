import React from 'react';
import Button from '@atlaskit/button';
import Todo from './Todo';

export default function TodoList({ todoList, onCheckBtnClick, onDeleteBtnClick }) {
    return (
      <>
        {todoList.map((todo) => (
          <Todo onDeleteBtnClick={onDeleteBtnClick} key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick}/>
        ))}
      </>
    );
  }
