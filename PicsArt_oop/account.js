function Account(id, firstName, lastName, username, url){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.url = url
    this.posts = []
}

Account.prototype.printInfo = function (){
    console.log(`Id : ${this.id}
First name is: ${this.firstName}
Last name is: ${this.lastName}
Username is: ${this.username}
Photo's url is: ${this.url}`
    );
}
