import { createProject, projects } from "./create-project";
import { createTodo } from "./create-todo";
import { deleteTodo } from "./delete-todo"; 
import { deleteProject } from "./delete-project";
import { displayProject, initDisplay } from "./display";
import "./style.css";

window.projects = projects;


initDisplay();
displayProject();


