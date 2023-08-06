import './style.css';
import { createForm, createProjectForm, allTasks, displayAllProjects, dueDateIsToday, dueDateIsThisWeek, displayDoneTasks } from './dom';

let allTasksButton = document.getElementById("loadtask");
let todayTaskButton = document.getElementById("todayTasks");
let weeklyTaskButton = document.getElementById("weeklyTasks");
let doneTasksButton = document.getElementById("doneTasks");

allTasksButton.addEventListener("click", allTasks);
todayTaskButton.addEventListener("click", dueDateIsToday);
weeklyTaskButton.addEventListener("click", dueDateIsThisWeek);
doneTasksButton.addEventListener("click", displayDoneTasks);

displayAllProjects()
allTasks()