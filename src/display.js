import { createProject, projects } from "./create-project";
import { createTodo } from "./create-todo";
import { idGenerator } from "./id-generator";
import { deleteTodo } from "./delete-todo";
import { deleteProject } from "./delete-project";
import { isComplete } from "./complete-task";
import { editTask } from "./edit-task";
import { storeProjects } from "./store-project";

const today = new Date().toISOString().split('T')[0];
document.querySelector('#task-date').setAttribute('min', today);
document.querySelector('#task-date-edit').setAttribute('min', today);

function initDisplay() {
    window.addEventListener('DOMContentLoaded', () => {
        const homeBtn = document.querySelector('.home');
        const tasksDiv = document.querySelector('.tasks-div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const q = document.createElement('q');
        const span = document.createElement('span');
        tasksDiv.innerHTML = '';
        h1.textContent = 'yeah science!';
        q.textContent = 'Some people have a way with words, and other people...oh, uh, not have way.';
        span.textContent = ' - Steve Martin';
        p.appendChild(q);
        p.appendChild(span);
        tasksDiv.appendChild(h1);
        tasksDiv.appendChild(p);

        
        homeBtn.addEventListener('click', () => {
            const tasksDiv = document.querySelector('.tasks-div');
            const h1 = document.createElement('h1');
            const p = document.createElement('p');
            const q = document.createElement('q');
            const span = document.createElement('span');
            tasksDiv.innerHTML = '';
            h1.textContent = 'yeah science!';
            q.textContent = 'Some people have a way with words, and other people...oh, uh, not have way.';
            span.textContent = ' - Steve Martin';
            p.appendChild(q);
            p.appendChild(span);
            tasksDiv.appendChild(h1);
            tasksDiv.appendChild(p);
        })
        showProjects();
    })
}

function showProjects() {
    const projectsData = JSON.parse(localStorage.getItem('projects'));
    const projectsContainer = document.querySelector('.projects-div');
    console.log(projectsData);
    for (let proj of projectsData) {
            projects.push(proj);
            const project = document.createElement('div');
            const projectEditBtn = document.createElement('div');
            const projectDlBtn = document.createElement('div');
            const projTitle = document.createElement('p');
            projectEditBtn.setAttribute('data-id', proj.id);
            projectDlBtn.setAttribute('data-id', proj.id);
            project.setAttribute('data-id', proj.id);
            projTitle.classList.add('btn');
            projTitle.classList.add('project-title');
            projectDlBtn.classList.add('btn');
            projectDlBtn.classList.add('proj-delete-btn');
            projectEditBtn.classList.add('btn');
            project.classList.add('project');
            projTitle.textContent = proj.name;
            projectDlBtn.textContent = 'X';
            projectEditBtn.textContent = 'E';
            
            project.appendChild(projTitle);
            project.appendChild(projectEditBtn);
            project.appendChild(projectDlBtn);
            projectsContainer.appendChild(project);

            displayDeleteProject(projectDlBtn);
            clickingOnProject(projTitle);
        }
}

function displayProject() {
    const addProjDl = document.querySelector('.proj-add');
    const dialogPr = document.querySelector('.project-dialog');
    const cnlProjDlBtn = document.querySelector('.proj-cancel');
    const dialogTask = document.querySelector('.task-dialog');
    const cnlTaskBtn = document.querySelector('.task-cancel');
    const projectsDiv = document.querySelector('.projects-div');
    const addProjBtn = document.querySelector('.add-project-btn');


    addProjBtn.addEventListener('click', () => {
        dialogPr.showModal();
    })

    cnlProjDlBtn.addEventListener('click', () => {
        const projName = document.querySelector('#project-name');
        projName.value = '';
        dialogPr.close();
    })


    addProjDl.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#project-name').value;
        const project = document.createElement('div');
        const title = document.createElement('p');
        const tasks = document.createElement('div');
        const oldTasks = document.querySelector('.tasks');
        const deleteDiv = document.createElement('div');
        const addTask = document.createElement('div');
        const tasksDiv = document.querySelector('.tasks-div');
        const oldPjTl = document.querySelector('.projects-title');
        const oldAddTask = document.querySelector('.add-task-btn');
        const projTitle = document.createElement('p');
        const projName = document.querySelector('#project-name');
        let id;
        deleteDiv.textContent = 'X';
        deleteDiv.classList.add('btn');
        deleteDiv.classList.add('proj-delete-btn');
        
        if (oldTasks) {
            oldTasks.remove();
        }
        
        if (oldAddTask) {
            oldAddTask.remove();
        }

        if (oldPjTl) {
            oldPjTl.remove();
        }

        addTask.addEventListener('click', () => {
            dialogTask.showModal();
        })
      
        cnlTaskBtn.addEventListener('click', () => {
            const taskTitle = document.querySelector('#task-name');
            const taskDesc = document.querySelector('#task-description');
            const taskDate = document.querySelector('#task-date');
            const taskPriority = document.querySelector('#task-priority');
            taskPriority.value = 'priority1';
            taskDate.value = '';
            taskDesc.value = ''; 
            taskTitle.value = '';
            dialogTask.close();
        })
        
        createProject(name);
        addTask.classList.add('btn');
        addTask.classList.add('add-task-btn');
        projTitle.classList.add('projects-title');
        tasks.classList.add('tasks');
        projTitle.textContent = name;
        addTask.textContent = '+ Add task';
        title.textContent = name;
        title.classList.add('project-title');
        for (let obj of projects) {
            id = obj.id; 
        }
        tasksDiv.innerHTML = '';
        project.setAttribute('data-id', id);
        projTitle.setAttribute('data-id', id);
        addTask.setAttribute('data-id', id);
        tasksDiv.appendChild(projTitle);
        tasksDiv.appendChild(tasks);
        tasksDiv.appendChild(addTask);
        project.classList.add('btn');
        project.classList.add('project');
        project.appendChild(title);
        project.appendChild(deleteDiv);
        projectsDiv.appendChild(project);
        displayTodo(id);
        displayDeleteProject(deleteDiv);
        clickingOnProject(title);
        projName.value = '';
        dialogPr.close();
        storeProjects();
    })
}


