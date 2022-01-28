class Account {
    constructor(id, name, document) {
        this.id = id;
        this.name = name;
        this.document = document;
        this.email;
        this.password;
    };

    printUserData (account) {
        const {id} = this;
        console.group(`User with id ${id}`);
        console.table(account);
        console.groupEnd();
    };
};