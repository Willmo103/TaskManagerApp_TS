import User = require('./user');

class Task {
    title: string;
    description: string;
    status: string;
    assignee: User;
    dueDate: Date;

    constructor(title: string, description: string, status: string, assignee: User, dueDate: Date) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.assignee = assignee;
        this.dueDate = dueDate;
    }
}
