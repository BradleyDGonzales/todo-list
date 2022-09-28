import moment from 'moment';
export class ToDoList {
    constructor(title, description, dueDate, priority) {
        let tempDate = new Date(dueDate);
        this.title = title;
        this.description = description;
        this.dueDate = new Date(tempDate.getTime() + tempDate.getTimezoneOffset() * 60000).toLocaleDateString();
        this.priority = priority;
        this.status = status;
    }
    setTitle(title) {
        this.title = title;
    }
    setDescription(description) {
        this.description = description;
    }
    setDueDate(dueDate) {
        this.dueDate = new Date(tempDate.getTime() + tempDate.getTimezoneOffset() * 60000).toLocaleDateString();
    }
    setItemPriority(priority) {
        this.priority = priority;
    }
}