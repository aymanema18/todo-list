import { idGenerator } from "./id-generator";

const projects = [];

function createProject(name){
    projects.push({name, id: idGenerator(), todos: []});
}

export { createProject, projects };