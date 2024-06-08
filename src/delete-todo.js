import { createProject, projects } from "./create-project";

function deleteTodo(todoIndex, projectIndex) {
    projects[projectIndex].todos.splice(todoIndex, 1);
}

export {deleteTodo};