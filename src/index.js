import './style.css';
import { createForm, createProjectForm, allTasks, displayAllProjects, dueDateIsToday, dueDateIsThisWeek } from './dom';

let allTasksButton = document.getElementById("loadtask");
let todayTaskButton = document.getElementById("todayTasks");
let weeklyTaskButton = document.getElementById("weeklyTasks");

allTasksButton.addEventListener("click", allTasks);
todayTaskButton.addEventListener("click", dueDateIsToday);
weeklyTaskButton.addEventListener("click", dueDateIsThisWeek);

displayAllProjects()
