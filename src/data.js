import { insertDataToWebpage } from '../src/displayData';
export let taskTitle;
export let taskDesc;
export let taskDate;
export let taskPrio;
export let flag = false;
const form = document.querySelectorAll('.form');
export function collectData(e) {
    //e.preventDefault();
    let formData = new FormData(form[0]);
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
export function checkProjectData() {
    const projectTitle = document.getElementById('projectitle');
    if (!projectTitle.checkValidity()) {
        projectTitle.reportValidity();
    }

}
