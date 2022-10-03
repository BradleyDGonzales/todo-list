import { ToDoList } from '../src/ToDoList'
import { taskTitle, taskDesc, taskDate, taskPrio, flag } from '../src/data'
import { isThisMonth, isThisWeek } from 'date-fns';
import { currentProject } from './projects';
import { idNumber } from './edit';
export let count = 0;
export let projectsTaskCount = 0;
export function revertTaskButtonID() {
    const selectAddTask = document.getElementsByClassName('inputtask')[0];
    selectAddTask.id = 'taskbutton';
}
export function insertProjectDataToWebpage() {
    projectsTaskCount++;
    const projectTaskDiv = document.querySelectorAll('.task');
    const projectTaskCard = document.createElement('div');
    projectTaskCard.classList.add('projectTaskCard');
    projectTaskCard.setAttribute('id', `project${currentProject}task${projectsTaskCount}`);
    const projectEditDiv = document.createElement('div');
    projectEditDiv.classList.add('projectTaskEditDiv');
    const projectCheckButton = document.createElement('button');
    projectCheckButton.classList.add('projectImgCheckButton');
    const projectCheckButtonImg = document.createElement('img');
    projectCheckButtonImg.setAttribute('src', '../src/icons/circle.png');
    projectCheckButtonImg.classList.add('projectTaskCheck');
    projectCheckButtonImg.setAttribute('id', `project${currentProject}check-task${projectsTaskCount}`)
    const projectDeleteButton = document.createElement('button');
    projectDeleteButton.classList.add('projectImgDeleteButton');
    const projectDeleteButtonImg = document.createElement('img');
    projectDeleteButtonImg.setAttribute('src', '../src/icons/delete.png')
    projectDeleteButtonImg.classList.add('projectTaskDelete');
    projectDeleteButtonImg.setAttribute('id', `project${currentProject}delete-task${projectsTaskCount}`)

    const projectEditButton = document.createElement('button');
    projectEditButton.classList.add('projectImgEditButton')
    projectEditButton.setAttribute('data-modal-target', '#modal')


    const projectEditImg = document.createElement('img');
    projectEditImg.setAttribute('src', '../src/icons/edit.png')
    projectEditImg.classList.add('projectTaskEdit')
    projectEditImg.setAttribute('id', `project${currentProject}edit-task${projectsTaskCount}`)

    const projectTitleElement = document.createElement('p');
    projectTitleElement.classList.add('projectTaskTitle')
    const projectDescElement = document.createElement('p');
    projectDescElement.classList.add('projectTaskDesc')
    const projectDateElement = document.createElement('p');
    projectDateElement.classList.add('projectTaskDate')
    const projectPrioElement = document.createElement('p');
    projectPrioElement.classList.add('projectTaskPrio')

    let projectNewTask = new ToDoList(taskTitle, taskDesc, taskDate, taskPrio);
    localStorage.setItem(`project${currentProject}task${projectsTaskCount}title`, projectNewTask.title)
    localStorage.setItem(`project${currentProject}task${projectsTaskCount}desc`, projectNewTask.description)
    localStorage.setItem(`project${currentProject}task${projectsTaskCount}date`, projectNewTask.dueDate)
    localStorage.setItem(`project${currentProject}task${projectsTaskCount}prio`, projectNewTask.priority)
    localStorage.setItem('projectstaskcount', projectsTaskCount);

    projectTitleElement.textContent = localStorage.getItem(`project${currentProject}task${projectsTaskCount}title`)
    projectDescElement.textContent = localStorage.getItem(`project${currentProject}task${projectsTaskCount}desc`)
    projectDateElement.textContent = localStorage.getItem(`project${currentProject}task${projectsTaskCount}date`)
    projectPrioElement.textContent = localStorage.getItem(`project${currentProject}task${projectsTaskCount}prio`)

    projectTaskDiv.forEach(projectTask => projectTask.appendChild(projectTaskCard));
    projectTaskCard.appendChild(projectEditDiv);
    projectEditDiv.appendChild(projectEditButton);
    projectEditDiv.appendChild(projectDeleteButton);
    projectEditDiv.appendChild(projectCheckButton);
    projectCheckButton.appendChild(projectCheckButtonImg);
    projectDeleteButton.appendChild(projectDeleteButtonImg);
    projectEditButton.appendChild(projectEditImg)

    projectTaskCard.appendChild(projectTitleElement)
    projectTaskCard.appendChild(projectDescElement)
    projectTaskCard.appendChild(projectDateElement)
    projectTaskCard.appendChild(projectPrioElement)
}

