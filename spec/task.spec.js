const Task = require("../dist/task");

describe("Task", () => {
  it("constructor should raise an error if title is not provided", () => {
    expect(() => new Task()).toThrowError("title is required");
  });
});
