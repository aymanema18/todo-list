import { createProject, projects } from "./create-project";
import { compareAsc, format } from "date-fns";

class Todo {
    constructor(title, dateInput, index, description = '') {
        this.title = title;
        this.description = description;
        this.date = dateInput;
        this.parentProject = projects[index].name;
    }
}

function createTodo(title, dateInput, index, description = '') {
    projects[index].todos.push(new Todo(title, dateInput, index, description = ''));
}


export {createTodo};