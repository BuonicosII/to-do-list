//an array where to store all the todos
const allToDos = []

//an array where to store all the projects
const allProjects = []

//a variable to track which project is currently selected
let currentProject

let getCurrentProject = function(){
    return currentProject
};

let setCurrentProject = function(value){
    currentProject = value;
    return currentProject;
}

export { allToDos, allProjects, getCurrentProject, setCurrentProject}