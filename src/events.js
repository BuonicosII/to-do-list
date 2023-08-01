import { ToDo } from "./todo";
import { allToDos, allProjects, page } from "./checker";
import { saveToLocalStorage, retrieveProjects, retrieveToDos } from "./localStorage";

//function to create a todo from a form submit and push it to the alltodos array and a specific project array
function createToDo(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    let project 

//this condition checks whether the ToDo is being created in the default page or in a project page.

//in the first case (defaultpage) the user is able to choose an existing project in the form and add his todo to that project
//if there's no project the field appears as empty, another condition (1) will make sure that the computer doesn't try and 
//push the todo in a non existing array

//in the second case the computer recognizes the user is in a project page and retrieves the project name from the
//getpage variable which is updated whenever a project is selected or created 


    if (page === "allTasks"){
        project = document.getElementById("projectSelection").value
    } else {
        project = page;
    }
        
    const newTask = new ToDo (title, description, dueDate, priority, project);

//add the newly created toDo into an array containing all the toDo created
    allToDos.push(newTask);

    console.log(Object.getPrototypeOf(newTask))
    saveToLocalStorage();

//(1) this condition allows the toDo object to be pushed only in an existing project array
/*
    if (allProjects.findIndex(object => { return object.id === `${project}`}) !== -1) {
        allProjects.find(object => {
            return object.id === `${project}`
          }).push(newTask);
    };
*/
}

//function to create a project from a form submit and push it to the allProjects array
function createProject(event){
    event.preventDefault();
    let title = document.getElementById("projectTitle").value;
    title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

    const newProject = title;

    allProjects.push(newProject);
    saveToLocalStorage();

}

function editToDo(event, thisToDo) {
    event.preventDefault();

    thisToDo.setTitle = title.value;
    thisToDo.setDescription = description.value;
    thisToDo.setDueDate = dueDate.value;
    thisToDo.setPriority = priority.value;
    thisToDo.setProject = projectSelection.value;

    saveToLocalStorage();
}

function eraseProject (projectToBeErased) {

    retrieveToDos();

    retrieveProjects();

    if (allToDos.findIndex(({ project }) => project === projectToBeErased) !== -1) {
        alert("You can't cancel an unempty project. Make sure the project is empty first!")
    } else {
        let projectIndex = allProjects.findIndex(( id ) => id === projectToBeErased);
        allProjects.splice(`${projectIndex}`, 1);
    }

    saveToLocalStorage();
}

//function to erase the toDo

function eraseToDo (toDoId) {
    
    retrieveToDos();

    let toDotoRemove = allToDos.find(({ title }) => title === toDoId);
    /*
    //remove toDo from a certain project
    let removeFromTodoProject = allProjects.find(({ id }) => id === toDotoRemove.project);
    let pageIndex = removeFromTodoProject.findIndex(({ title }) => title === toDotoRemove.title);
    removeFromTodoProject.splice(`${pageIndex}`, 1);
    */
    //remove toDo from allToDos array
    let generalIndex = allToDos.findIndex(({ title }) => title === toDotoRemove.title);
    allToDos.splice(`${generalIndex}`, 1);

    saveToLocalStorage();

}

export {createToDo, createProject, editToDo, eraseProject, eraseToDo}