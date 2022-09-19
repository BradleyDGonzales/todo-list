import './styles.css'
import initModal from '../src/modal'
import { collectData} from '../src/data'

const addTaskButton = document.getElementsByClassName('imgbutton');
const submitButton = document.querySelector('input[type=submit]')
Array.from(addTaskButton).forEach(button => {
    button.addEventListener('click', initModal());
})
submitButton.addEventListener('click', collectData);