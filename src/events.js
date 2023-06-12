import { ToDo } from "./todo";
import { allToDos, allProjects, currentProject } from "./checker";

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
//getCurrentProject variable which is updated whenever a project is selected or created 

    if (currentProject === undefined){
        project = document.getElementByID("projectSelection").value
    } else {
        project = currentProject;
    }
        
    const newTask = new ToDo (title, description, dueDate, priority, project);

//add the newly created toDo into an array containing all the toDo created
    allToDos.push(newTask);

//(1) this condition allows the toDo object to be pushed only in an existing project array
    if (allProjects.findIndex(object => { return object.id === `${project}`}) !== -1) {
        allProjects.findIndex(object => {
            return object.id === `${project}`
          }).push(newTask);
    };

    console.log(allToDos);
}

//function to create a project from a form submit and push it to the allProjects array
function createProject(event){
    event.preventDefault();
    let title = document.getElementById("projectTitle").value;

    const newProject = new Array ();
    Object.defineProperty(newProject, 'id', {
        value: title
    }); 

    allProjects.push(newProject);
}

export {createToDo, createProject}