import { ToDo } from "./todo";
import { addDays } from "date-fns";
import { saveToLocalStorage } from "./localStorage";

//an array where to store all the todos
let allToDos = []

//an array where to store all the projects
let allProjects = []

//a variable to track which project is currently selected
let page = undefined;

//two examples of toDos to troubleshoot

const lunch = new ToDo ("Have lunch", "Have a healthy lunch!", new Date(), 1, "Self Care", true);

const shower = new ToDo ("Take a shower", "Time to take a nice shower", addDays(new Date(), 1), 2, "Self Care", false);

const plants = new ToDo ("Water the cactus", "Desert plants need water too, sometimes!", addDays(new Date(), 3), 3, "House Stuff", true);

const presents = new ToDo ("Buy presents", "Don't forget that birthday!", addDays(new Date(), 7), 1, "-", false);

const selfCare = "Self Care";

const houseStuff = "House Stuff";

allToDos.push(presents, lunch, shower, plants);
allProjects.push(selfCare, houseStuff);

saveToLocalStorage()

export { allToDos, allProjects, page }