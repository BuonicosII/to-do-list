import { allProjects, currentProject } from "./checker";
import { createToDo, createProject } from "./events";

//function to create a form that allows users to create a new ToDo

function createForm () {
    let mainBody = document.getElementById("mainBody");
    let form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "toDoForm");

    //title input field
    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("id", "title");
    title.setAttribute("name", "title");
    title.required = true;
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";

    //description input field
    let description = document.createElement("input");
    description.setAttribute("type", "text");
    description.setAttribute("id", "description");
    description.setAttribute("name", "description");
    let descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description";

    //dueDate input field
    let dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("id", "dueDate");
    dueDate.setAttribute("name", "dueDate");
    dueDate.required = true;
    let dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due Date";

    //priority input field
    let priority = document.createElement("select");
    priority.setAttribute("id", "priority");
    priority.required = true;
    let priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority";
    let priorityOne = document.createElement("option");
    priorityOne.setAttribute("value", "1");
    priorityOne.textContent = "High";
    let priorityTwo = document.createElement("option");
    priorityTwo.setAttribute("value", "2");
    priorityTwo.textContent = "Medium";
    let priorityThree = document.createElement("option");
    priorityThree.setAttribute("value", "3");
    priorityThree.textContent = "Low";
    priority.appendChild(priorityOne);
    priority.appendChild(priorityTwo);
    priority.appendChild(priorityThree);

    //submitbutton
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("form", "toDoForm");
    submitButton.textContent = "Add";
    submitButton.addEventListener("click", createToDo);

    mainBody.appendChild(form);
    form.appendChild(titleLabel);
    form.appendChild(title);
    form.appendChild(descriptionLabel);
    form.appendChild(description);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);
    form.appendChild(priorityLabel);
    form.appendChild(priority);
    
    //project input field
    //checks whether the user is on a project page and then 

    if (currentProject === undefined) {
        let projectSelection = document.createElement("select");
        projectSelection.setAttribute("id", "projectSelection");
        let projectSelectionLabel = document.createElement("label");
        projectSelectionLabel.setAttribute("for", "projectSelection");
        projectSelectionLabel.textContent =  "Project";
    
        for (const item of allProjects) {
            let option = document.createElement("option");
            option.setAttribute("value", `${item.id}`);
            option.textContent = `${item.id}`;
            projectSelection.appendChild(option);
            }
        
        form.appendChild(projectSelectionLabel);
        form.appendChild(projectSelection);
    }
    form.appendChild(submitButton);
    console.log(currentProject)
}

//function to create a form that allows users to create a new project

function createProjectForm () {
    let mainBody = document.getElementById("mainBody");
    let form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "projectForm");

    //project name input field
    let projectName = document.createElement("input");
    projectName.setAttribute("id", "projectTitle");
    let projectNameLabel = document.crateElement("label");
    projectNameLabel.setAttribute("for", "projectTitle");
    
    //submitbutton
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("form", "projectForm");
    submitButton.textContent = "Add";
    submitButton.addEventListener("click", createProject);
    
    form.appendChild(projectNameLabel);
    form.appendChild(projectName);
    form.appendChild(submitButton);
}

export { createForm }