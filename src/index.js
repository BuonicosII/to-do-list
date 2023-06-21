import './style.css';
import { createForm, createProjectForm, allTasks, displayAllProjects, dueDateIsToday } from './dom';

let allTasksButton = document.getElementById("loadtask");
let todayTaskButton = document.getElementById("todayTasks");

allTasksButton.addEventListener("click", allTasks);
todayTaskButton.addEventListener("click", dueDateIsToday);

displayAllProjects()
