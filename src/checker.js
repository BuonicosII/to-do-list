import { ToDo } from "./todo";

//an array where to store all the todos
const allToDos = []

//an array where to store all the projects
const allProjects = []

//a variable to track which project is currently selected
let currentProject = undefined;

//two examples of toDos to troubleshoot

const ghost = new ToDo ("Ghost Walking", "A Lamb of God song", "2011-12-06", 1, "Resolution");

const under = new ToDo ("The Undertow", "Another Lamb of God song", "2012-01-24", 2, "Resolution");

const deuts = new ToDo ("Deutschland", "A Rammstein song", "2019-01-03", 3, "Rammstein");

const resolution = new Array 
Object.defineProperty(resolution, 'id', {value: "Resolution"});

const rammstein = new Array
Object.defineProperty(rammstein, 'id', {value: "Rammstein"});

allToDos.push(ghost, under, deuts);
resolution.push(ghost, under);
rammstein.push(deuts);

allProjects.push(resolution, rammstein);

//let getCurrentProject = () => {
//    return currentProject
//};

//let setCurrentProject = function(value){
//    currentProject = value;
//    return currentProject;
//}

export { allToDos, allProjects, currentProject }