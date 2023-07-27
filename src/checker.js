import { ToDo } from "./todo";
import { addDays } from "date-fns";

//an array where to store all the todos
const allToDos = []

//an array where to store all the projects
const allProjects = []

//a variable to track which project is currently selected
let currentProject = undefined;

//two examples of toDos to troubleshoot

const lunch = new ToDo ("Have lunch", "Have a healthy lunch!", new Date(), 1, "Self Care");

const shower = new ToDo ("Take a shower", "Time to take a nice shower", addDays(new Date(), 1), 2, "Self Care");

const plants = new ToDo ("Water the cactus", "Desert plants need water too, sometimes!", addDays(new Date(), 3), 3, "House Stuff");

const presents = new ToDo ("Buy presents", "Don't forget that birthday!", addDays(new Date(), 7), 1, "" );


const selfCare = "Self Care";

const houseStuff = "House Stuff";

allToDos.push(presents, lunch, shower, plants);

allProjects.push(selfCare, houseStuff);

export { allToDos, allProjects, currentProject }