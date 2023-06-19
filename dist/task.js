"use strict";
class Task {
    constructor(title, description, status, assignee, dueDate) {
        if (title) {
            this.title = title;
        }
        else {
            throw new Error('title is required');
        }
        if (description) {
            this.description = description;
        }
        else {
            throw new Error('description is required');
        }
        this.id = Task.nextId();
        this.status = status;
        this.assignee = assignee;
        this.dueDate = dueDate;
    }
    static nextId() {
        let id = Task._nextId;
        Task._nextId++;
        return id;
    }
}
Task._nextId = 1;
module.exports = Task;
