// Referencias en el HTML

import { todoList } from "..";
import { Todo, TodoList } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const textInput = document.querySelector('.new-todo');
const buttonBorrar = document.querySelector('.clear-completed');
const filters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {

    const htmlTodo =
        `<li ${(todo.completado) ? 'class="completed' : ''} data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

};

// Eventos

textInput.addEventListener('keyup', (event) => {
    console.log(event);
    if (event.keyCode === 13 && textInput.value.length > 0) {
        const todo = new Todo(textInput.value);
        todoList.nuevoTodo(todo);

        crearTodoHtml(todo);

        textInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; // Input, Label, Button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        console.log(todoElemento);
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
});

buttonBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados();
    for (let index = divTodoList.children.length - 1; index >= 0; index--) {
        const elemento = divTodoList.children[index];
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }
});

filters.addEventListener('click', (event) => {
    console.log(event);

    const filtro = event.target.text;

    if (!filtro) return;

    anchorFilters.forEach(element => element.classList.remove('selected')); 

    event.target.classList.add('selected');

    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
            default:
                break;
        }
    }
});