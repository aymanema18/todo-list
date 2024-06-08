const projects = [];

function createProject(name){
    projects.push({name, todos: []});
}

export {createProject, projects};