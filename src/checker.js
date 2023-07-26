import { ToDo, Project } from "./todo";
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

const presents = new ToDo ("Buy presents", "Don't forget that birthday!", addDays(new Date(), 7), 1, "-" );

const noProject = new Project ("-");

const selfCare = new Project ("Self care");

const houseStuff = new Project ("House Stuff");

noProject.tasks.push(presents);
selfCare.tasks.push(lunch, shower);
houseStuff.tasks.push(plants);

allProjects.push(noProject, selfCare, houseStuff);

export { allToDos, allProjects, currentProject }