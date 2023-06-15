import './style.css';
import { createForm, createProjectForm, allTasks } from './dom';

let allTasksButton = document.getElementById("loadtask")

allTasksButton.addEventListener("click", allTasks);