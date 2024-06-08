import { createProject, projects } from "./create-project";

function deleteProject(projectIndex) {
    projects.splice(projectIndex, 1);
}

export {deleteProject};