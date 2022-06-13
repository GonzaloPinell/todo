import './styles.css';

import { TodoList, Todo } from './classes';
import { crearTodoHtml } from './js';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log(todoList);

// const todo = new Todo('Aprender Javascript');

// todoList.nuevoTodo(todo);

// console.log(todo);

// crearTodoHtml(todo);