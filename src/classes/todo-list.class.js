import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id === id) {
                todo.completado = !todo.completado;
            }
        }
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.guardarLocalStorage();
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todos'))
            ? JSON.parse(localStorage.getItem('todos'))
            : [];

        this.todos = this.todos.map(Todo.fromJson);

    }

}