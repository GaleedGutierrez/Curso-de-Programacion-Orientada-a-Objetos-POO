class Account {
    constructor(id, name, document) {
        this.id = id;
        this.name = name;
        this.document = document;
        this.email;
        this.password;
    };

    printUserData () {
        let {id, name, document} = this;
        console.group(`User with id ${id}`);
        console.log(`Id: ${id}`);
        console.log(`Name: ${name}`);
        console.log(`Document: ${document}`);
        console.groupEnd();
    }
}