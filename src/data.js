import moment, { relativeTimeRounding } from 'moment';
import { ToDoList } from '../src/ToDoList'

export let taskTitle;
export let taskDesc;
export let taskDate;
export let taskPrio;
export let count = 0;
export let flag = false;
const form = document.querySelectorAll('.form');
export function collectData(e) {
    e.preventDefault();
    let formData = new FormData(form[0]);
    console.log(formData);
    taskTitle = formData.get('title');
    taskDesc = formData.get('description');
    taskDate = formData.get('duedate');
    taskPrio = formData.get('priority');
    checkData();
    if (flag === false) {
        insertDataToWebpage()
    }
}
export function checkData() {

    const titleInput = document.getElementById('title');
    const dateInput = document.getElementById('duedate');
    const prioInput = document.getElementById('priority');
    const descInput = document.getElementById('description')
    if (!titleInput.checkValidity()) {
        titleInput.reportValidity();
        flag = true;
    }
    else if (!dateInput.checkValidity()) {
        dateInput.reportValidity();
        flag = true;
    }
    else if (!prioInput.checkValidity()) {
        prioInput.reportValidity();
        flag = true;
    }
    else {
        flag = false;
    }
    if (descInput.value === '') {
        taskDesc = 'No description'
    }
}
export function insertDataToWebpage() {
    count++;
    const taskDiv = document.querySelectorAll('.task');
    const taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');
    taskCard.setAttribute('id', `task${count}`)
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
    taskCard.appendChild(titleElement);
    taskCard.appendChild(descElement);
    taskCard.appendChild(dateElement);
    taskCard.appendChild(prioElement);

}
export function insertLocalStorageToWebpage() {
    if (localStorage.length !== 0) {
        for (let i = 1; i <= parseInt(localStorage.getItem('count')); i++) {
            count = i;
            const taskDiv = document.querySelectorAll('.task');
            const taskCard = document.createElement('div');
            taskCard.classList.add('taskCard');
            taskCard.setAttribute('id', `task${i}`)
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
            let myDate = new Date();
            let todayDate = new Date(myDate.getTime() + myDate.getTimezoneOffset() * 60000).toLocaleDateString();
            console.log(todayDate);
            console.log(localStorage.getItem('task1date'))

            taskDiv.forEach(task => task.appendChild(taskCard));
            taskCard.appendChild(titleElement);
            taskCard.appendChild(descElement);
            taskCard.appendChild(dateElement);
            taskCard.appendChild(prioElement);
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
    let todayDate = new Date(myDate.getTime() + myDate.getTimezoneOffset() * 60000).toLocaleDateString();
    let todayTasks = [];
    let todayTasksValues = {};
    
    for (let i = 1; i <= parseInt(localStorage.getItem('count')); i++) {
        if (todayDate === localStorage.getItem(`task${i}date`)) {
            const taskDiv = document.querySelectorAll('.task');
            const taskCard = document.createElement('div');
            taskCard.classList.add('taskCard');
            taskCard.setAttribute('id', `task${count}`)
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




