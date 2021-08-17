import React from 'react'
import TodoListItem from './TodoListItem'
import { RootState } from '../../redux/reducers/rootReducer';
import { useSelector, useDispatch  } from 'react-redux';
import { toggleTodo } from './projectSlice';
import { VisibilityFilter } from './visibilityFilterSlice';
import { Project } from '../types';

const getVisibleTodos = (todos: Project[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos
    case VisibilityFilter.ShowCompleted:
      return todos.filter(t => t.completed)
    case VisibilityFilter.ShowActive:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

export default function TodoList() {
  const dispatch = useDispatch();
  
  const todos = useSelector(
    (state: RootState) => getVisibleTodos(state.todos, state.visibilityFilter)
);

  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo))} />
      ))}
    </ul>
  );
}