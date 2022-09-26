import initModal from "./modal";

export function editTask() {
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');
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
    