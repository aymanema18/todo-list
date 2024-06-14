import { idGenerator } from "./id-generator";

let projects = [];

function createProject(name){
    projects.push({name, id: idGenerator(), todos: []});
}

export { createProject, projects };