import './styles.css'
import initModal from '../src/modal'
import { checkProjectData, collectData, collectProjectData } from '../src/data';
import { showTodaysTasks, insertLocalStorageToWebpage, showWeeklyTasks, showAllTasks, showMonthlyTasks, showProjectsTasks} from '../src/displayData';
import { checkProjectTask, checkTask, deleteProjectTask, deleteTask, editProjectTask, editTask, obtainID } from '../src/edit';
import { addProject, addProjectTile, deleteProjectTile, displayProject, myFunction } from './projects';

const addTaskButton = document.getElementsByClassName('imgbutton');
const submitButton = document.getElementsByClassName('inputtask')[0];
let editTaskCalled;
submitButton.addEventListener('click', function(e) { //clicking on "Add task"
    if (submitButton.id === "taskbutton" && submitButton.value === "Add task") {
        e.preventDefault();
        collectData();
    }
    if (submitButton.id === "projecttaskbutton" && submitButton.value === "Add task") {
        e.preventDefault();
        collectProjectData();
    }
    return
})
window.onload = function() {
    insertLocalStorageToWebpage();
}
Array.from(addTaskButton).forEach(button => {
     button.addEventListener('click', initModal());
})
document.addEventListener('click', function (e) {
    if (e.target.id === 'addtask' || e.target.tagName === "IMG") {
        let taskButtonID = document.querySelector('input[type=submit]').id;
        let submitText;
        if (taskButtonID === "taskbutton") {
            submitText = document.getElementById(`${taskButtonID}`)
        }
        else {
            submitText = document.getElementById(`${taskButtonID}`)
        }
        if (submitText.value === "Add task") {
            if (editTaskCalled) {
                submitText.value = "Save changes"
                editTaskCalled = false;
            }
        }
        else {
            submitText.value = "Add task"
        }

    }
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
    if (e.target.tagName === 'A' && e.target.className === "project-title") {
        showProjectsTasks(e.target.id);
    }
    if (e.target.tagName === 'IMG' && e.target.className === 'taskedit') {
        obtainID(e.target.id);
        editTask();

    }
    if (e.target.tagName === 'IMG' && e.target.className === 'projectTaskEdit') {
        obtainID(e.target.id);
        editProjectTask(e.target.id);
        editTaskCalled = true;
    }
    if (e.target.tagName === 'IMG' && e.target.className === 'taskcheck') {
        obtainID(e.target.id);
        checkTask();   
    }
    if (e.target.tagName === 'IMG' && e.target.className === 'projectTaskCheck') {
        obtainID(e.target.id);
        checkProjectTask(e.target.id);   
    }
    if (e.target.tagName === 'IMG' && e.target.className === 'taskdelete') {
        obtainID(e.target.id);
        deleteTask();
    }
    if (e.target.tagName === 'IMG' && e.target.className === 'projectTaskDelete') {
        obtainID(e.target.id)
        deleteProjectTask(e.target.id);
    }
    if (e.target.tagName === 'A' && e.target.textContent === 'Add a project') {
        addProjectTile();
    }
    if (e.target.tagName === 'BUTTON' && e.target.className === 'project-delete') {
        deleteProjectTile(e.target.id);
    }
    if (e.target.className === 'project-title') {
        myFunction(e.target.id)
    }
})