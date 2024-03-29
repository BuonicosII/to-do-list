import { allToDos, allProjects, page } from "./checker";
import { createToDo, createProject, editToDo, eraseProject, eraseToDo } from "./events";
import { format } from "date-fns";
import { retrieveProjects, retrieveToDos, saveToLocalStorage } from "./localStorage";

//function to create a form that allows users to create a new ToDo

function createForm () {
    let mainBody = document.getElementById("mainBody");

        mainBody.removeChild(mainBody.firstChild);

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
    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "titleDiv");
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(title);

    let status = document.createElement("input");
    status.setAttribute("type", "checkbox");
    status.setAttribute("id", "status");
    status.setAttribute("name", "status");
    status.setAttribute("class", "checkbox");

    //description input field
    let description = document.createElement("input");
    description.setAttribute("type", "text");
    description.setAttribute("id", "description");
    description.setAttribute("name", "description");
    let descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description";
    let descriptionDiv = document.createElement("div");
    descriptionDiv.setAttribute("class", "descriptionDiv");
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(description);

    //dueDate input field
    let dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("id", "dueDate");
    dueDate.setAttribute("name", "dueDate");
    dueDate.required = true;
    let dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due Date";
    let dueDateDiv = document.createElement("div");
    dueDateDiv.setAttribute("class", "dueDateDiv");
    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDate);

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
    let priorityDiv = document.createElement("div");
    priorityDiv.setAttribute("class", "priorityDiv");
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priority);

        
    //project input field
    //checks whether the user is on a project page and then 

    if (page === "allTasks") {
        let projectSelection = document.createElement("select");
        projectSelection.setAttribute("id", "projectSelection");
        let projectSelectionLabel = document.createElement("label");
        projectSelectionLabel.setAttribute("for", "projectSelection");
        projectSelectionLabel.textContent =  "Project";

        let noneOption = document.createElement("option");
        noneOption.textContent = " - ";
        projectSelection.appendChild(noneOption);
    
        for (const item of allProjects) {
            let option = document.createElement("option");
            option.setAttribute("value", `${item}`);
            option.textContent = `${item}`;
            projectSelection.appendChild(option);
            }
        
        let projectSelectionDiv = document.createElement("div");
        projectSelectionDiv.appendChild(projectSelectionLabel);
        projectSelectionDiv.appendChild(projectSelection);
        projectSelectionDiv.setAttribute("class", "projectSelectionDiv");
        form.appendChild(projectSelectionDiv);

    }

    //submitbutton
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("form", "toDoForm");
    submitButton.textContent = "Add";
    submitButton.addEventListener("click", (event) => {

        let projectArg

        if (page === "allTasks") {
            projectArg = projectSelection.value
        } else {
            projectArg = page
        }

        createToDo(event, title.value, description.value, dueDate.value, priority.value, projectArg, status.checked)

        if (page === "allTasks") {
            allTasks(); 
        } else if (page === "today") {
            dueDateIsToday();
        } else if (page === "this week") {
            dueDateIsThisWeek()
        } else if (page === "done tasks") {
            displayDoneTasks();
        } else {
            displayTodosInProject();
        }
        
    });

    //cancelbutton
    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        if (page === "allTasks") {
            allTasks(); 
        } else if (page === "today") {
            dueDateIsToday();
        } else if (page === "this week") {
            dueDateIsThisWeek()
        } else if (page === "done tasks") {
            displayDoneTasks();
        } else {
            displayTodosInProject();
        }
        
    });

    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "buttonDiv");
    buttonsDiv.appendChild(submitButton);
    buttonsDiv.appendChild(cancelButton);

    mainBody.prepend(form);
    form.appendChild(titleDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(dueDateDiv);
    form.appendChild(priorityDiv);
    form.appendChild(status);
    form.appendChild(buttonsDiv);
}

//function to create a form that allows users to create a new project

function createProjectForm () {
    let projectList = document.getElementById("projectList");

    while (projectList.hasChildNodes()) {
        projectList.removeChild(projectList.firstChild);
    };

    let form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "projectForm");

    //project name input field
    let projectName = document.createElement("input");
    projectName.setAttribute("id", "projectTitle");
    let projectNameLabel = document.createElement("label");
    projectNameLabel.setAttribute("for", "projectTitle");
    
    //submitbutton
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("form", "projectForm");
    submitButton.textContent = "Add";
    submitButton.classList.add("confirmBtn");
    submitButton.addEventListener("click", (event) => {
        createProject(event, projectName.value);
        displayAllProjects();
    });
    
    //cancelButton
    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancelBtn");
    cancelButton.addEventListener("click", displayAllProjects);

    form.appendChild(projectNameLabel);
    form.appendChild(projectName);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);
    projectList.appendChild(form);
}

