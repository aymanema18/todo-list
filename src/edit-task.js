import { createProject, projects } from "./create-project";

function editTask(projectIndex, taskIndex, title, description, date, priority) {
    projects[projectIndex].todos[taskIndex].title = title;
    projects[projectIndex].todos[taskIndex].description = description;
    projects[projectIndex].todos[taskIndex].date = date;
    projects[projectIndex].todos[taskIndex].priority = priority;

}

export { editTask };