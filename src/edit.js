import { formatISO, format } from "date-fns";
import { currentProject } from "./projects";
import count from './displayData'
export let idNumber;
let storageCount;
export let editTaskCalled;
export function editProjectTask(projectName) {
    projectName = projectName.slice(7, projectName.length - 10);
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');
    let projectTitleInput = document.getElementById('title');
    let projectDescInput = document.getElementById('description')
    let projectDateInput = document.getElementById('duedate');
    let projectPrioInput = document.getElementById('priority');
    let projectTaskButtonID = document.querySelector('input[type=submit]').id;
    let submitText;
    if (projectTaskButtonID === "taskbutton") {
        submitText = document.getElementById(`${projectTaskButtonID}`)
    }
    else {
        submitText = document.getElementById(`${projectTaskButtonID}`)
    }
    if (submitText.value === "Add task") {
        submitText.value = "Save changes"
    }
    projectTitleInput.value = localStorage.getItem(`project${projectName}task${idNumber}title`)
    projectDescInput.value = localStorage.getItem(`project${projectName}task${idNumber}desc`)
    projectDateInput.value = formatISO(new Date(localStorage.getItem(`project${projectName}task${idNumber}date`)), { representation: 'date'});
    projectPrioInput.value = localStorage.getItem(`project${projectName}task${idNumber}prio`)
    document.getElementById(`${projectTaskButtonID}`).addEventListener('click',function() {
        const dt = new Date(projectDateInput.value);
        const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
        localStorage.setItem(`project${projectName}task${idNumber}title`,projectTitleInput.value)
        localStorage.setItem(`project${projectName}task${idNumber}desc`,projectDescInput.value)
        localStorage.setItem(`project${projectName}task${idNumber}date`,format(dtDateOnly, 'MM/dd/yyyy'));
        localStorage.setItem(`project${projectName}task${idNumber}prio`,projectPrioInput.value)
    })
    openModalButtons.forEach(button => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        })
    })
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })

}
export function editTask() {
    editTaskCalled = true;
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');
    let titleInput = document.getElementById('title');
    let descInput = document.getElementById('description')
    let dateInput = document.getElementById('duedate');
    let prioInput = document.getElementById('priority');
    let taskButtonID = document.querySelector('input[type=submit]').id;
    let submitText;
    if (taskButtonID === "taskbutton") {
        submitText = document.getElementById(`${taskButtonID}`)
    }
    else {
        submitText = document.getElementById(`${taskButtonID}`)
    }
    if (submitText.value === "Add task") {
        submitText.value = "Save changes"
    }
    titleInput.value = localStorage.getItem(`task${idNumber}title`)
    descInput.value = localStorage.getItem(`task${idNumber}desc`)
    dateInput.value = formatISO(new Date(localStorage.getItem(`task${idNumber}date`)), { representation: 'date'});
    prioInput.value = localStorage.getItem(`task${idNumber}prio`)
    document.getElementById(`${taskButtonID}`).addEventListener('click',function() {
        const dt = new Date(dateInput.value);
        const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
        localStorage.setItem(`task${idNumber}title`,titleInput.value)
        localStorage.setItem(`task${idNumber}desc`,descInput.value)
        localStorage.setItem(`task${idNumber}date`,format(dtDateOnly, 'MM/dd/yyyy'));
        localStorage.setItem(`task${idNumber}prio`,prioInput.value)
    })
    openModalButtons.forEach(button => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal);
        })
    })
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })
    return;

}
export function obtainID(id) {
    if (id.includes("project-title")) {
        idNumber = id;
        let searchTerm = id.indexOf('project-title');
        idNumber = id.substring(searchTerm + 13, id.length);
    }
    else {
        idNumber = id;
        let searchTerm = id.indexOf('-task')
        idNumber = id.substring(searchTerm + 5, id.length)
    }

}
export function openModal(modal) {
    if (modal === null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}
export function closeModal(modal) {
    if (modal === null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
export function checkTask() {
    const checkImg = document.getElementById(`check-task${idNumber}`);
    if (checkImg.src.match('../src/icons/circle.png')) {
        checkImg.setAttribute('src','../src/icons/circle-checked.png')
        localStorage.setItem(`task${idNumber}status`,'checked')
    }
    else {
        checkImg.setAttribute('src','../src/icons/circle.png')
        localStorage.setItem(`task${idNumber}status`,'unchecked');
    }
}
export function checkProjectTask(projectName) {
    projectName = projectName.slice(7, projectName.length - 11);
    const projectCheckImg = document.getElementById(`project${projectName}check-task${idNumber}`);
    if (projectCheckImg.src.match('../src/icons/circle.png')) {
        projectCheckImg.setAttribute('src','../src/icons/circle-checked.png')
        localStorage.setItem(`project${projectName}task${idNumber}status`,'checked')
    }
    else {
        projectCheckImg.setAttribute('src','../src/icons/circle.png')
        localStorage.setItem(`project${projectName}task${idNumber}status`,'unchecked')
    }

}
export function deleteTask() {
    const divElement = document.getElementById(`task${idNumber}`);
    localStorage.removeItem(`task${idNumber}title`)
    localStorage.removeItem(`task${idNumber}status`)
    localStorage.removeItem(`task${idNumber}prio`)
    localStorage.removeItem(`task${idNumber}desc`)
    localStorage.removeItem(`task${idNumber}date`)
    if (localStorage.getItem('count') === null) {
        storageCount = 0;
    } 
    else {
        storageCount = parseInt(localStorage.getItem('count'));
    }
    if (localStorage.length === 1 || localStorage.length === 2 || localStorage.length === 3) {
        localStorage.clear();
    }
    divElement.remove();
}
export function deleteProjectTask(projectName) {
    projectName = projectName.slice(7, projectName.length - 12);
    const projectDivElement = document.getElementById(`project${projectName}task${idNumber}`)
    localStorage.removeItem(`project${projectName}task${idNumber}title`)
    localStorage.removeItem(`project${projectName}task${idNumber}status`)
    localStorage.removeItem(`project${projectName}task${idNumber}prio`)
    localStorage.removeItem(`project${projectName}task${idNumber}desc`)
    localStorage.removeItem(`project${projectName}task${idNumber}date`)
    if (localStorage.getItem('projectstaskcount') === null) {
        storageCount = 0;
    }
    else {
        storageCount = parseInt(localStorage.getItem('projectstaskcount'));
    }
    if (localStorage.length === 1 || localStorage.length === 2 || localStorage.length === 3) {
        localStorage.clear();
    }
    projectDivElement.remove();
}
    