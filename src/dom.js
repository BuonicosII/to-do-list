//function to create a form that allows users to create a new ToDo

function createForm () {
    let mainBody = document.getElementById("mainBody");
    let form = document.createElement("form");
    form.setAttribute("action", "");

    //title input field
    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("id", "title");
    title.setAttribute("name", "title");
    title.setAttribute("required");
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";

    //description input field
    let description = document.createElement("input");
    description.setAttribute("type", "text");
    description.setAttribute("id", "description");
    description.setAttribute("name", "description");
    let descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description";

    //dueDate input field
    let dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("id", "dueDate");
    dueDate.setAttribute("name", "dueDate");
    dueDate.setAttribute("required");
    let dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due Date";

    //priority input field
    let priority = document.createElement("select");
    priority.setAttribute("id", "priority");
    let priorityOne = document.createElement("option");
    priorityOne.setAttribute("value", "1");
    let priorityTwo = document.createElement("option");
    priorityTwo.setAttribute("value", "2");
    let priorityThree = document.createElement("option");
    priorityThree.setAttribute("value", "3");
    priority.appendChild(priorityOne);
    priority.appendChild(priorityTwo);
    priority.appendChild(priorityThree);

}