"use strict";
class User {
    constructor(firstName, lastName) {
        this.id = User.nextId();
        if (firstName) {
            this.firstName = firstName;
        }
        else {
            throw new Error('first name is required');
        }
        if (lastName) {
            this.lastName = lastName;
        }
        else {
            throw new Error("last name is required");
        }
        this.admin = false;
        this._email = null;
        this._phoneNumber = null;
        this.title = null;
    }
    setEmail(email) {
        this._email = email;
    }
    setPhoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }
    isAdmin() {
        return this.admin;
    }
    setAdmin(admin) {
        this.admin = admin;
    }
    static nextId() {
        let id = User._nextId;
        User._nextId++;
        return id;
    }
    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}
User._nextId = 1;
module.exports = User;
