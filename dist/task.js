"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.status = status;
        this.assignee = assignee;
        this.dueDate = dueDate;
    }
}
