import { collectData } from "./data";
import { taskTitle, taskDesc, taskDate, taskPrio, flag } from '../src/data'
import { ToDoList } from './ToDoList'
import initModal from "./modal";
let projectsCount = 1;
export let currentProject;
export function addProjectTile() {
    if (parseInt(localStorage.getItem(`projectscount`)) >= 1) {
        projectsCount = parseInt(localStorage.getItem(`projectscount`)) + 1;
    }
    const projectForm = document.getElementById('projectform');


    const projectsList = document.createElement('div');
    projectsList.classList.add('projects-list');
    projectsList.setAttribute('id', `project${projectsCount}`)

    const projectsTitle = document.createElement('input');
    projectsTitle.setAttribute('type', 'text');
    projectsTitle.setAttribute('id', `project-title${projectsCount}`)
    projectsTitle.setAttribute('maxlength', '20');
    projectsTitle.setAttribute('required', '');

    const projectsButtonAccept = document.createElement('input');
    projectsButtonAccept.setAttribute('type', 'submit')
    projectsButtonAccept.setAttribute('id', `myAcceptBtn${projectsCount}`);
    projectsButtonAccept.setAttribute('value', '✓')
    projectsButtonAccept.setAttribute('required', '')

    const projectsButtonDecline = document.createElement('button');
    projectsButtonDecline.setAttribute('id', `myDeclineBtn${projectsCount}`);
    projectsButtonDecline.textContent = '✗'


    projectForm.appendChild(projectsList);
    projectsList.appendChild(projectsTitle)
    projectsList.appendChild(projectsButtonAccept);
    projectsList.appendChild(projectsButtonDecline);

    const addProjectButton = document.getElementById('add-project');
    addProjectButton.style.display = "none";

    const myAcceptBtn = document.getElementById(`myAcceptBtn${projectsCount}`)
    const myDeclineBtn = document.getElementById(`myDeclineBtn${projectsCount}`)
    myAcceptBtn.addEventListener('click', function () {
        if (!projectsTitle.checkValidity()) {
            projectsTitle.reportValidity();
            return;
        }
        const projectTitleInput = document.getElementById(`project-title${projectsCount}`)
        const anchorElement = document.createElement('a');
        anchorElement.setAttribute('id', projectsTitle.getAttribute('id'));
        anchorElement.setAttribute('href', '#')
        anchorElement.classList.add('project-title')
        anchorElement.textContent = projectTitleInput.value;
        const deleteProject = document.createElement('button');
        deleteProject.classList.add('project-delete')
        deleteProject.setAttribute('id', `deleteproject${projectsCount}`)
        deleteProject.textContent = '✗';
        while (projectTitleInput.firstChild) {
            anchorElement.appendChild(projectTitleInput.firstChild);
        }
        projectTitleInput.parentNode.replaceChild(anchorElement, projectTitleInput);
        anchorElement.appendChild(deleteProject);
        localStorage.setItem(`project${projectsCount}title`, projectTitleInput.value);
        localStorage.setItem(`projectscount`, projectsCount)
        myAcceptBtn.remove();
        myDeclineBtn.remove();
        addProjectButton.style.display = "flex"
        projectsCount++;

    })
    myDeclineBtn.addEventListener('click', function () {
        projectsTitle.remove();
        projectsButtonAccept.remove();
        projectsButtonDecline.remove();
        addProjectButton.style.display = "flex";

    })
}
export function deleteProjectTile(projectID) {
    projectID = projectID.slice(-1);
    const projectList = document.getElementById(`project${projectID}`)
    projectList.remove();
    localStorage.removeItem(`project${projectID}title`);
    if (localStorage.length === 1 || localStorage.length === 2 || localStorage.length === 3) {
        projectsCount = 1;
        localStorage.clear();
    }
}
export function myFunction(clickedProject) {
    const selectAddTask = document.getElementsByClassName('inputtask')[0];
    selectAddTask.id = 'projecttaskbutton';
    const selectAddTaskText = document.getElementById('addtask');
    let searchTerm = clickedProject.indexOf("-title");
    clickedProject = clickedProject.substring(searchTerm + 6, clickedProject.length);
    if (document.getElementById(`project-title${clickedProject}`).textContent.includes(" ")) {
        currentProject = document.getElementById(`project-title${clickedProject}`).textContent.slice(0, -1).replace(/ /g, "_");
    }
    else if (document.getElementById(`project-title${clickedProject}`).textContent.includes("-")) {
        currentProject = document.getElementById(`project-title${clickedProject}`).textContent.slice(0, -1).replace(/-/g, "_");
    }
    else {
        currentProject = document.getElementById(`project-title${clickedProject}`).textContent.slice(0, -1).replace(/ /g, "_");
    }
    const selectAnchorElement = document.getElementById(`project-title${clickedProject}`).textContent;
    selectAddTaskText.textContent = `Add a task for '${selectAnchorElement.slice(0, -1)}'`
}