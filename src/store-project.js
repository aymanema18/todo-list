import { projects } from "./create-project";

function storeProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export { storeProjects }