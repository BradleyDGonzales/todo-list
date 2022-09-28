import { formatISO, format } from "date-fns";
import count from './displayData'
let idNumber;
let storageCount;
export function editTask() {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');
    let titleInput = document.getElementById('title');
    let descInput = document.getElementById('description')
    let dateInput = document.getElementById('duedate');
    let prioInput = document.getElementById('priority');
    let submitText = document.getElementById('taskbutton');
    if (submitText.value === "Add task") {
        submitText.value = "Save changes"
    }
    titleInput.value = localStorage.getItem(`task${idNumber}title`)
    descInput.value = localStorage.getItem(`task${idNumber}desc`)
    dateInput.value = formatISO(new Date(localStorage.getItem(`task${idNumber}date`)), { representation: 'date'});
    prioInput.value = localStorage.getItem(`task${idNumber}prio`)
    console.log(dateInput.value);
    document.getElementById('taskbutton').addEventListener('click',function() {
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

}
export function obtainID(id) {
    idNumber = id.slice(-1);
    return idNumber;

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
        //localStorage.setItem('count', `${parseInt(localStorage.getItem('count')) - 1}`)
    }
    if (parseInt(localStorage.getItem('count')) === 0 || localStorage.getItem('count') === null || localStorage.length === 1) {
        localStorage.removeItem('count');
        console.log('nothing');
        localStorage.clear();
    }
    divElement.remove();
}
    