//function to populate the mainbody with cards for each toDo

function createCard(todo) {
        let mainBody = document.getElementById("mainBody");
        let toDoCard = document.createElement("div");
        toDoCard.setAttribute("class", "card");
        toDoCard.setAttribute("id", `${todo.title}`);

        let title = document.createElement("p");
        title.textContent = todo.title;
        let titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";
        let titleDiv = document.createElement("div");
        titleDiv.setAttribute("class", "titleDiv");
        titleDiv.appendChild(titleLabel);
        titleDiv.appendChild(title);
        toDoCard.appendChild(titleDiv);

        let status = document.createElement("input");
        status.setAttribute("type", "checkbox");
        status.setAttribute("id", "status");
        status.setAttribute("name", "status");
        status.setAttribute("class", "checkbox");
        toDoCard.appendChild(status);
        if (todo.doneStatus === true) {
            status.checked = true;
            toDoCard.classList.add("cardDone")
        };
        status.addEventListener("click", clickToggle);

        let description = document.createElement("p");
        description.textContent = todo.description;
        let descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description";
        let descriptionDiv = document.createElement("div");
        descriptionDiv.setAttribute("class", "descriptionDiv");
        descriptionDiv.appendChild(descriptionLabel);
        descriptionDiv.appendChild(description);
        toDoCard.appendChild(descriptionDiv);

        let dueDate = document.createElement("p");
        dueDate.textContent = `${format(todo.dueDate, "EEEE d MMMM yyyy")}`;
        let dueDateLabel = document.createElement("label");
        dueDateLabel.textContent = "Due Date";
        let dueDateDiv = document.createElement("div");
        dueDateDiv.setAttribute("class", "dueDateDiv");
        dueDateDiv.appendChild(dueDateLabel);
        dueDateDiv.appendChild(dueDate);
        toDoCard.appendChild(dueDateDiv);

        let priority = document.createElement("p");
        let priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority";
        let priorityDiv = document.createElement("div");
        priorityDiv.setAttribute("class", "priorityDiv");
        priorityDiv.appendChild(priorityLabel);
        priorityDiv.appendChild(priority);
        toDoCard.appendChild(priorityDiv);
        if (todo.priority === 1) {
            priority.textContent = "High";
            toDoCard.classList.add("high");
        } else if (todo.priority === 2) {
            priority.textContent = "Medium";
            toDoCard.classList.add("medium");
        } else {
            priority.textContent = "Low";
            toDoCard.classList.add("low");
        };

        let project = document.createElement("p");
        project.textContent = todo.project;
        let projectSelectionLabel = document.createElement("label");
        projectSelectionLabel.textContent =  "Project";
        let projectDiv = document.createElement("div");
        projectDiv.setAttribute("class", "projectSelectionDiv");
        projectDiv.appendChild(projectSelectionLabel);
        projectDiv.appendChild(project);
        toDoCard.appendChild(projectDiv);


        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("editBtn");
        editBtn.addEventListener("click", editCard);
        let eraseToDoBtn = document.createElement("button");
        eraseToDoBtn.textContent = "Erase";
        eraseToDoBtn.classList.add("eraseBtn");
        eraseToDoBtn.addEventListener("click", (event)=> {
            eraseToDo(event.target.parentNode.parentNode.id)
            
            if (page === "allTasks") {
                allTasks(); 
            } else if (page === "today") {
                dueDateIsToday();
            } else if (page === "this week") {
                dueDateIsThisWeek()
            } else if (page === "done tasks") {
                displayDoneTasks();
            } else {
                displayTodosInProject();
            }
            
        });

        let buttonsDiv = document.createElement("div");
        buttonsDiv.setAttribute("class", "buttonDiv");
        buttonsDiv.appendChild(eraseToDoBtn);
        buttonsDiv.appendChild(editBtn);
        toDoCard.appendChild(buttonsDiv);

        mainBody.appendChild(toDoCard);
}

//function to display all tasks and a button to add a new one

function allTasks () {
    page = "allTasks";

    while (mainBody.hasChildNodes()) {
        mainBody.removeChild(mainBody.firstChild);
    };
    
    let addTaskBtn = document.createElement("div");
    addTaskBtn.setAttribute("class", "newTaskBtn");
    let addTaskBtnContent1 = document.createElement("p");
    addTaskBtnContent1.textContent = "+";
    addTaskBtn.appendChild(addTaskBtnContent1);
    addTaskBtn.addEventListener("click", createForm);
    mainBody.appendChild(addTaskBtn);

    retrieveToDos();

    allToDos.sort(function(a, b) {
        let dueDateA = new Date(a.dueDate);
        let dueDAteB = new Date(b.dueDate);

        if (dueDateA < dueDAteB) return -1;
        if (dueDateA > dueDAteB) return 1;
        return 0;
    });
    
    for (const todo of allToDos) {
        createCard(todo);
    }
}

