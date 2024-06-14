import { projects } from "./create-project";

function isComplete(projectIndex, taskIndex) {
    if (projects[projectIndex].todos[taskIndex].complete === false) {
        projects[projectIndex].todos[taskIndex].complete = true;
    } else {
        projects[projectIndex].todos[taskIndex].complete = false;
    }
}

export { isComplete };