import User from './user';

class Team {
    private static _nextId: number = 1;
    name: string;
    lead: User;
    members: User[] = [];
    id: number;

    constructor(name: string, lead: User, members: User[]) {
        if (name) {
            this.name = name;
        } else {
            throw new Error('team name is required');
        }
        if (lead) {
            if (lead instanceof User) {
                this.lead = lead;
            } else {
                throw new Error('team lead must be a user');
            }
        } else {
            throw new Error('team lead is required');
        }
        if (members) {
            if (members instanceof Array) {
                members.forEach((member) => {
                    if (member instanceof User) {
                        this.members = members;
                    } else {
                        throw new Error('team members must be users');
                    }
                });
            } else {
                throw new Error('team members must be an array');
            }
        } else {
            throw new Error("at least one team member is required");
        }
        this.id = Team.nextId();
    }

    static nextId(): number {
        let id = Team._nextId;
        Team._nextId++;
        return id;
    }

    addMember(member: User): void {
        this.members.push(member);
    }

    removeMember(member: User): void {
        let index = this.members.indexOf(member);
        if (this.members.indexOf(member) !== -1) {
            this.members.splice(index, 1);
        } else {
            throw new Error('User is not a member of this team');
        }
    }

    setLead(lead: User): void {
        this.lead = lead;
    }

    setName(name: string): void {
        this.name = name;
    }
}

export = Team;
