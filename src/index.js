import './styles.css'
import initModal from '../src/modal'
import { collectData } from '../src/data';
import { showTodaysTasks, insertLocalStorageToWebpage, showWeeklyTasks, showAllTasks, showMonthlyTasks} from '../src/displayData';
import { checkTask, deleteTask, editTask, obtainID } from '../src/edit';

const addTaskButton = document.getElementsByClassName('imgbutton');
const submitButton = document.querySelector('input[type=submit]')
Array.from(addTaskButton).forEach(button => {
    button.addEventListener('click', initModal());
})
submitButton.addEventListener('click', function() {
    if (document.getElementById('taskbutton').value === "Add task") {
        collectData();
        document.getElementById("myform").reset();
    }
})
window.onload = function() {
    insertLocalStorageToWebpage();
}
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.textContent === 'Today') {
        showTodaysTasks();
    }
    if (e.target.tagName === 'A' && e.target.textContent === 'General') {
        showAllTasks();
    }
    if (e.target.tagName === 'A' && e.target.textContent === 'This Week') {
        showWeeklyTasks();
    }
    if (e.target.tagName === 'A' && e.target.textContent === 'This Month') {
        showMonthlyTasks();
    }
    if (e.target.tagName === 'IMG' && e.target.className === 'taskedit') {
        obtainID(e.target.id);
        editTask();
    }
    if (e.target.textContent === "Add a task") {
        initModal();
    }
    if (e.target.tagName === 'IMG' && e.target.className === 'taskcheck') {
        obtainID(e.target.id);
        checkTask();   
    }
    if (e.target.tagName === 'IMG' && e.target.className === 'taskdelete') {
        obtainID(e.target.id);
        deleteTask();
    
    }
})