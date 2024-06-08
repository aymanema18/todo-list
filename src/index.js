import { createProject, projects } from "./create-project";
import { createTodo } from "./create-todo";
import { deleteTodo } from "./delete-todo"; 
import { deleteProject } from "./delete-project";

createProject('tomorrow');
createTodo('eat your lunch', '2014-1-11', 0);
console.log(projects);
deleteTodo(0, 0);
console.log(projects);
createTodo('eat your lunch', '2014-1-11', 0);
console.log(projects);
deleteProject(0);
console.log(projects);

