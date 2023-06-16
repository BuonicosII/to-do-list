import { ToDo } from "./todo";

//an array where to store all the todos
const allToDos = []

//an array where to store all the projects
const allProjects = []

//a variable to track which project is currently selected
let currentProject = undefined;

//two examples of toDos to troubleshoot

const ghost = new ToDo ("Ghost Walking", "A Lamb of God song", 2011-12-6, 1, "Resolution");

const under = new ToDo ("The Undertow", "Another Lamb of God song", 2012-1-24, 2, "Resolution");

const resolution = new Array 
Object.defineProperty(resolution, 'id', {value: "Resolution"});

allToDos.push(ghost, under);
resolution.push(ghost, under);

allProjects.push(resolution);

//let getCurrentProject = () => {
//    return currentProject
//};

//let setCurrentProject = function(value){
//    currentProject = value;
//    return currentProject;
//}

export { allToDos, allProjects, currentProject }