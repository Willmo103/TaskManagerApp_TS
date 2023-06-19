"use strict";
var User = /** @class */ (function () {
    function User(firstName, lastName) {
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
    User.prototype.setEmail = function (email) {
        this._email = email;
    };
    User.prototype.setPhoneNumber = function (phoneNumber) {
        this._phoneNumber = phoneNumber;
    };
    User.prototype.isAdmin = function () {
        return this.admin;
    };
    User.prototype.setAdmin = function (admin) {
        this.admin = admin;
    };
    User.nextId = function () {
        var id = User._nextId;
        User._nextId++;
        return id;
    };
    User.prototype.toString = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    User._nextId = 1;
    return User;
}());
module.exports = User;
