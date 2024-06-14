import { projects } from "./create-project";
import { compareAsc, format } from "date-fns";

class Todo {
    constructor(title, dateInput, index, description = '', deleteId, priority, complete = false) {
        this.title = title;
        this.description = description;
        this.date = dateInput;
        this.id = projects[index].id;
        this.deleteId = deleteId;
        this.priority = priority;
        this.complete = complete;
    }
}

function createTodo(title, dateInput, index, description = '', deleteId, priority, complete = false) {
    projects[index].todos.push(new Todo(title, dateInput, index, description, deleteId, priority, complete));
}


export { createTodo };