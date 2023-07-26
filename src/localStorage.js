import { allProjects, allToDos } from "./checker";

//function to save all changes to the toDos and prjects to the localStorage

function saveToLocalStorage () {
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
    localStorage.setItem("allToDos", JSON.stringify(allToDos));
}

//some commment

export { saveToLocalStorage }