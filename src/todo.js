//class to create the toDoObjects with their properties
class ToDo {
    constructor (title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.project = project;
    }

    set setTitle(value) {
        this.title = value;
    }

    set setDescription(value) {
        this.description = value;
    }

    set setDueDate(value) {
        this.dueDate = new Date(value);
    }

    set setPriority(value) {
        this.priority = Number(value);
    }

    set setProject(value) {
        this.project = value;
    }
}

export { ToDo }