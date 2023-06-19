const User = require("../dist/user");
const Team = require("../dist/team");

describe("Team", () => {
  let team;
  let user;
  let user2;
  let user3;
  let user4;
  beforeEach(() => {
    user = new User("John", "Doe");
    user2 = new User("Jane", "Doe");
    user3 = new User("John", "Smith");
    user4 = new User("Jane", "Smith");
    team = new Team("Team 1", user, [user2, user3]);
  });

  it("constructor should throw an error if no name is provided", () => {
    expect(() => new Team()).toThrow(new Error("team name is required"));
  });

  it("constructor should throw an error if no lead is provided", () => {
    expect(() => new Team("Team 1")).toThrow(
      new Error("team lead is required")
    );
  });
  it("constructor should throw an error if lead is not an instance of User", () => {
    expect(() => new Team("Team 1", "John")).toThrow(
      new Error("team lead must be a user")
    );
  });

  it("constructor should throw an error if members array is empty", () => {
    expect(() => new Team("Team 1", user)).toThrow(
      new Error("at least one team member is required")
    );
  });

  it("constructor should throw an error if members array is not an array", () => {
    expect(() => new Team("Team 1", user, user2)).toThrow(
      new Error("team members must be an array")
    );
  });

  it("constructor should throw an error if members array is not an array of User instances", () => {
    expect(() => new Team("Team 1", user, [user2, "John"])).toThrow(
      new Error("team members must be users")
    );
  });

  it("addMember should update the members array", () => {
    team.addMember(user4);
    expect(team.members).toEqual([user2, user3, user4]);
  });

  it("removeMember should update the members array", () => {
    team.removeMember(user3);
    expect(team.members).toEqual([user2]);
  });

  it("setLead should update the lead", () => {
    team.setLead(user4);
    expect(team.lead).toEqual(user4);
  });

  it("setName should update the name", () => {
    team.setName("Team 2");
    expect(team.name).toEqual("Team 2");
  });
});
