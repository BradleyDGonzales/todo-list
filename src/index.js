import './styles.css'
import initModal from '../src/modal'
import { collectData } from '../src/data';
import { showTodaysTasks, insertLocalStorageToWebpage, showWeeklyTasks, showAllTasks, showMonthlyTasks} from '../src/displayData';
import { taskTitle, taskDesc, taskDate, taskPrio, flag } from '../src/data'
import { editTask } from '../src/edit';

const addTaskButton = document.getElementsByClassName('imgbutton');
const submitButton = document.querySelector('input[type=submit]')
Array.from(addTaskButton).forEach(button => {
    button.addEventListener('click', initModal());
})
submitButton.addEventListener('click', collectData);
submitButton.addEventListener('click', function() {
    document.getElementById("myform").reset();
})
window.onload = function() {
    insertLocalStorageToWebpage();
}
document.addEventListener('click', function (e) {
    console.log(e);
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
    if (e.target.className === 'taskedit') {
        editTask();
    }
})