function displayTodo(id) {
    const formBtnsContainer = document.querySelector('.dl-btns-div-task');
    const oldAddTaskBtn = document.querySelector('.task-add');
    const addTaskDlBtn = document.createElement('button');
    const dialogTask = document.querySelector('.task-dialog');

    if (oldAddTaskBtn) {
        oldAddTaskBtn.remove();
    }

    addTaskDlBtn.classList.add('btn')
    addTaskDlBtn.classList.add('task-add')
    addTaskDlBtn.textContent = 'Add task';
    formBtnsContainer.appendChild(addTaskDlBtn);
    addTaskDlBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // const projectsDOM = document.querySelectorAll('.project');
        const name = document.querySelector('#task-name').value;
        const dateInput = document.querySelector('#task-date').value;
        const description = document.querySelector('#task-description').value;
        const priority = document.querySelector('#task-priority').value;
        const dlId = idGenerator();
        const taskTitle = document.querySelector('#task-name');
        const taskDesc = document.querySelector('#task-description');
        const taskDate = document.querySelector('#task-date');
        const taskPriority = document.querySelector('#task-priority');
        // let project;
        const index = projects.findIndex((obj) => obj.id === id);
        // const index = projects.findIndex((obj) => obj.id === addTask.parentElement.getAttribute("data-id"));
        createTodo(name, dateInput, index, description, dlId, priority);
        // for (let proj of projectsDOM) {
            //     if (proj.getAttribute('data-id') === addTask.getAttribute('data-id')) {
                //         project = proj;
                //     }
        // }
        
        showTasks(index, id, dlId);
        taskPriority.value = 'priority1';
        taskDate.value = '';
        taskDesc.value = ''; 
        taskTitle.value = '';
        dialogTask.close();
        storeProjects();
    });
    
}


