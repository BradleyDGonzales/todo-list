import { ToDoList } from '../src/ToDoList'

export let taskTitle;
export let taskDesc;
export let taskDate;
export let taskPrio;
const form = document.querySelectorAll('.form');
export function collectData(e) {
    e.preventDefault();
    let formData = new FormData(form[0]);
    console.log(formData);
    alert(formData.get('title') + formData.get('description') + formData.get('duedate') + formData.get('priority'))
    taskTitle = formData.get('title');
    taskDesc = formData.get('description');
    taskDate = formData.get('duedate');
    taskPrio = formData.get('priority');
    insertData();
}
export function insertData() {
    let newTask = new ToDoList();
    newTask.setTitle(taskTitle);
    newTask.setDescription(taskDesc);
    newTask.setDueDate(taskDate);
    newTask.setItemPriority(taskPrio);
    console.log(newTask);
}