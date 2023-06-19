const Task = require("../dist/task");
const User = require("../dist/user");

describe("Task", () => {
  it("constructor should raise an error if title is not provided", () => {
    expect(() => new Task()).toThrowError("title is required");
  });

  it("constructor should raise an error if description is not provided", () => {
    expect(() => new Task("title")).toThrowError("description is required");
  });

  it("constructor should properly set the title", () => {
    const task = new Task("title", "description");
    expect(task.title).toBe("title");
  });

  it("constructor should properly set the description", () => {
    const task = new Task("title", "description");
    expect(task.description).toBe("description");
  });

  it("Tasks should have unique ids", () => {
    const task1 = new Task("title", "description");
    const task2 = new Task("title", "description");
    expect(task1.id).not.toBe(task2.id);
  });

  it("Task should have a toString method", () => {
    const task = new Task("title", "description");
    expect(task.toString()).toBe("title description");
  });

  it("Task should assign a user to a task", () => {
    const user = new User("John", "Doe");
    const task = new Task("title", "description", "status", user, "dueDate");
    expect(task.assignee).toBe(user);
    expect(task.assignee instanceof User).toBe(true);
  });
});