function showTasks(index, id, dlId, counter) {
    const tasksDiv = document.querySelector('.tasks');
    const taskDiv = document.createElement('div');
    const dateDlEditDiv = document.createElement('div');
    const titleDescDiv = document.createElement('div');
    const checkBtn = document.createElement('div')
    const title = document.createElement('p');
    const description = document.createElement('p');
    const editBtn = document.createElement('div');
    const theDate = document.createElement('p');
    const deleteTaskDiv = document.createElement('div');
    let todo;
    if (typeof counter === 'number') {
        todo =  projects[index].todos[counter];
    } else {
        todo =  projects[index].todos[projects[index].todos.length - 1];
    }
    title.textContent = todo.title;
    theDate.textContent = todo.date;
    description.textContent = todo.description;
    editBtn.textContent = 'E';
    deleteTaskDiv.textContent = 'X';
    taskDiv.classList.add('task');
    checkBtn.classList.add('btn');
    checkBtn.classList.add('check-btn');
    title.classList.add('task-title');
    description.classList.add('task-desc');
    theDate.classList.add('date-task');
    editBtn.classList.add('btn');
    editBtn.classList.add('edit-btn');
    deleteTaskDiv.classList.add('btn');
    deleteTaskDiv.classList.add('dl-task-div');
    titleDescDiv.classList.add('title-desc-div');
    dateDlEditDiv.classList.add('date-dl-edit-div');
    titleDescDiv.appendChild(title);
    titleDescDiv.appendChild(description);
    dateDlEditDiv.appendChild(theDate);
    dateDlEditDiv.appendChild(editBtn);
    dateDlEditDiv.appendChild(deleteTaskDiv);
    taskDiv.appendChild(checkBtn);
    taskDiv.appendChild(titleDescDiv);
    taskDiv.appendChild(dateDlEditDiv);
    deleteTaskDiv.setAttribute('data-dl-id', dlId);
    taskDiv.setAttribute('data-id', id);
    taskDiv.setAttribute('data-dl-id', dlId);
    tasksDiv.appendChild(taskDiv);
    
    const taskIndex = projects[index].todos.findIndex((obj) => {
        return obj.deleteId === dlId;
    })
    if(projects[index].todos[taskIndex].complete === false) {
        checkBtn.textContent = '';
    } else {
        checkBtn.textContent = '✓';
    }
    checkBtn.addEventListener('click', () => {
        isChecked(checkBtn, index, dlId);
    })
    
    
    editCheckButtonColor(todo, checkBtn);
    displayEdit(editBtn, index, todo, checkBtn, title, description, theDate);
    displayDeleteTodo(deleteTaskDiv, index, dlId);
}

function isChecked(checkBtn, index, dlId) {
    const taskIndex = projects[index].todos.findIndex((obj) => {
        return obj.deleteId === dlId;
    })
    if(projects[index].todos[taskIndex].complete === false) {
            checkBtn.textContent = '✓';
            isComplete(index, taskIndex)
    } else {
        checkBtn.textContent = '';
        isComplete(index, taskIndex)
    }
}


function editCheckButtonColor(todo, checkBtn) {
    if (todo.priority === 'priority1') {
        checkBtn.style.border = '3px solid #EE5859';
    } else if (todo.priority === 'priority2') {
        checkBtn.style.border = '3px solid #7FED58';
    } else {
        checkBtn.style.border = '3px solid #57C0ED';
    }
}


function displayDeleteTodo(deleteDiv, index, deleteId) {
    deleteDiv.addEventListener('click', () => {
        const todosIndex = projects[index].todos.findIndex((obj) => {
            return obj.deleteId === deleteId;
        })
        const task = document.querySelector(`div[data-dl-id="${deleteId}"]`);
        task.remove();
        deleteTodo(todosIndex, index);
        storeProjects();
    })
}

function displayDeleteProject(deleteDiv) {
    deleteDiv.addEventListener('click', (event) => {
        const projectIndex = projects.findIndex((obj) => {
            return obj.id === event.target.parentElement.getAttribute('data-id');
        })
        event.target.parentElement.remove();
        deleteTasks(projectIndex);
        deleteProject(projectIndex);
        storeProjects();
        
    })
}

function deleteTasks(projectIndex) {
    const tasks = document.querySelectorAll('.task');
    const addTask = document.querySelector('.add-task-btn');
    for (let task of tasks) {
        if (projects[projectIndex].id === task.getAttribute('data-id')) {
            task.remove();
        }
    }
    if (projects[projectIndex].id === addTask.getAttribute('data-id')) {
        addTask.remove();
    }

}


