import { projects } from "./create-project";

function editProject(projectIndex, name) {
    projects[projectIndex].name = name;

}

export { editProject };