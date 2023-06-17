import './style.css';
import { createForm, createProjectForm, allTasks, displayAllProjects } from './dom';

let allTasksButton = document.getElementById("loadtask")

allTasksButton.addEventListener("click", allTasks);
displayAllProjects()
