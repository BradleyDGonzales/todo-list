const todoArray = [];

export class ToDoList {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
    }
    setTitle(title) {
        this.title = title;
    }
    setDescription(description) {
        this.description = description;
    }
    setDueDate(dueDate) {
        this.dueDate = new Date(dueDate);
    }
    setItemPriority(priority) {
        this.priority = priority;
    }
}