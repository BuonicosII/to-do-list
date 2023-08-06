import { allProjects, allToDos } from "./checker";
import { ToDo } from "./todo";
import { parseISO } from "date-fns";

//function to save all changes to the toDos and prjects to the localStorage

function saveToLocalStorage () {
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
    localStorage.setItem("allToDos", JSON.stringify(allToDos));
}

function retrieveProjects () {
    allProjects = JSON.parse(localStorage.getItem("allProjects"));
}

function retrieveToDos () {

    allToDos = JSON.parse(localStorage.getItem("allToDos"));

    for (const instance of allToDos) {
        const ToDoObject = new ToDo (instance.title, instance.description, `${parseISO(instance.dueDate)}`, instance.priority, instance.project);

        if (instance.doneStatus === true) {
            ToDoObject.setDoneStatus = true
        } else if (instance.doneStatus === false) {
            ToDoObject.setDoneStatus = false
        }

        allToDos.splice(allToDos.findIndex(({ title }) => title === instance.title), 1, ToDoObject);
    }
}

export { saveToLocalStorage, retrieveProjects, retrieveToDos}