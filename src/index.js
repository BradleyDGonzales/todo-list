import './styles.css'
import initModal from '../src/modal'
import { collectData, showTodaysTasks, insertLocalStorageToWebpage} from '../src/data'

const addTaskButton = document.getElementsByClassName('imgbutton');
const submitButton = document.querySelector('input[type=submit]')
Array.from(addTaskButton).forEach(button => {
    button.addEventListener('click', initModal());
})
submitButton.addEventListener('click', collectData);
window.onload = function() {
    insertLocalStorageToWebpage();
}
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.textContent === 'Today') {
        console.log(`clicked on today`);
        showTodaysTasks();
    }
    if (e.target.tagName === 'A' && e.target.textContent === 'General') {
        insertLocalStorageToWebpage();
    }
})