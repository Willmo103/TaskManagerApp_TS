class User {
    static _nextId: number = 1;
    id: number;
    firstName: string;
    lastName: string;
    title: string | null;
    private admin: boolean;
    private _email: string | null;
    private _phoneNumber: string | null;

    constructor(
        firstName: string,
        lastName: string,
    ) {
        this.id = User.nextId();
        if (firstName) {
            this.firstName = firstName;
        } else {
            throw new Error('first name is required');
        }
        if (lastName) {
            this.lastName = lastName;
        } else {
            throw new Error("last name is required");
        }
        this.admin = false;
        this._email = null;
        this._phoneNumber = null;
        this.title = null;
    }

    setEmail(email: string) {
        this._email = email;
    }

    setPhoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    isAdmin(): boolean {
        return this.admin;
    }

    private setAdmin(admin: boolean) {
        this.admin = admin;
    }

    private static nextId(): number {
        let id = User._nextId;
        User._nextId++;
        return id;
    }

    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

export = User;
