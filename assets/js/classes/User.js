class User {

    #id;
    #username;
    #email;
    #password;
    #firstName;
    #lastName;
    #profileImage;


    constructor(id, username, email, password, firstName, lastName, profileImage) {

        this.#id = id;
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#profileImage = profileImage;

    }

    get() {

        return this.#id;
    }

    set id(id) {

        this.#id = id;

    }

    get() {

        return this.#username;
    }

    set username(username) {

        this.#username = username;

    }

    get() {

        return this.#email;
    }

    set email(email) {

        this.#email = email;

    }

    get() {

        return this.#password;
    }

    set password(password) {

        this.#password = password;

    }

    get() {

        return this.#firstName;
    }

    set firstName(firstName) {

        this.#firstName = firstName;

    }

    get() {

        return this.#lastName;
    }

    set lastName(lastName) {

        this.#lastName = lastName;

    }

    get() {

        return this.#profileImage;
    }

    set profileImage(profileImage) {

        this.#profileImage = profileImage;

    }
    
    toJSON () {

        let user = {
            id : this.#id,
            username : this.#username,
            email : this.#email,
            password : this.#password,
            firstName : this.#firstName,
            lastName : this.#lastName,
            profileImage : this.#profileImage,
        };

    return JSON.stringify(user);
    
    }
}

export { User };