function clickingOnProject(project, id) {
    const index = projects.findIndex((obj) => {
        console.log(obj.id);
        console.log(project.parentElement.getAttribute('data-id'));
        return obj.id === project.parentElement.getAttribute('data-id');
    });

    
    project.addEventListener('click', () => {
        const oldAddTaskBtn = document.querySelector('.add-task-btn');
        // console.log(oldAddTaskBtn);
        const addTaskBtn = document.createElement('div');
        // console.log(addTaskBtn);
        const tasks = document.querySelectorAll('.task');
        const projectTitle = document.createElement('p');
        let tasksDiv = document.querySelector('.tasks');
        const oldPjTl = document.querySelector('.projects-title');
        const tasksBoxDiv = document.querySelector('.tasks-div');
        const dialogTask = document.querySelector('.task-dialog');
        
        if (tasksDiv) {
            tasksDiv.remove();
        }
        tasksDiv = document.createElement('div');
        tasksDiv.classList.add('tasks');

        if (oldAddTaskBtn) {
            oldAddTaskBtn.remove();
        }
        
        if (oldPjTl) {
            // console.log(oldPjTl);
            oldPjTl.remove();
        }

        tasksBoxDiv.innerHTML = '';
        tasksBoxDiv.appendChild(projectTitle);
        tasksBoxDiv.appendChild(tasksDiv);
        tasksBoxDiv.appendChild(addTaskBtn);

        addTaskBtn.addEventListener('click', () => {
            dialogTask.showModal();
        })

        
        addTaskBtn.classList.add('btn');
        addTaskBtn.classList.add('add-task-btn');
        projectTitle.classList.add('projects-title');
        projectTitle.textContent = projects[index].name;
        addTaskBtn.textContent = '+ Add task';
        addTaskBtn.setAttribute('data-id', project.parentElement.getAttribute('data-id'))
        projectTitle.setAttribute('data-id', projects[index].id);
        
        for (let task of tasks) {
            task.remove();
        }
        let counter = 0;
        for (let task of projects[index].todos) {
            showTasks(index, task.id, task.deleteId, counter);
            counter++;
        }
        displayTodo(project.parentElement.getAttribute('data-id'));

    })
}

function displayEdit(editBtn, index, todo, checkBtn, title, description, theDate) {
    const cnlTaskEditBtn = document.querySelector('.task-cancel-edit');
    const dialogTaskEdit = document.querySelector('.task-dialog-edit');
    const titleEdit = document.querySelector('#task-name-edit');
    const descEdit = document.querySelector('#task-description-edit');
    const dateEdit = document.querySelector('#task-date-edit');
    const priorityEdit = document.querySelector('#task-priority-edit');
    
    editBtn.addEventListener('click', () => {
        const formEditBtnsContainer = document.querySelector('.dl-btns-div-task-edit');
        let addTaskDlEditBtn;
        const oldAddTaskDlEditBtn = document.querySelector('.task-add-edit');
        if(oldAddTaskDlEditBtn) {
            oldAddTaskDlEditBtn.remove();
        }
        addTaskDlEditBtn = document.createElement('button');
        addTaskDlEditBtn.classList.add('task-add-edit');
        addTaskDlEditBtn.textContent = 'Add';
        formEditBtnsContainer.appendChild(addTaskDlEditBtn);
        dialogTaskEdit.showModal();
        titleEdit.value = todo.title;
        descEdit.value = todo.description;
        dateEdit.value = todo.date;
        priorityEdit.value = todo.priority;

        addTaskDlEditBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const titleEdit = document.querySelector('#task-name-edit');
            const descEdit = document.querySelector('#task-description-edit');
            const dateEdit = document.querySelector('#task-date-edit');
            const priorityEdit = document.querySelector('#task-priority-edit');
            const taskIndex = projects[index].todos.findIndex((obj) => {
                return obj.deleteId === todo.deleteId;
            })
            editTask(index, taskIndex, titleEdit.value, descEdit.value,  dateEdit.value, priorityEdit.value);
            updateTask(todo, checkBtn, title, description, theDate, titleEdit, descEdit,  dateEdit);
            dialogTaskEdit.close();
        })
    })
    
    
    cnlTaskEditBtn.addEventListener('click', () => {
        dialogTaskEdit.close();
        titleEdit.value = '';
        descEdit.value = '';
        dateEdit.value = '';
        priorityEdit.value = '';
    })
}

function updateTask(todo, checkBtn, title, description, theDate, titleEdit, descEdit,  dateEdit) {
        editCheckButtonColor(todo, checkBtn);
        title.textContent = titleEdit.value;
        description.textContent = descEdit.value;
        theDate.textContent = dateEdit.value;


}

export { displayProject, initDisplay, showProjects };