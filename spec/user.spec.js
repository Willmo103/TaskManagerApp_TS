const User = require("../build/user");

describe("User", () => {
  it("constructor should properly set the name", () => {
    const user = new User("John", "Doe");
    console.log(user);
    expect(user.firstName).toBe("John");
  });

  it("Users should have unique ids", () => {
    const user1 = new User("John");
    const user2 = new User("Jane");
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
