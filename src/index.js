import './styles.css'
import addTask from '../src/addTasks'

const array = [];
const addTaskButton = document.getElementsByClassName('imgbutton');
Array.from(addTaskButton).forEach(button => {
    button.addEventListener('click', addTask());
})
