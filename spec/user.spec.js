const User = require("../dist/user");

describe("User", () => {
  it("constructor should raise an error if firstName is not provided", () => {
    expect(() => new User()).toThrowError("first name is required");
  });

  it("constructor should raise an error if lastName is not provided", () => {
    expect(() => new User("John")).toThrowError("last name is required");
  });

  it("constructor should properly set the firstName", () => {
    const user = new User("John", "Doe");
    expect(user.firstName).toBe("John");
  });

  it("constructor should properly set the lastName", () => {
    const user = new User("John", "Doe");
    expect(user.lastName).toBe("Doe");
  });

  it("Users should have unique ids", () => {
    const user1 = new User("John", "Doe");
    const user2 = new User("Jane", "Doe");
    expect(user1.id).not.toBe(user2.id);
  });

  it("User should have a toString method", () => {
    const user = new User("John", "Doe");
    expect(user.toString()).toBe("John Doe");
  });

  it("User should have an isAdmin method", () => {
    const user = new User("John", "Doe");
    expect(user.isAdmin()).toBe(false);
  });
});
