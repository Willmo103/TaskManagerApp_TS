"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const user_1 = __importDefault(require("./user"));
class Team {
    constructor(name, lead, members) {
        this.members = [];
        if (name) {
            this.name = name;
        }
        else {
            throw new Error('team name is required');
        }
        if (lead) {
            if (lead instanceof user_1.default) {
                this.lead = lead;
            }
            else {
                throw new Error('team lead must be a user');
            }
        }
        else {
            throw new Error('team lead is required');
        }
        if (members) {
            if (members instanceof Array) {
                members.forEach((member) => {
                    if (member instanceof user_1.default) {
                        this.members = members;
                    }
                    else {
                        throw new Error('team members must be users');
                    }
                });
            }
            else {
                throw new Error('team members must be an array');
            }
        }
        else {
            throw new Error("at least one team member is required");
        }
        this.id = Team.nextId();
    }
    static nextId() {
        let id = Team._nextId;
        Team._nextId++;
        return id;
    }
    addMember(member) {
        this.members.push(member);
    }
    removeMember(member) {
        let index = this.members.indexOf(member);
        if (this.members.indexOf(member) !== -1) {
            this.members.splice(index, 1);
        }
        else {
            throw new Error('User is not a member of this team');
        }
    }
    setLead(lead) {
        this.lead = lead;
    }
    setName(name) {
        this.name = name;
    }
}
Team._nextId = 1;
module.exports = Team;