export function insertDataToWebpage() {
    count++;
    const taskDiv = document.querySelectorAll('.task');
    const taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');
    taskCard.setAttribute('id', `task${count}`)
    const editDiv = document.createElement('div');
    editDiv.classList.add('taskedit-div')
    const checkButton = document.createElement('button')
    checkButton.classList.add('imgcheckbutton')

    const checkButtonImg = document.createElement('img');
    checkButtonImg.setAttribute('src', '../src/icons/circle.png')
    checkButtonImg.classList.add('taskcheck');
    checkButtonImg.setAttribute('id', `check-task${count}`)

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('imgdeletebutton');

    const deleteButtonImg = document.createElement('img');
    deleteButtonImg.setAttribute('src', '../src/icons/delete.png')
    deleteButtonImg.classList.add('taskdelete');
    deleteButtonImg.setAttribute('id', `delete-task${count}`)

    const editButton = document.createElement('button');
    editButton.classList.add('imgeditbutton')
    editButton.setAttribute('data-modal-target', '#modal')


    const editElement = document.createElement('img');
    editElement.setAttribute('src', '../src/icons/edit.png')
    editElement.classList.add('taskedit')
    editElement.setAttribute('id', `edit-task${count}`)

    const titleElement = document.createElement('p');
    titleElement.classList.add('tasktitle')
    const descElement = document.createElement('p');
    descElement.classList.add('taskdesc')
    const dateElement = document.createElement('p');
    dateElement.classList.add('taskdate')
    const prioElement = document.createElement('p');
    prioElement.classList.add('taskprio')
    let newTask = new ToDoList(taskTitle, taskDesc, taskDate, taskPrio);
    localStorage.setItem(`task${count}title`, newTask.title);
    localStorage.setItem(`task${count}desc`, newTask.description);
    localStorage.setItem(`task${count}date`, newTask.dueDate);
    localStorage.setItem(`task${count}prio`, newTask.priority);
    localStorage.setItem(`count`, count)
    titleElement.textContent = localStorage.getItem(`task${count}title`)
    descElement.textContent = localStorage.getItem(`task${count}desc`)
    dateElement.textContent = localStorage.getItem(`task${count}date`)
    prioElement.textContent = localStorage.getItem(`task${count}prio`)
    taskDiv.forEach(task => task.appendChild(taskCard));
    taskCard.appendChild(editDiv)
    editDiv.appendChild(editButton)
    editDiv.appendChild(deleteButton)
    editDiv.appendChild(checkButton);
    checkButton.appendChild(checkButtonImg);
    deleteButton.appendChild(deleteButtonImg);
    editButton.appendChild(editElement);
    taskCard.appendChild(titleElement);
    taskCard.appendChild(descElement);
    taskCard.appendChild(dateElement);
    taskCard.appendChild(prioElement);

}
export function insertLocalStorageToWebpage() {
    if (localStorage.length !== 0) {
        for (let i = 1; i <= parseInt(localStorage.getItem('count')); i++) {
            if (localStorage.getItem(`task${i}title`) !== null) {
                count = i;
                const taskDiv = document.querySelectorAll('.task');
                const taskCard = document.createElement('div');
                taskCard.classList.add('taskCard');
                taskCard.setAttribute('id', `task${i}`)
                const editDiv = document.createElement('div');
                editDiv.classList.add('taskedit-div')
                const checkButton = document.createElement('button')
                checkButton.classList.add('imgcheckbutton')

                const checkButtonImg = document.createElement('img');
                if (localStorage.getItem(`task${i}status`) === null || localStorage.getItem(`task${i}status`) === 'unchecked') {
                    checkButtonImg.setAttribute('src', '../src/icons/circle.png')
                }
                else {
                    checkButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
                }
                checkButtonImg.classList.add('taskcheck');
                checkButtonImg.setAttribute('id', `check-task${i}`)
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('imgdeletebutton');

                const deleteButtonImg = document.createElement('img');
                deleteButtonImg.setAttribute('src', '../src/icons/delete.png')
                deleteButtonImg.classList.add('taskdelete');
                deleteButtonImg.setAttribute('id', `delete-task${count}`)

                const editButton = document.createElement('button');

                editButton.classList.add('imgeditbutton')
                editButton.setAttribute('data-modal-target', '#modal')

                const editElement = document.createElement('img');
                editElement.setAttribute('src', '../src/icons/edit.png')
                editElement.classList.add('taskedit')
                editElement.setAttribute('id', `edit-task${i}`)

                const titleElement = document.createElement('p');
                titleElement.classList.add('tasktitle')
                const descElement = document.createElement('p');
                descElement.classList.add('taskdesc')
                const dateElement = document.createElement('p');
                dateElement.classList.add('taskdate')
                const prioElement = document.createElement('p');
                prioElement.classList.add('taskprio')
                titleElement.textContent = localStorage.getItem(`task${i}title`)
                descElement.textContent = localStorage.getItem(`task${i}desc`)
                dateElement.textContent = localStorage.getItem(`task${i}date`)
                prioElement.textContent = localStorage.getItem(`task${i}prio`)

                taskDiv.forEach(task => task.appendChild(taskCard));
                taskCard.appendChild(editDiv)
                editDiv.appendChild(editButton)
                editDiv.appendChild(deleteButton)
                editDiv.appendChild(checkButton);
                checkButton.appendChild(checkButtonImg);
                deleteButton.appendChild(deleteButtonImg);
                editButton.appendChild(editElement);
                taskCard.appendChild(titleElement);
                taskCard.appendChild(descElement);
                taskCard.appendChild(dateElement);
                taskCard.appendChild(prioElement);
            }
        }
        for (let j = 1; j <= parseInt(localStorage.getItem('projectscount')); j++) {
            let projectTitle;
            if (localStorage.getItem(`project${j}title`) !== null) {
                projectTitle = localStorage.getItem(`project${j}title`)
                const projectsForm = document.getElementById('projectform');
                const projectsListDiv = document.createElement('div');
                projectsListDiv.classList.add('projects-list')
                projectsListDiv.setAttribute('id', `project${j}`)

                const projectsAnchor = document.createElement('a');
                projectsAnchor.setAttribute('id', `project-title${j}`);
                projectsAnchor.setAttribute('href', '#')
                projectsAnchor.classList.add('project-title');
                projectsAnchor.textContent = localStorage.getItem(`project${j}title`)

                const projectsDeleteButton = document.createElement('button');
                projectsDeleteButton.classList.add('project-delete');
                projectsDeleteButton.setAttribute('id', `deleteproject${j}`)
                projectsDeleteButton.textContent = '✗';

                projectsForm.appendChild(projectsListDiv);
                projectsListDiv.appendChild(projectsAnchor);
                projectsAnchor.appendChild(projectsDeleteButton);
            }
            if (projectTitle !== undefined) {
                if (projectTitle.includes(" ")) {
                    projectTitle = projectTitle.slice(0).replace(/ /g, "_");
                }
                else if (projectTitle.includes("-")) {
                    projectTitle = projectTitle.slice(0).replace(/-/g, "_")
                }
                else {
                    projectTitle = projectTitle.slice(0).replace(/ /g, "_");
                }
                for (let k = 1; k <= parseInt(localStorage.getItem('projectstaskcount')); k++) {
                    if (localStorage.getItem(`project${projectTitle}task${k}title`) !== null) {
                        projectsTaskCount = k;
                        const projectTaskDiv = document.querySelectorAll('.task');
                        const projectTaskCard = document.createElement('div');
                        projectTaskCard.classList.add('projectTaskCard');
                        projectTaskCard.setAttribute('id', `project${projectTitle}task${k}`);
                        const projectEditDiv = document.createElement('div');
                        projectEditDiv.classList.add('projectTaskEditDiv');
                        const projectCheckButton = document.createElement('button');
                        projectCheckButton.classList.add('projectImgCheckButton');

                        const projectCheckButtonImg = document.createElement('img');

                        if (localStorage.getItem(`project${projectTitle}task${k}status`) === null || localStorage.getItem(`project${projectTitle}task${k}status`) === 'unchecked') {
                            projectCheckButtonImg.setAttribute('src', '../src/icons/circle.png')
                        }
                        else {
                            projectCheckButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
                        }
                        projectCheckButtonImg.classList.add('projectTaskCheck');
                        projectCheckButtonImg.setAttribute('id', `project${projectTitle}check-task${k}`)
                        const projectDeleteButton = document.createElement('button');
                        projectDeleteButton.classList.add('projectImgDeleteButton');
                        const projectDeleteButtonImg = document.createElement('img');
                        projectDeleteButtonImg.setAttribute('src', '../src/icons/delete.png')
                        projectDeleteButtonImg.classList.add('projectTaskDelete');
                        projectDeleteButtonImg.setAttribute('id', `project${projectTitle}delete-task${k}`)

                        const projectEditButton = document.createElement('button');
                        projectEditButton.classList.add('projectImgEditButton')
                        projectEditButton.setAttribute('data-modal-target', '#modal')


                        const projectEditImg = document.createElement('img');
                        projectEditImg.setAttribute('src', '../src/icons/edit.png')
                        projectEditImg.classList.add('projectTaskEdit')
                        projectEditImg.setAttribute('id', `project${projectTitle}edit-task${k}`)

                        const projectTitleElement = document.createElement('p');
                        projectTitleElement.classList.add('projectTaskTitle')
                        const projectDescElement = document.createElement('p');
                        projectDescElement.classList.add('projectTaskDesc')
                        const projectDateElement = document.createElement('p');
                        projectDateElement.classList.add('projectTaskDate')
                        const projectPrioElement = document.createElement('p');
                        projectPrioElement.classList.add('projectTaskPrio')

                        projectTitleElement.textContent = localStorage.getItem(`project${projectTitle}task${k}title`)
                        projectDescElement.textContent = localStorage.getItem(`project${projectTitle}task${k}desc`)
                        projectDateElement.textContent = localStorage.getItem(`project${projectTitle}task${k}date`)
                        projectPrioElement.textContent = localStorage.getItem(`project${projectTitle}task${k}prio`)

                        projectTaskDiv.forEach(projectTask => projectTask.appendChild(projectTaskCard));
                        projectTaskCard.appendChild(projectEditDiv);
                        projectEditDiv.appendChild(projectEditButton);
                        projectEditDiv.appendChild(projectDeleteButton);
                        projectEditDiv.appendChild(projectCheckButton);
                        projectCheckButton.appendChild(projectCheckButtonImg);
                        projectDeleteButton.appendChild(projectDeleteButtonImg);
                        projectEditButton.appendChild(projectEditImg)

                        projectTaskCard.appendChild(projectTitleElement)
                        projectTaskCard.appendChild(projectDescElement)
                        projectTaskCard.appendChild(projectDateElement)
                        projectTaskCard.appendChild(projectPrioElement)
                    }
                }
            }

        }
    }
    return;
}
export function showProjectsTasks(currentProject) {
    const taskDivParent = document.getElementById('tasks')
    let child = taskDivParent.lastElementChild;
    while (child) {
        taskDivParent.removeChild(child);
        child = taskDivParent.lastElementChild;
    }
    let myDate = new Date();
    let todayDate = new Date(myDate.getTime() + myDate.getTimezoneOffset()).toLocaleDateString();
    let projectsTasksValues = {};

    let idNumber = currentProject;
    let searchTerm = currentProject.indexOf('project-title');
    idNumber = currentProject.substring(searchTerm + 13, currentProject.length);
    let thisProject = localStorage.getItem(`project${idNumber}title`)
    if (thisProject.includes(" ")) {
        thisProject = thisProject.slice(0).replace(/ /g, "_");
    }
    else if (thisProject.includes("-")) {
        thisProject = thisProject.slice(0).replace(/-/g, "_")
    }
    else {
        thisProject = thisProject.slice(0).replace(/ /g, "_");
    }
    for (let i = 1; i <= parseInt(localStorage.getItem('projectstaskcount')); i++) {
        if (localStorage.getItem(`project${thisProject}task${i}title`) !== null) {
            const taskDiv = document.querySelectorAll('.task');
            const projectTaskCard = document.createElement('div');
            projectTaskCard.classList.add('projectTaskCard');
            projectTaskCard.setAttribute('id', `project${thisProject}task${i}`);
            const projectEditDiv = document.createElement('div');
            projectEditDiv.classList.add('projectTaskEditDiv')
            const projectCheckButton = document.createElement('button');
            projectCheckButton.classList.add('projectImgCheckButton');

            const projectCheckButtonImg = document.createElement('img');
            if (localStorage.getItem(`project${thisProject}task${i}status`) === null || localStorage.getItem(`project${thisProject}task${i}status` === 'unchecked')) {
                projectCheckButtonImg.setAttribute('src', '../src/icons/circle.png')
            }
            else {
                projectCheckButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
            }
            projectCheckButtonImg.classList.add('projectTaskCheck')
            projectCheckButtonImg.setAttribute('id', `project${thisProject}check-task${i}`)
            const projectDeleteButton = document.createElement('button');
            projectDeleteButton.classList.add('projectImgDeleteButton');

            const projectDeleteButtonImg = document.createElement('img');
            projectDeleteButtonImg.setAttribute('src', '../src/icons/delete.png');
            projectDeleteButtonImg.classList.add('projectTaskDelete');
            projectDeleteButtonImg.setAttribute('id', `project${thisProject}delete-task${i}`);

            const projectEditButton = document.createElement('button');
            projectEditButton.classList.add('projectImgEditButton')
            projectEditButton.setAttribute('data-modal-target', '#modal')

            const projectEditElement = document.createElement('img');
            projectEditElement.setAttribute('src', '../src/icons/edit.png')
            projectEditElement.classList.add('projectTaskEdit')
            projectEditElement.setAttribute('id', `project${thisProject}edit-task${i}`)

            const projectTitleElement = document.createElement('p');
            projectTitleElement.classList.add('projectTaskTitle')
            const projectDescElement = document.createElement('p');
            projectDescElement.classList.add('projectTaskDesc')
            const projectDateElement = document.createElement('p');
            projectDateElement.classList.add('projectTaskDate')
            const projectPrioElement = document.createElement('p');
            projectPrioElement.classList.add('projectTaskPrio');
            projectTitleElement.textContent = localStorage.getItem(`project${thisProject}task${i}title`)
            projectDescElement.textContent = localStorage.getItem(`project${thisProject}task${i}desc`)
            projectDateElement.textContent = localStorage.getItem(`project${thisProject}task${i}date`)
            projectPrioElement.textContent = localStorage.getItem(`project${thisProject}task${i}prio`)

            projectsTasksValues[`project${thisProject}task${i}title`] = localStorage.getItem(`project${thisProject}task${i}title`)
            projectsTasksValues[`project${thisProject}task${i}description`] = localStorage.getItem(`project${thisProject}task${i}desc`)
            projectsTasksValues[`project${thisProject}task${i}duedate`] = todayDate;
            projectsTasksValues[`project${thisProject}task${i}priority`] = localStorage.getItem(`project${thisProject}task${i}prio`)
            taskDiv.forEach(task => task.appendChild(projectTaskCard));
            projectTaskCard.appendChild(projectEditDiv)
            projectEditDiv.appendChild(projectEditButton)
            projectEditDiv.appendChild(projectDeleteButton)
            projectEditDiv.appendChild(projectCheckButton);
            projectCheckButton.appendChild(projectCheckButtonImg);
            projectDeleteButton.appendChild(projectDeleteButtonImg);
            projectEditButton.appendChild(projectEditElement);
            projectTaskCard.appendChild(projectTitleElement);
            projectTaskCard.appendChild(projectDescElement);
            projectTaskCard.appendChild(projectDateElement);
            projectTaskCard.appendChild(projectPrioElement);
        }
    }

}
export function showTodaysTasks() {
    revertTaskButtonID();
    const addTaskText = document.getElementById('addtask');
    addTaskText.textContent = 'Add a task'
    const taskDivParent = document.getElementById('tasks')
    let child = taskDivParent.lastElementChild;
    while (child) {
        taskDivParent.removeChild(child);
        child = taskDivParent.lastElementChild;
    }
    let myDate = new Date();
    let todayDate = new Date(myDate.getTime() + myDate.getTimezoneOffset()).toLocaleDateString();
    let todayTasksValues = {};
    let projectsTodayTasksValues = {};

    for (let i = 1; i <= parseInt(localStorage.getItem('count')); i++) {
        if (todayDate === localStorage.getItem(`task${i}date`)) {
            const taskDiv = document.querySelectorAll('.task');
            const taskCard = document.createElement('div');
            taskCard.classList.add('taskCard');
            taskCard.setAttribute('id', `task${i}`)
            const editDiv = document.createElement('div');
            editDiv.classList.add('taskedit-div')
            const checkButton = document.createElement('button')
            checkButton.classList.add('imgcheckbutton')

            const checkButtonImg = document.createElement('img');
            if (localStorage.getItem(`task${i}status`) === null || localStorage.getItem(`task${i}status`) === 'unchecked') {
                checkButtonImg.setAttribute('src', '../src/icons/circle.png')
            }
            else {
                checkButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
            }
            checkButtonImg.classList.add('taskcheck');
            checkButtonImg.setAttribute('id', `check-task${i}`)
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('imgdeletebutton');

            const deleteButtonImg = document.createElement('img');
            deleteButtonImg.setAttribute('src', '../src/icons/delete.png')
            deleteButtonImg.classList.add('taskdelete');
            deleteButtonImg.setAttribute('id', `delete-task${count}`)

            const editButton = document.createElement('button');
            editButton.classList.add('imgeditbutton')
            editButton.setAttribute('data-modal-target', '#modal')


            const editElement = document.createElement('img');
            editElement.setAttribute('src', '../src/icons/edit.png')
            editElement.classList.add('taskedit')
            editElement.setAttribute('id', `edit-task${i}`)

            const titleElement = document.createElement('p');
            titleElement.classList.add('tasktitle')
            const descElement = document.createElement('p');
            descElement.classList.add('taskdesc')
            const dateElement = document.createElement('p');
            dateElement.classList.add('taskdate')
            const prioElement = document.createElement('p');
            prioElement.classList.add('taskprio');
            titleElement.textContent = localStorage.getItem(`task${i}title`)
            descElement.textContent = localStorage.getItem(`task${i}desc`)
            dateElement.textContent = localStorage.getItem(`task${i}date`)
            prioElement.textContent = localStorage.getItem(`task${i}prio`)
            todayTasksValues[`title${i}`] = localStorage.getItem(`task${i}title`)
            todayTasksValues[`description${i}`] = localStorage.getItem(`task${i}desc`)
            todayTasksValues[`duedate${i}`] = todayDate;
            todayTasksValues[`priority${i}`] = localStorage.getItem(`task${i}prio`)
            taskDiv.forEach(task => task.appendChild(taskCard));
            taskCard.appendChild(editDiv)
            editDiv.appendChild(editButton)
            editDiv.appendChild(deleteButton)
            editDiv.appendChild(checkButton);
            checkButton.appendChild(checkButtonImg);
            deleteButton.appendChild(deleteButtonImg);
            editButton.appendChild(editElement);
            taskCard.appendChild(titleElement);
            taskCard.appendChild(descElement);
            taskCard.appendChild(dateElement);
            taskCard.appendChild(prioElement);
        }
    }
    for (let j = 1; j <= parseInt(localStorage.getItem('projectscount')); j++) {
        if (localStorage.getItem(`project${j}title`) !== null) {
            let thisProject = localStorage.getItem(`project${j}title`)
            if (thisProject.includes(" ")) {
                thisProject = thisProject.slice(0).replace(/ /g, "_");
            }
            else if (thisProject.includes("-")) {
                thisProject = thisProject.slice(0).replace(/-/g, "_")
            }
            else {
                thisProject = thisProject.slice(0).replace(/ /g, "_");
            }
            for (let k = 1; k <= parseInt(localStorage.getItem('projectstaskcount')); k++) {
                if (localStorage.getItem(`project${thisProject}task${k}title`) !== null) {
                    if (todayDate === localStorage.getItem(`project${thisProject}task${k}date`)) {
                        const taskDiv = document.querySelectorAll('.task');
                        const projectTaskCard = document.createElement('div');
                        projectTaskCard.classList.add('projectTaskCard');
                        projectTaskCard.setAttribute('id', `project${thisProject}task${k}`);
                        const projectEditDiv = document.createElement('div');
                        projectEditDiv.classList.add('projectTaskEditDiv')
                        const projectCheckButton = document.createElement('button');
                        projectCheckButton.classList.add('projectImgCheckButton');

                        const projectCheckButtonImg = document.createElement('img');
                        if (localStorage.getItem(`project${thisProject}task${k}status`) === null || localStorage.getItem(`project${thisProject}task${k}status` === 'unchecked')) {
                            projectCheckButtonImg.setAttribute('src', '../src/icons/circle.png')
                        }
                        else {
                            projectCheckButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
                        }
                        projectCheckButtonImg.classList.add('projectTaskCheck')
                        projectCheckButtonImg.setAttribute('id', `project${thisProject}check-task${k}`)
                        const projectDeleteButton = document.createElement('button');
                        projectDeleteButton.classList.add('projectImgDeleteButton');

                        const projectDeleteButtonImg = document.createElement('img');
                        projectDeleteButtonImg.setAttribute('src', '../src/icons/delete.png');
                        projectDeleteButtonImg.classList.add('projectTaskDelete');
                        projectDeleteButtonImg.setAttribute('id', `project${thisProject}delete-task${k}`);

                        const projectEditButton = document.createElement('button');
                        projectEditButton.classList.add('projectImgEditButton')
                        projectEditButton.setAttribute('data-modal-target', '#modal')

                        const projectEditElement = document.createElement('img');
                        projectEditElement.setAttribute('src', '../src/icons/edit.png')
                        projectEditElement.classList.add('projectTaskEdit')
                        projectEditElement.setAttribute('id', `project${thisProject}edit-task${k}`)

                        const projectTitleElement = document.createElement('p');
                        projectTitleElement.classList.add('projectTaskTitle')
                        const projectDescElement = document.createElement('p');
                        projectDescElement.classList.add('projectTaskDesc')
                        const projectDateElement = document.createElement('p');
                        projectDateElement.classList.add('projectTaskDate')
                        const projectPrioElement = document.createElement('p');
                        projectPrioElement.classList.add('projectTaskPrio');
                        projectTitleElement.textContent = localStorage.getItem(`project${thisProject}task${k}title`)
                        projectDescElement.textContent = localStorage.getItem(`project${thisProject}task${k}desc`)
                        projectDateElement.textContent = localStorage.getItem(`project${thisProject}task${k}date`)
                        projectPrioElement.textContent = localStorage.getItem(`project${thisProject}task${k}prio`)

                        projectsTodayTasksValues[`project${thisProject}task${k}title`] = localStorage.getItem(`project${thisProject}task${k}title`)
                        projectsTodayTasksValues[`project${thisProject}task${k}description`] = localStorage.getItem(`project${thisProject}task${k}desc`)
                        projectsTodayTasksValues[`project${thisProject}task${k}duedate`] = localStorage.getItem(`project${thisProject}task${k}date`)
                        projectsTodayTasksValues[`project${thisProject}task${k}priority`] = localStorage.getItem(`project${thisProject}task${k}prio`)
                        taskDiv.forEach(task => task.appendChild(projectTaskCard));
                        projectTaskCard.appendChild(projectEditDiv)
                        projectEditDiv.appendChild(projectEditButton)
                        projectEditDiv.appendChild(projectDeleteButton)
                        projectEditDiv.appendChild(projectCheckButton);
                        projectCheckButton.appendChild(projectCheckButtonImg);
                        projectDeleteButton.appendChild(projectDeleteButtonImg);
                        projectEditButton.appendChild(projectEditElement);
                        projectTaskCard.appendChild(projectTitleElement);
                        projectTaskCard.appendChild(projectDescElement);
                        projectTaskCard.appendChild(projectDateElement);
                        projectTaskCard.appendChild(projectPrioElement);
                    }
                }
            }
        }
    }
}
export function showWeeklyTasks() {
    revertTaskButtonID();
    const addTaskText = document.getElementById('addtask');
    addTaskText.textContent = 'Add a task'
    const taskDivParent = document.getElementById('tasks')
    let child = taskDivParent.lastElementChild;
    while (child) {
        taskDivParent.removeChild(child);
        child = taskDivParent.lastElementChild;
    }
    let weeklyTasksValues = {};
    let projectsWeeklyTasksValues = {};
    for (let i = 1; i <= parseInt(localStorage.getItem('count')); i++) {
        if (isThisWeek(new Date(localStorage.getItem(`task${i}date`)))) {
            const taskDiv = document.querySelectorAll('.task');
            const taskCard = document.createElement('div');
            taskCard.classList.add('taskCard');
            taskCard.setAttribute('id', `task${i}`)
            const editDiv = document.createElement('div');
            editDiv.classList.add('taskedit-div')
            const checkButton = document.createElement('button')
            checkButton.classList.add('imgcheckbutton')

            const checkButtonImg = document.createElement('img');
            if (localStorage.getItem(`task${i}status`) === null || localStorage.getItem(`task${i}status`) === 'unchecked') {
                checkButtonImg.setAttribute('src', '../src/icons/circle.png')
            }
            else {
                checkButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
            }
            checkButtonImg.classList.add('taskcheck');
            checkButtonImg.setAttribute('id', `check-task${i}`)
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('imgdeletebutton');

            const deleteButtonImg = document.createElement('img');
            deleteButtonImg.setAttribute('src', '../src/icons/delete.png')
            deleteButtonImg.classList.add('taskdelete');
            deleteButtonImg.setAttribute('id', `delete-task${count}`)

            const editButton = document.createElement('button');
            editButton.classList.add('imgeditbutton')
            editButton.setAttribute('data-modal-target', '#modal')


            const editElement = document.createElement('img');
            editElement.setAttribute('src', '../src/icons/edit.png')
            editElement.classList.add('taskedit')
            editElement.setAttribute('id', `edit-task${i}`)

            const titleElement = document.createElement('p');
            titleElement.classList.add('tasktitle')
            const descElement = document.createElement('p');
            descElement.classList.add('taskdesc')
            const dateElement = document.createElement('p');
            dateElement.classList.add('taskdate')
            const prioElement = document.createElement('p');
            prioElement.classList.add('taskprio');
            titleElement.textContent = localStorage.getItem(`task${i}title`)
            descElement.textContent = localStorage.getItem(`task${i}desc`)
            dateElement.textContent = localStorage.getItem(`task${i}date`)
            prioElement.textContent = localStorage.getItem(`task${i}prio`)
            weeklyTasksValues[`title${i}`] = localStorage.getItem(`task${i}title`)
            weeklyTasksValues[`description${i}`] = localStorage.getItem(`task${i}desc`)
            weeklyTasksValues[`duedate${i}`] = localStorage.getItem(`task${i}date`)
            weeklyTasksValues[`priority${i}`] = localStorage.getItem(`task${i}prio`)
            taskDiv.forEach(task => task.appendChild(taskCard));
            taskCard.appendChild(editDiv)
            editDiv.appendChild(editButton)
            editDiv.appendChild(deleteButton)
            editDiv.appendChild(checkButton);
            checkButton.appendChild(checkButtonImg);
            deleteButton.appendChild(deleteButtonImg);
            editButton.appendChild(editElement);
            taskCard.appendChild(titleElement);
            taskCard.appendChild(descElement);
            taskCard.appendChild(dateElement);
            taskCard.appendChild(prioElement);
        }
    }
    for (let j = 1; j <= parseInt(localStorage.getItem('projectscount')); j++) {
        if (localStorage.getItem(`project${j}title`) !== null) {
            let thisProject = localStorage.getItem(`project${j}title`)
            if (thisProject.includes(" ")) {
                thisProject = thisProject.slice(0).replace(/ /g, "_");
            }
            else if (thisProject.includes("-")) {
                thisProject = thisProject.slice(0).replace(/-/g, "_")
            }
            else {
                thisProject = thisProject.slice(0).replace(/ /g, "_");
            }
            for (let k = 1; k <= parseInt(localStorage.getItem('projectstaskcount')); k++) {
                if (localStorage.getItem(`project${thisProject}task${k}title`) !== null) {
                    if (isThisWeek(new Date(localStorage.getItem(`project${thisProject}task${k}date`)))) {
                        const taskDiv = document.querySelectorAll('.task');
                        const projectTaskCard = document.createElement('div');
                        projectTaskCard.classList.add('projectTaskCard');
                        projectTaskCard.setAttribute('id', `project${thisProject}task${k}`);
                        const projectEditDiv = document.createElement('div');
                        projectEditDiv.classList.add('projectTaskEditDiv')
                        const projectCheckButton = document.createElement('button');
                        projectCheckButton.classList.add('projectImgCheckButton');

                        const projectCheckButtonImg = document.createElement('img');
                        if (localStorage.getItem(`project${thisProject}task${k}status`) === null || localStorage.getItem(`project${thisProject}task${k}status` === 'unchecked')) {
                            projectCheckButtonImg.setAttribute('src', '../src/icons/circle.png')
                        }
                        else {
                            projectCheckButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
                        }
                        projectCheckButtonImg.classList.add('projectTaskCheck')
                        projectCheckButtonImg.setAttribute('id', `project${thisProject}check-task${k}`)
                        const projectDeleteButton = document.createElement('button');
                        projectDeleteButton.classList.add('projectImgDeleteButton');

                        const projectDeleteButtonImg = document.createElement('img');
                        projectDeleteButtonImg.setAttribute('src', '../src/icons/delete.png');
                        projectDeleteButtonImg.classList.add('projectTaskDelete');
                        projectDeleteButtonImg.setAttribute('id', `project${thisProject}delete-task${k}`);

                        const projectEditButton = document.createElement('button');
                        projectEditButton.classList.add('projectImgEditButton')
                        projectEditButton.setAttribute('data-modal-target', '#modal')

                        const projectEditElement = document.createElement('img');
                        projectEditElement.setAttribute('src', '../src/icons/edit.png')
                        projectEditElement.classList.add('projectTaskEdit')
                        projectEditElement.setAttribute('id', `project${thisProject}edit-task${k}`)

                        const projectTitleElement = document.createElement('p');
                        projectTitleElement.classList.add('projectTaskTitle')
                        const projectDescElement = document.createElement('p');
                        projectDescElement.classList.add('projectTaskDesc')
                        const projectDateElement = document.createElement('p');
                        projectDateElement.classList.add('projectTaskDate')
                        const projectPrioElement = document.createElement('p');
                        projectPrioElement.classList.add('projectTaskPrio');
                        projectTitleElement.textContent = localStorage.getItem(`project${thisProject}task${k}title`)
                        projectDescElement.textContent = localStorage.getItem(`project${thisProject}task${k}desc`)
                        projectDateElement.textContent = localStorage.getItem(`project${thisProject}task${k}date`)
                        projectPrioElement.textContent = localStorage.getItem(`project${thisProject}task${k}prio`)

                        projectsWeeklyTasksValues[`project${thisProject}task${k}title`] = localStorage.getItem(`project${thisProject}task${k}title`)
                        projectsWeeklyTasksValues[`project${thisProject}task${k}description`] = localStorage.getItem(`project${thisProject}task${k}desc`)
                        projectsWeeklyTasksValues[`project${thisProject}task${k}duedate`] = localStorage.getItem(`project${thisProject}task${k}date`)
                        projectsWeeklyTasksValues[`project${thisProject}task${k}priority`] = localStorage.getItem(`project${thisProject}task${k}prio`)
                        taskDiv.forEach(task => task.appendChild(projectTaskCard));
                        projectTaskCard.appendChild(projectEditDiv)
                        projectEditDiv.appendChild(projectEditButton)
                        projectEditDiv.appendChild(projectDeleteButton)
                        projectEditDiv.appendChild(projectCheckButton);
                        projectCheckButton.appendChild(projectCheckButtonImg);
                        projectDeleteButton.appendChild(projectDeleteButtonImg);
                        projectEditButton.appendChild(projectEditElement);
                        projectTaskCard.appendChild(projectTitleElement);
                        projectTaskCard.appendChild(projectDescElement);
                        projectTaskCard.appendChild(projectDateElement);
                        projectTaskCard.appendChild(projectPrioElement);
                    }
                }
            }
        }
    }
}
export function showMonthlyTasks() {
    revertTaskButtonID();
    const addTaskText = document.getElementById('addtask');
    addTaskText.textContent = 'Add a task'
    const taskDivParent = document.getElementById('tasks')
    let child = taskDivParent.lastElementChild;
    while (child) {
        taskDivParent.removeChild(child);
        child = taskDivParent.lastElementChild;
    }
    let monthlyTasksValues = {};
    let projectsMonthlyTasksValues = {}
    for (let i = 1; i <= parseInt(localStorage.getItem('count')); i++) {
        if (isThisMonth(new Date(localStorage.getItem(`task${i}date`)))) {
            const taskDiv = document.querySelectorAll('.task');
            const taskCard = document.createElement('div');
            taskCard.classList.add('taskCard');
            taskCard.setAttribute('id', `task${i}`)
            const editDiv = document.createElement('div');
            editDiv.classList.add('taskedit-div')
            const checkButton = document.createElement('button')
            checkButton.classList.add('imgcheckbutton')

            const checkButtonImg = document.createElement('img');
            if (localStorage.getItem(`task${i}status`) === null || localStorage.getItem(`task${i}status`) === 'unchecked') {
                checkButtonImg.setAttribute('src', '../src/icons/circle.png')
            }
            else {
                checkButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
            }
            checkButtonImg.classList.add('taskcheck');
            checkButtonImg.setAttribute('id', `check-task${i}`)
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('imgdeletebutton');

            const deleteButtonImg = document.createElement('img');
            deleteButtonImg.setAttribute('src', '../src/icons/delete.png')
            deleteButtonImg.classList.add('taskdelete');
            deleteButtonImg.setAttribute('id', `delete-task${count}`)

            const editButton = document.createElement('button');
            editButton.classList.add('imgeditbutton')
            editButton.setAttribute('data-modal-target', '#modal')


            const editElement = document.createElement('img');
            editElement.setAttribute('src', '../src/icons/edit.png')
            editElement.classList.add('taskedit')
            editElement.setAttribute('id', `edit-task${i}`)

            const titleElement = document.createElement('p');
            titleElement.classList.add('tasktitle')
            const descElement = document.createElement('p');
            descElement.classList.add('taskdesc')
            const dateElement = document.createElement('p');
            dateElement.classList.add('taskdate')
            const prioElement = document.createElement('p');
            prioElement.classList.add('taskprio');
            titleElement.textContent = localStorage.getItem(`task${i}title`)
            descElement.textContent = localStorage.getItem(`task${i}desc`)
            dateElement.textContent = localStorage.getItem(`task${i}date`)
            prioElement.textContent = localStorage.getItem(`task${i}prio`)
            monthlyTasksValues[`title${i}`] = localStorage.getItem(`task${i}title`)
            monthlyTasksValues[`description${i}`] = localStorage.getItem(`task${i}desc`)
            monthlyTasksValues[`duedate${i}`] = localStorage.getItem(`task${i}date`)
            monthlyTasksValues[`priority${i}`] = localStorage.getItem(`task${i}prio`)
            taskDiv.forEach(task => task.appendChild(taskCard));
            taskCard.appendChild(editDiv)
            editDiv.appendChild(editButton)
            editDiv.appendChild(deleteButton)
            editDiv.appendChild(checkButton);
            checkButton.appendChild(checkButtonImg);
            deleteButton.appendChild(deleteButtonImg);
            editButton.appendChild(editElement);
            taskCard.appendChild(titleElement);
            taskCard.appendChild(descElement);
            taskCard.appendChild(dateElement);
            taskCard.appendChild(prioElement);
        }
    }
    for (let j = 1; j <= parseInt(localStorage.getItem('projectscount')); j++) {
        if (localStorage.getItem(`project${j}title`) !== null) {
            let thisProject = localStorage.getItem(`project${j}title`)
            if (thisProject.includes(" ")) {
                thisProject = thisProject.slice(0).replace(/ /g, "_");
            }
            else if (thisProject.includes("-")) {
                thisProject = thisProject.slice(0).replace(/-/g, "_")
            }
            else {
                thisProject = thisProject.slice(0).replace(/ /g, "_");
            }
            for (let k = 1; k <= parseInt(localStorage.getItem('projectstaskcount')); k++) {
                if (localStorage.getItem(`project${thisProject}task${k}title`) !== null) {
                    if (isThisMonth(new Date(localStorage.getItem(`project${thisProject}task${k}date`)))) {
                        const taskDiv = document.querySelectorAll('.task');
                        const projectTaskCard = document.createElement('div');
                        projectTaskCard.classList.add('projectTaskCard');
                        projectTaskCard.setAttribute('id', `project${thisProject}task${k}`);
                        const projectEditDiv = document.createElement('div');
                        projectEditDiv.classList.add('projectTaskEditDiv')
                        const projectCheckButton = document.createElement('button');
                        projectCheckButton.classList.add('projectImgCheckButton');

                        const projectCheckButtonImg = document.createElement('img');
                        if (localStorage.getItem(`project${thisProject}task${k}status`) === null || localStorage.getItem(`project${thisProject}task${k}status` === 'unchecked')) {
                            projectCheckButtonImg.setAttribute('src', '../src/icons/circle.png')
                        }
                        else {
                            projectCheckButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
                        }
                        projectCheckButtonImg.classList.add('projectTaskCheck')
                        projectCheckButtonImg.setAttribute('id', `project${thisProject}check-task${k}`)
                        const projectDeleteButton = document.createElement('button');
                        projectDeleteButton.classList.add('projectImgDeleteButton');

                        const projectDeleteButtonImg = document.createElement('img');
                        projectDeleteButtonImg.setAttribute('src', '../src/icons/delete.png');
                        projectDeleteButtonImg.classList.add('projectTaskDelete');
                        projectDeleteButtonImg.setAttribute('id', `project${thisProject}delete-task${k}`);

                        const projectEditButton = document.createElement('button');
                        projectEditButton.classList.add('projectImgEditButton')
                        projectEditButton.setAttribute('data-modal-target', '#modal')

                        const projectEditElement = document.createElement('img');
                        projectEditElement.setAttribute('src', '../src/icons/edit.png')
                        projectEditElement.classList.add('projectTaskEdit')
                        projectEditElement.setAttribute('id', `project${thisProject}edit-task${k}`)

                        const projectTitleElement = document.createElement('p');
                        projectTitleElement.classList.add('projectTaskTitle')
                        const projectDescElement = document.createElement('p');
                        projectDescElement.classList.add('projectTaskDesc')
                        const projectDateElement = document.createElement('p');
                        projectDateElement.classList.add('projectTaskDate')
                        const projectPrioElement = document.createElement('p');
                        projectPrioElement.classList.add('projectTaskPrio');
                        projectTitleElement.textContent = localStorage.getItem(`project${thisProject}task${k}title`)
                        projectDescElement.textContent = localStorage.getItem(`project${thisProject}task${k}desc`)
                        projectDateElement.textContent = localStorage.getItem(`project${thisProject}task${k}date`)
                        projectPrioElement.textContent = localStorage.getItem(`project${thisProject}task${k}prio`)

                        projectsMonthlyTasksValues[`project${thisProject}task${k}title`] = localStorage.getItem(`project${thisProject}task${k}title`)
                        projectsMonthlyTasksValues[`project${thisProject}task${k}description`] = localStorage.getItem(`project${thisProject}task${k}desc`)
                        projectsMonthlyTasksValues[`project${thisProject}task${k}duedate`] = localStorage.getItem(`project${thisProject}task${k}date`)
                        projectsMonthlyTasksValues[`project${thisProject}task${k}priority`] = localStorage.getItem(`project${thisProject}task${k}prio`)
                        taskDiv.forEach(task => task.appendChild(projectTaskCard));
                        projectTaskCard.appendChild(projectEditDiv)
                        projectEditDiv.appendChild(projectEditButton)
                        projectEditDiv.appendChild(projectDeleteButton)
                        projectEditDiv.appendChild(projectCheckButton);
                        projectCheckButton.appendChild(projectCheckButtonImg);
                        projectDeleteButton.appendChild(projectDeleteButtonImg);
                        projectEditButton.appendChild(projectEditElement);
                        projectTaskCard.appendChild(projectTitleElement);
                        projectTaskCard.appendChild(projectDescElement);
                        projectTaskCard.appendChild(projectDateElement);
                        projectTaskCard.appendChild(projectPrioElement);
                    }
                }
            }
        }
    }
}
export function showAllTasks() {
    revertTaskButtonID();
    const addTaskText = document.getElementById('addtask');
    addTaskText.textContent = 'Add a task'
    const taskDivParent = document.getElementById('tasks')
    let child = taskDivParent.lastElementChild;
    while (child) {
        taskDivParent.removeChild(child);
        child = taskDivParent.lastElementChild;
    }
    let generalTasksValues = {};
    let projectsTasksValues = {};
    for (let i = 1; i <= parseInt(localStorage.getItem('count')); i++) {
        if (localStorage.getItem(`task${i}title`) !== null) {

            const taskDiv = document.querySelectorAll('.task');
            const taskCard = document.createElement('div');
            taskCard.classList.add('taskCard');
            taskCard.setAttribute('id', `task${i}`)
            const editDiv = document.createElement('div');
            editDiv.classList.add('taskedit-div')
            const checkButton = document.createElement('button')
            checkButton.classList.add('imgcheckbutton')

            const checkButtonImg = document.createElement('img');
            if (localStorage.getItem(`task${i}status`) === null || localStorage.getItem(`task${i}status`) === 'unchecked') {
                checkButtonImg.setAttribute('src', '../src/icons/circle.png')
            }
            else {
                checkButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
            }
            checkButtonImg.classList.add('taskcheck');
            checkButtonImg.setAttribute('id', `check-task${i}`)
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('imgdeletebutton');

            const deleteButtonImg = document.createElement('img');
            deleteButtonImg.setAttribute('src', '../src/icons/delete.png')
            deleteButtonImg.classList.add('taskdelete');
            deleteButtonImg.setAttribute('id', `delete-task${count}`)

            const editButton = document.createElement('button');
            editButton.classList.add('imgeditbutton')
            editButton.setAttribute('data-modal-target', '#modal')


            const editElement = document.createElement('img');
            editElement.setAttribute('src', '../src/icons/edit.png')
            editElement.classList.add('taskedit')
            editElement.setAttribute('id', `edit-task${i}`)

            const titleElement = document.createElement('p');
            titleElement.classList.add('tasktitle')
            const descElement = document.createElement('p');
            descElement.classList.add('taskdesc')
            const dateElement = document.createElement('p');
            dateElement.classList.add('taskdate')
            const prioElement = document.createElement('p');
            prioElement.classList.add('taskprio');
            titleElement.textContent = localStorage.getItem(`task${i}title`)
            descElement.textContent = localStorage.getItem(`task${i}desc`)
            dateElement.textContent = localStorage.getItem(`task${i}date`)
            prioElement.textContent = localStorage.getItem(`task${i}prio`)
            generalTasksValues[`title${i}`] = localStorage.getItem(`task${i}title`)
            generalTasksValues[`description${i}`] = localStorage.getItem(`task${i}desc`)
            generalTasksValues[`duedate${i}`] = localStorage.getItem(`task${i}date`)
            generalTasksValues[`priority${i}`] = localStorage.getItem(`task${i}prio`)
            taskDiv.forEach(task => task.appendChild(taskCard));
            taskCard.appendChild(editDiv)
            editDiv.appendChild(editButton)
            editDiv.appendChild(deleteButton)
            editDiv.appendChild(checkButton);
            checkButton.appendChild(checkButtonImg);
            deleteButton.appendChild(deleteButtonImg);
            editButton.appendChild(editElement);
            taskCard.appendChild(titleElement);
            taskCard.appendChild(descElement);
            taskCard.appendChild(dateElement);
            taskCard.appendChild(prioElement);
        }

    }
    for (let j = 1; j <= parseInt(localStorage.getItem('projectscount')); j++) {
        if (localStorage.getItem(`project${j}title`) !== null) {
            let thisProject = localStorage.getItem(`project${j}title`)
            if (thisProject.includes(" ")) {
                thisProject = thisProject.slice(0).replace(/ /g, "_");
            }
            else if (thisProject.includes("-")) {
                thisProject = thisProject.slice(0).replace(/-/g, "_")
            }
            else {
                thisProject = thisProject.slice(0).replace(/ /g, "_");
            }
            for (let k = 1; k <= parseInt(localStorage.getItem('projectstaskcount')); k++) {
                if (localStorage.getItem(`project${thisProject}task${k}title`) !== null) {
                    const taskDiv = document.querySelectorAll('.task');
                    const projectTaskCard = document.createElement('div');
                    projectTaskCard.classList.add('projectTaskCard');
                    projectTaskCard.setAttribute('id', `project${thisProject}task${k}`);
                    const projectEditDiv = document.createElement('div');
                    projectEditDiv.classList.add('projectTaskEditDiv')
                    const projectCheckButton = document.createElement('button');
                    projectCheckButton.classList.add('projectImgCheckButton');

                    const projectCheckButtonImg = document.createElement('img');
                    if (localStorage.getItem(`project${thisProject}task${k}status`) === null || localStorage.getItem(`project${thisProject}task${k}status` === 'unchecked')) {
                        projectCheckButtonImg.setAttribute('src', '../src/icons/circle.png')
                    }
                    else {
                        projectCheckButtonImg.setAttribute('src', '../src/icons/circle-checked.png')
                    }
                    projectCheckButtonImg.classList.add('projectTaskCheck')
                    projectCheckButtonImg.setAttribute('id', `project${thisProject}check-task${k}`)
                    const projectDeleteButton = document.createElement('button');
                    projectDeleteButton.classList.add('projectImgDeleteButton');

                    const projectDeleteButtonImg = document.createElement('img');
                    projectDeleteButtonImg.setAttribute('src', '../src/icons/delete.png');
                    projectDeleteButtonImg.classList.add('projectTaskDelete');
                    projectDeleteButtonImg.setAttribute('id', `project${thisProject}delete-task${k}`);

                    const projectEditButton = document.createElement('button');
                    projectEditButton.classList.add('projectImgEditButton')
                    projectEditButton.setAttribute('data-modal-target', '#modal')

                    const projectEditElement = document.createElement('img');
                    projectEditElement.setAttribute('src', '../src/icons/edit.png')
                    projectEditElement.classList.add('projectTaskEdit')
                    projectEditElement.setAttribute('id', `project${thisProject}edit-task${k}`)

                    const projectTitleElement = document.createElement('p');
                    projectTitleElement.classList.add('projectTaskTitle')
                    const projectDescElement = document.createElement('p');
                    projectDescElement.classList.add('projectTaskDesc')
                    const projectDateElement = document.createElement('p');
                    projectDateElement.classList.add('projectTaskDate')
                    const projectPrioElement = document.createElement('p');
                    projectPrioElement.classList.add('projectTaskPrio');
                    projectTitleElement.textContent = localStorage.getItem(`project${thisProject}task${k}title`)
                    projectDescElement.textContent = localStorage.getItem(`project${thisProject}task${k}desc`)
                    projectDateElement.textContent = localStorage.getItem(`project${thisProject}task${k}date`)
                    projectPrioElement.textContent = localStorage.getItem(`project${thisProject}task${k}prio`)

                    projectsTasksValues[`project${thisProject}task${k}title`] = localStorage.getItem(`project${thisProject}task${k}title`)
                    projectsTasksValues[`project${thisProject}task${k}description`] = localStorage.getItem(`project${thisProject}task${k}desc`)
                    projectsTasksValues[`project${thisProject}task${k}duedate`] = localStorage.getItem(`project${thisProject}task${k}date`)
                    projectsTasksValues[`project${thisProject}task${k}priority`] = localStorage.getItem(`project${thisProject}task${k}prio`)
                    taskDiv.forEach(task => task.appendChild(projectTaskCard));
                    projectTaskCard.appendChild(projectEditDiv)
                    projectEditDiv.appendChild(projectEditButton)
                    projectEditDiv.appendChild(projectDeleteButton)
                    projectEditDiv.appendChild(projectCheckButton);
                    projectCheckButton.appendChild(projectCheckButtonImg);
                    projectDeleteButton.appendChild(projectDeleteButtonImg);
                    projectEditButton.appendChild(projectEditElement);
                    projectTaskCard.appendChild(projectTitleElement);
                    projectTaskCard.appendChild(projectDescElement);
                    projectTaskCard.appendChild(projectDateElement);
                    projectTaskCard.appendChild(projectPrioElement);
                }
            }
        }
    }
}