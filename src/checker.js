import { ToDo } from "./todo";
import { addDays } from "date-fns";

//an array where to store all the todos
const allToDos = []

//an array where to store all the projects
const allProjects = []

//a variable to track which project is currently selected
let currentProject = undefined;

//two examples of toDos to troubleshoot

const lunch = new ToDo ("Have lunch", "Have a healthy lunch!", new Date(), 1, "Self care");

const shower = new ToDo ("Take a shower", "Time to take a nice shower", addDays(new Date(), 1), 2, "Self care");

const plants = new ToDo ("Water the cactus", "Desert plants need water too, sometimes!", addDays(new Date(), 3), 3, "House stuff");

const selfCare = new Array 
Object.defineProperty(selfCare, 'id', {value: "Self care"});

const houseStuff = new Array
Object.defineProperty(houseStuff, 'id', {value: "House stuff"});

allToDos.push(lunch, shower, plants);
selfCare.push(lunch, shower);
houseStuff.push(plants);

allProjects.push(selfCare, houseStuff);

export { allToDos, allProjects, currentProject }