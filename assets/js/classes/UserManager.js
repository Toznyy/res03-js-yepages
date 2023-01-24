import { User } from './User.js';


class UserManager {

    #users;

    constructor(users = []) {

        this.#users = users;

    }

    get() {

        return this.#users;
    }

    set users(users) {

        this.#users = users;

    }

    findAllUsers() {
        return this.#users;
    }

    findBookById(id) {
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].id === id) {
                return this.#users[i];
            }
            else {
                return null;
            }
        }
    }

    findUserByUsername(username) {
        let usernameBooks = [];
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].username === username) {
                return usernameBooks.push(this.#users[i]);
            }
            else {
                return null;
            }
        }
    }

    findUserByEmail(email) {
        let emailBooks = [];
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].email === email) {
                return emailBooks.push(this.#users[i]);
            }
            else {
                return null;
            }
        }
    }

    createUser(user) {
        for (let i = 0; i < this.#users.length; i++){
            
            if (this.#users[i].email === user.email) {
                return alert("Cet email est déjà utilisé.");
            }
            else {
                this.#users.push(user);
            }
        }
    }

    deleteUser(userId) {
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].id === userId) {
                this.#users.splice(i, 1);
            }
        }
    }

    editUser(user) {
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].id === user.id) {
                this.#users[i] = user;
            }
        }
    }
    
    login(username, password) {
        let userRegistered = JSON.parse(localStorage.getItem("user"));
        if (this.#users.email === userRegistered.email) {
            return alert("Email");
        }
        else if (this.#users.password === userRegistered.password) {
            return alert("Mdp");
        }
    }

    save() {
        let jsonUser = JSON.stringify(this.#users);
        localStorage.setItem("user", jsonUser);
    }

    load() {
        let usersStorage = JSON.parse(localStorage.getItem("user"));
        console.log(usersStorage);

        if (usersStorage !== null) {
            for (let i = 0; i < usersStorage.length; i++) {
                let parseUser = JSON.parse(usersStorage[i]);
                let newUser = new User(parseUser.id, parseUser.username, parseUser.email, parseUser.password, parseUser.firstName, parseUser.lastName, parseUser.profileImage);
                this.#users.push(newUser);
            }
        }
    }
}

export { UserManager };