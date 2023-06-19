import User = require('./user');

class Task {
    static _nextId: number = 1;
    id: number;
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
        this.id = Task.nextId();
        this.status = status;
        this.assignee = assignee;
        this.dueDate = dueDate;
    }

    private static nextId(): number {
        let id: number = Task._nextId;
        Task._nextId++;
        return id;
    }
}

export = Task;
