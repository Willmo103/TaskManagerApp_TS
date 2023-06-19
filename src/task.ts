import User = require('./user');

class Task {
    title: string;
    description: string;
    status: string;
    assignee: User;
    dueDate: Date;

    constructor(title: string, description: string, status: string, assignee: User, dueDate: Date) {
        if (title) {
            this.title = title;
        } else {
            throw new Error('title is required');
        }
        if (description) {
            this.description = description;
        } else {
            throw new Error('description is required');
        }
        this.status = status;
        this.assignee = assignee;
        this.dueDate = dueDate;
    }
}
