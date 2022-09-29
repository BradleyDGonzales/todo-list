let projectsCount = 1;
export function addProjectTile() {
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
    myAcceptBtn.addEventListener('click',function() {
        if (!projectsTitle.checkValidity()) {
            projectsTitle.reportValidity();
            return;
        }
        const projectsListDiv = document.getElementById(`project${projectsCount}`);
        projectsListDiv.classList.add('ready');
        const projectTitleInput = document.getElementById(`project-title${projectsCount}`)
        const spanElement = document.createElement('span');
        spanElement.setAttribute('id', projectsTitle.getAttribute('id'));
        spanElement.classList.add('project-title')
        spanElement.textContent = projectTitleInput.value;
        const deleteProject = document.createElement('button');
        deleteProject.classList.add('project-delete')
        deleteProject.setAttribute('id',`deleteproject${projectsCount}`)
        deleteProject.textContent = '✗';
        while (projectTitleInput.firstChild) {
            spanElement.appendChild(projectTitleInput.firstChild);
        }
        projectTitleInput.parentNode.replaceChild(spanElement, projectTitleInput);
        spanElement.appendChild(deleteProject);
        myAcceptBtn.remove();
        myDeclineBtn.remove();
        projectsCount++;
        addProjectButton.style.display = "flex"
        
    })
    myDeclineBtn.addEventListener('click',function() {
        projectsTitle.remove();
        projectsButtonAccept.remove();
        projectsButtonDecline.remove();
        addProjectButton.style.display = "flex";
        
    })
}