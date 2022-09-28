import { ToDoList } from '../src/ToDoList'
import { taskTitle, taskDesc, taskDate, taskPrio, flag } from '../src/data'
import { isThisMonth, isThisWeek } from 'date-fns';

export let count = 0;
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
    }
    return;
}
export function showTodaysTasks() {
    const taskDivParent = document.getElementById('tasks')
    let child = taskDivParent.lastElementChild;
    while (child) {
        taskDivParent.removeChild(child);
        child = taskDivParent.lastElementChild;
    }
    let myDate = new Date();
    let todayDate = new Date(myDate.getTime() + myDate.getTimezoneOffset()).toLocaleDateString();
    let todayTasksValues = {};

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
        else {
            console.log(`not the same`)
        }
    }
}
export function showWeeklyTasks() {
    const taskDivParent = document.getElementById('tasks')
    let child = taskDivParent.lastElementChild;
    while (child) {
        taskDivParent.removeChild(child);
        child = taskDivParent.lastElementChild;
    }
    let weeklyTasksValues = {};
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
            console.log(`worked`);
        }
    }
}
export function showMonthlyTasks() {
    const taskDivParent = document.getElementById('tasks')
    let child = taskDivParent.lastElementChild;
    while (child) {
        taskDivParent.removeChild(child);
        child = taskDivParent.lastElementChild;
    }
    let monthlyTasksValues = {};
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
            console.log(`worked`);
        }
    }
}
export function showAllTasks() {
    const taskDivParent = document.getElementById('tasks')
    let child = taskDivParent.lastElementChild;
    while (child) {
        taskDivParent.removeChild(child);
        child = taskDivParent.lastElementChild;
    }
    let generalTasksValues = {};
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
}