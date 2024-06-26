import { createProject, projects } from "./create-project";
import { createTodo } from "./create-todo";
import { idGenerator } from "./id-generator";
import { deleteTodo } from "./delete-todo";
import { deleteProject } from "./delete-project";
import { isComplete } from "./complete-task";
import { editTask } from "./edit-task";
import { storeProjects } from "./store-project";
import { editProject } from "./edit-project";

const today = new Date().toISOString().split('T')[0];
document.querySelector('#task-date').setAttribute('min', today);
document.querySelector('#task-date-edit').setAttribute('min', today);

function initDisplay() {
    window.addEventListener('DOMContentLoaded', () => {
        const homeBtn = document.querySelector('.home');
        const aboutBtn = document.querySelector('.about');
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
        displayProject();
        aboutBtn.addEventListener('click', () => {
            const tasksDiv = document.querySelector('.tasks-div');
            tasksDiv.innerHTML = `<h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione delectus perspiciatis. Accusantium rerum officia atque harum possimus! Quisquam, facere eum magni quasi sapiente doloremque officia. Exercitationem itaque debitis quibusdam. Quisquam quod in labore aperiam enim veniam excepturi laboriosam at.</p> <br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione delectus perspiciatis. Accusantium rerum officia atque harum possimus! Quisquam, facere eum magni quasi sapiente doloremque officia. Exercitationem itaque debitis quibusdam. Quisquam quod in labore aperiam enim veniam excepturi laboriosam at.</p>`;
        })
    })

}

function showProjects() {
    const projectsData = JSON.parse(localStorage.getItem('projects'));
    const projectsContainer = document.querySelector('.projects-div');
    if (projectsData) {
        console.log(projectsData);
        for (let proj of projectsData) {
                projects.push(proj);
                const project = document.createElement('div');
                const projectEditBtn = document.createElement('div');
                const projectDlBtn = document.createElement('div');
                const projTitle = document.createElement('p');
                const edDlContainer = document.createElement('div');
                projectEditBtn.setAttribute('data-id', proj.id);
                projectDlBtn.setAttribute('data-id', proj.id);
                project.setAttribute('data-id', proj.id);
                projTitle.classList.add('btn');
                projTitle.classList.add('project-title');
                edDlContainer.classList.add('pj-dl-ed-container');
                projectDlBtn.classList.add('btn');
                projectDlBtn.classList.add('proj-delete-btn');
                projectEditBtn.classList.add('btn');
                projectEditBtn.classList.add('project-edit-btn');
                project.classList.add('project');
                projTitle.textContent = proj.name;
                projectDlBtn.textContent = 'X';
                projectEditBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="edit-pen" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
                
                project.appendChild(projTitle);
                edDlContainer.appendChild(projectEditBtn);
                edDlContainer.appendChild(projectDlBtn);
                project.appendChild(edDlContainer);
                projectsContainer.appendChild(project);
                
                displayEditProject(projectEditBtn);
                displayDeleteProject(projectDlBtn);
                clickingOnProject(projTitle);
            }

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


    addProjDl.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#project-name').value;
        if (name.length !== 0 && name.length < 11) {
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
            const edDlContainer = document.createElement('div');
            const projectEditBtn = document.createElement('div');
            let id;
            projectEditBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="edit-pen" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
            deleteDiv.textContent = 'X';
            projectEditBtn.classList.add('btn');
            projectEditBtn.classList.add('project-edit-btn');
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
            displayEditProject(projectEditBtn);
            createProject(name);
            addTask.classList.add('btn');
            addTask.classList.add('add-task-btn');
            edDlContainer.classList.add('pj-dl-ed-container');
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
            edDlContainer.appendChild(projectEditBtn);
            edDlContainer.appendChild(deleteDiv);
            project.appendChild(edDlContainer);
            projectsDiv.appendChild(project);
            displayTodo(id);
            displayDeleteProject(deleteDiv);
            clickingOnProject(title);
            projName.value = '';
            dialogPr.close();
            storeProjects();

        }
    })
}

function displayEditProject(editBtn) {
    const projectDL = document.querySelector('.project-dialog-edit');
    
    editBtn.addEventListener('click', () => {
        projectDL.showModal();
        const editBtnContainer = document.querySelector('.dl-btns-div-proj-edit');
        const oldEdBtnDl = document.querySelector('.proj-add-edit');
        const edBtnDl = document.createElement('button');
        const clProjEdBtn = document.querySelector('.proj-cancel-edit');

        if (oldEdBtnDl) {
            oldEdBtnDl.remove();
        }
        edBtnDl.classList.add('btn');
        edBtnDl.classList.add('proj-add-edit');
        edBtnDl.setAttribute('data-id', editBtn.parentElement.parentElement.getAttribute('data-id'));
        edBtnDl.textContent = 'Edit';
        editBtnContainer.appendChild(edBtnDl);

        edBtnDl.addEventListener('click', (event) => {
            const name = document.querySelector('#project-name-edit').value;
            event.preventDefault();
            if (name.length !== 0 && name.length < 11) {
                const projDiv = document.querySelectorAll('.project');
                const projIndex = Array.prototype.slice.call(projDiv).findIndex((obj) => {
                    return obj.getAttribute('data-id') === edBtnDl.getAttribute('data-id');
                })
                const projTitle = projDiv[projIndex].querySelector('p');
                const index = projects.findIndex((obj) => {
                    return obj.id === edBtnDl.getAttribute('data-id');
                })
                editProject(index, name);
                storeProjects();
                projTitle.textContent = name;
                document.querySelector('#project-name-edit').value = '';
                projectDL.close();

            }
        })

        clProjEdBtn.addEventListener('click', () => {
            document.querySelector('#project-name-edit').value = '';
            projectDL.close();
        })

        
        
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
        if (name.length !== 0 && name.length < 53 && dateInput !== '' && description.length < 55) {
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

        }
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
    editBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="edit-pen" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
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
        storeProjects();
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
            return obj.id === event.target.parentElement.parentElement.getAttribute('data-id');
        })
        event.target.parentElement.parentElement.remove();
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
    if (addTask) {
        if (projects.length !== 0) {
            if (projects[projectIndex].id === addTask.getAttribute('data-id')) {
                addTask.remove();
            }

        }
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
        addTaskDlEditBtn.classList.add('btn');
        addTaskDlEditBtn.classList.add('task-add-edit');
        addTaskDlEditBtn.textContent = 'Edit';
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
            if (titleEdit.value.length !== 0 && titleEdit.value.length < 53 && dateEdit.value !== '' && descEdit.value.length < 55) {
                const taskIndex = projects[index].todos.findIndex((obj) => {
                    return obj.deleteId === todo.deleteId;
                })
                editTask(index, taskIndex, titleEdit.value, descEdit.value,  dateEdit.value, priorityEdit.value);
                updateTask(todo, checkBtn, title, description, theDate, titleEdit, descEdit,  dateEdit);
                dialogTaskEdit.close();
                storeProjects();

            }
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