import { ToDo } from "./todo";
import { allToDos, allProjects, page } from "./checker";
import { saveToLocalStorage, retrieveProjects, retrieveToDos } from "./localStorage";

//function to create a todo from a form submit and push it to the alltodos array and a specific project array
function createToDo(event, title, description, dueDate, priority, project, status) {
    event.preventDefault();

    if (page !== "allTasks") {
        project = page;
    }
        
    const newTask = new ToDo (title, description, dueDate, priority, project, status);

    allToDos.push(newTask);

    saveToLocalStorage();

}

//function to create a project from a form submit and push it to the allProjects array
function createProject(event, title){
    event.preventDefault();
    title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

    const newProject = title;

    allProjects.push(newProject);
    saveToLocalStorage();

}

function editToDo(event, thisToDo, title, description, dueDate, priority, projectSelection, status) {
    event.preventDefault();

    thisToDo.setTitle = title.value;
    thisToDo.setDescription = description.value;
    thisToDo.setDueDate = dueDate.value;
    thisToDo.setPriority = priority.value;
    thisToDo.setProject = projectSelection.value;
    thisToDo.setDoneStatus = status.checked

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