//function to display all projects

function displayAllProjects() {

    let projectList = document.getElementById("projectList");

    while (projectList.hasChildNodes()) {
        projectList.removeChild(projectList.firstChild);
    };

    let addProjectBtn = document.createElement("button");
    addProjectBtn.textContent = "Add Project";
    addProjectBtn.addEventListener("click", createProjectForm);
    addProjectBtn.classList.add("editBtn")
    projectList.appendChild(addProjectBtn);

    retrieveProjects();

    for (const project of allProjects) {

            let projectDiv = document.createElement ("div");
            projectDiv.setAttribute("id", `${project}`);
            projectDiv.setAttribute("class", "projectDiv");

            let projectListing = document.createElement("p");
            projectListing.textContent = `${project}`;
            projectListing.setAttribute("class", "interactable");
            projectListing.addEventListener("click", displayTodosInProjectShoulder);

            let cancelProjectBtn = document.createElement("p");
            cancelProjectBtn.textContent = "✕";
            cancelProjectBtn.classList.add("cancelX");
            cancelProjectBtn.addEventListener("click", (event) => {
                
                eraseProject(event.target.parentNode.id);

                displayAllProjects();
            });

            projectList.appendChild(projectDiv);
            projectDiv.appendChild(projectListing);
            projectDiv.appendChild(cancelProjectBtn);
        
    }

}

function displayTodosInProjectShoulder(event) {
    page = event.target.textContent;
    displayTodosInProject();
}

//function to display all toDos present in a project

function displayTodosInProject() {

    while (mainBody.hasChildNodes()) {
        mainBody.removeChild(mainBody.firstChild);
    };

    let addTaskBtn = document.createElement("div");
    addTaskBtn.setAttribute("class", "newTaskBtn");
    let addTaskBtnContent1 = document.createElement("p");
    addTaskBtnContent1.textContent = "+";
    addTaskBtn.appendChild(addTaskBtnContent1);
    addTaskBtn.addEventListener("click", createForm);
    mainBody.appendChild(addTaskBtn);

    retrieveToDos();

    allToDos.sort(function(a, b) {
        let dueDateA = new Date(a.dueDate);
        let dueDAteB = new Date(b.dueDate);

        if (dueDateA < dueDAteB) return -1;
        if (dueDateA > dueDAteB) return 1;
        return 0;
    });

    for (const todo of allToDos) {
        if (todo.project === page) {
            createCard(todo);
        }
    }
}

//function to display all toDos whose due date is today

function dueDateIsToday() {
    page = "today";

    while (mainBody.hasChildNodes()) {
        mainBody.removeChild(mainBody.firstChild);
    };

    retrieveToDos();

    for (const todo of allToDos) {
        if (format(todo.dueDate, "d MMMM yyyy") === format(new Date(), "d MMMM yyyy")) {
            createCard(todo);
        }
    }
}

//function to display all toDos whose due date is in the current week

function dueDateIsThisWeek() {
    page = "this week";

    while (mainBody.hasChildNodes()) {
        mainBody.removeChild(mainBody.firstChild);
    };

    retrieveToDos();

    for (const todo of allToDos) {
        if (format(todo.dueDate, "w yyyy") === format(new Date(), "w yyyy")) {
            createCard(todo);
        }
    }
}

function displayDoneTasks() {
    page = "done tasks";

    while (mainBody.hasChildNodes()) {
        mainBody.removeChild(mainBody.firstChild);
    };

    retrieveToDos();

    for (const todo of allToDos) {
        if (todo.doneStatus === true) {
            createCard(todo);
        }
    }
}

//function to toggle done status

function clickToggle (event) {
    let toDoId = event.target.parentNode.id;

    let thisToDo = allToDos.find(({ title }) => title === toDoId);
    
    if (event.target.checked) {
        thisToDo.setDoneStatus = true;
        event.target.parentNode.classList.add("cardDone");
    } else {
        thisToDo.setDoneStatus = false;
        event.target.parentNode.classList.remove("cardDone");
    }

    saveToLocalStorage();
}

//function to edit the toDo in the cards

