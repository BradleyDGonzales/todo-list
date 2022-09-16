import './styles.css'
import addTask from '../src/addTasks'
import initModal from '../src/modal'
import { collectData, taskDesc, taskDate, taskPrio } from '../src/collectData'
import { ToDoList } from './ToDoList'

const array = [];
const addTaskButton = document.getElementsByClassName('imgbutton');
const form = document.querySelectorAll('.form');
const submitButton = document.querySelector('input[type=submit]')
Array.from(addTaskButton).forEach(button => {
    button.addEventListener('click', initModal());
})
submitButton.addEventListener('click', collectData);