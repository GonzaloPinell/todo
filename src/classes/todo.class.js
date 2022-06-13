export class Todo{

    static fromJson({id, tarea, creado, completado}){
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.creado = creado;
        tempTodo.completado = completado;

        return tempTodo;
    }

    constructor(tarea){

        this.id = new Date().getTime().toString();
        this.tarea = tarea;
        this.creado = new Date();
        this.completado = false;

    }

}