function editCard (event) {
    let mainBody = document.getElementById("mainBody");
    let cardToEmpty = event.target.parentNode.parentNode;
    let toDoId = event.target.parentNode.parentNode.id;

    //remove create Event Listener to prevent user from editing a todo and create a new one at the same time
    mainBody.firstChild.removeEventListener("click", createForm);

    retrieveToDos();

    //retrieve toDoInfos from the allToDoS array
    let thisToDo = allToDos.find(({ title }) => title === toDoId);

    //create a form with precompiled inputs based on the doTo infos and a custom event listener
    
    let form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "editToDoForm");

    //title input field
    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("id", "title");
    title.setAttribute("name", "title");
    title.setAttribute("value", `${thisToDo.title}`);
    title.required = true;
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";
    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "titleDiv");
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(title);

    let status = document.createElement("input");
    status.setAttribute("type", "checkbox");
    status.setAttribute("id", "status");
    status.setAttribute("name", "status");
    status.setAttribute("class", "checkbox");
    if (thisToDo.doneStatus === true) {
        status.checked = true; 
    };


    //description input field
    let description = document.createElement("input");
    description.setAttribute("type", "text");
    description.setAttribute("id", "description");
    description.setAttribute("name", "description");
    description.setAttribute("value", `${thisToDo.description}`);
    let descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description";
    let descriptionDiv = document.createElement("div");
    descriptionDiv.setAttribute("class", "descriptionDiv");
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(description);

    //dueDate input field
    let dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("id", "dueDate");
    dueDate.setAttribute("name", "dueDate");
    dueDate.setAttribute("value", `${format(thisToDo.dueDate, "yyyy-MM-dd")}`);
    dueDate.required = true;
    let dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due Date";
    let dueDateDiv = document.createElement("div");
    dueDateDiv.setAttribute("class", "dueDateDiv");
    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDate);

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

    //autoselect the current toDo priority

    if (thisToDo.priority === 1) {
        priorityOne.setAttribute("selected", "selected");
    } else if (thisToDo.priority === 2) {
        priorityTwo.setAttribute("selected", "selected");
    } else {
        priorityThree.setAttribute("selected", "selected");
    }

    let priorityDiv = document.createElement("div");
    priorityDiv.setAttribute("class", "priorityDiv");
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priority);

    //project input field


    let projectSelection = document.createElement("select");
    projectSelection.setAttribute("id", "projectSelection");
    let projectSelectionLabel = document.createElement("label");
    projectSelectionLabel.setAttribute("for", "projectSelection");
    projectSelectionLabel.textContent =  "Project";

    let noneOption = document.createElement("option");
    noneOption.textContent = " - ";
    projectSelection.appendChild(noneOption);
    
    for (const item of allProjects) {
        let option = document.createElement("option");
        option.setAttribute("value", `${item}`);
        option.textContent = `${item}`;
        projectSelection.appendChild(option);
        if (item === thisToDo.project) {
            option.setAttribute("selected", "selected");
        }
        }
        
    let projectSelectionDiv = document.createElement("div");
    projectSelectionDiv.appendChild(projectSelectionLabel);
    projectSelectionDiv.appendChild(projectSelection);
    projectSelectionDiv.setAttribute("class", "projectSelectionDiv");

    //submitbutton
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submitButton");
    submitButton.setAttribute("form", "editToDoForm");
    submitButton.classList.add("confirmBtn");
    submitButton.textContent = "Save Changes";
    submitButton.addEventListener("click", (event) => {

        editToDo(event, thisToDo, title, description, dueDate, priority, projectSelection, status);
        
        if (page === "allTasks") {
            allTasks(); 
        } else if (page === "today") {
            dueDateIsToday();
        } else if (page === "this week") {
            dueDateIsThisWeek()
        } else if (page === "done tasks") {
            displayDoneTasks();
        } else {
            displayTodosInProject();
        }
        
    });

    //cancelbutton
    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancelBtn");
    cancelButton.addEventListener("click", () => {
 
        if (page === "allTasks") {
            allTasks(); 
        } else if (page === "today") {
            dueDateIsToday();
        } else if (page === "this week") {
            dueDateIsThisWeek()
        } else if (page === "done tasks") {
            displayDoneTasks();
        } else {
            displayTodosInProject();
        }
        
    });

    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "buttonDiv");
    buttonsDiv.appendChild(submitButton);
    buttonsDiv.appendChild(cancelButton);

    form.appendChild(titleDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(dueDateDiv);
    form.appendChild(priorityDiv);
    form.appendChild(projectSelectionDiv);
    form.appendChild(buttonsDiv);
    form.appendChild(status);

    //prepend the form to the event.target.parentNode

    mainBody.insertBefore(form, cardToEmpty);
    //remove the event.target.parentNode
    cardToEmpty.remove();
    
}


export { createForm, createProjectForm, allTasks, displayAllProjects, dueDateIsToday, dueDateIsThisWeek, displayDoneTasks }