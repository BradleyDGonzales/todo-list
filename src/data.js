import moment, { relativeTimeRounding } from 'moment';
import { ToDoList } from '../src/ToDoList'

export let taskTitle;
export let taskDesc;
export let taskDate;
export let taskPrio;
export let count = 1;
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
    let newTask = new ToDoList(taskTitle, taskDesc, taskDate, taskPrio);
    const taskDiv = document.querySelectorAll('.task');
    const taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');
    taskCard.setAttribute('id', `task${count}`)
    const titleElement = document.createElement('p');
    const descElement = document.createElement('p');
    const dateElement = document.createElement('p');
    const prioElement = document.createElement('p');
    titleElement.textContent = newTask.title;
    descElement.textContent = newTask.description
    dateElement.textContent = newTask.dueDate;
    prioElement.textContent = newTask.priority
    taskDiv.forEach(task => task.appendChild(taskCard));
    taskCard.appendChild(titleElement);
    taskCard.appendChild(descElement);
    taskCard.appendChild(dateElement);
    taskCard.appendChild(prioElement);

    count++;

}





