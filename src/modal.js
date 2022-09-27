export default function initModal() {
    if (document.getElementById('taskbutton').value === "Save changes") {
        document.getElementById('taskbutton').value = "Add task"
    }
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })
    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            document.getElementById("myform").reset();
            closeModal(modal);
        })
    })
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            document.getElementById("myform").reset();
            closeModal(modal)
        })
    })
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