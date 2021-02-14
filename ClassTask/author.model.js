class Author {
    //Author constructor, which has id – number,
    // firstName - string, lastName - string, birthdate – Date
    constructor(id, firstName, lastName, birthDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    //Function, which receives object, initializes it and returns Author
    static fromJSON(json) {
        return new Author(json.id, json.firstName,
            json.lastName, new Date(json.birthDate));
    }

    //Function, which returns JSON string of author
    toJSONString() {
        return JSON.stringify(this);
    }

    //static function, which returns formatted name of author, such as – J.London
    static getFullName(author) {
        return `${author.firstName[0]}. ${author.lastName}`;
    }

    //static function, which returns formatted birthDate of author, such as 15 January 1920
    static getFormattedBirthDate(author) {
        let date = new Date(author.birthDate);
        return `${date.getDate()} ${date.toLocaleString('default', {month: 'long'})} ${date.getFullYear()}`;
    }

    //Function, which writes in console formatted info, such as
    // author id – 1
    // author firstName – Jack
    // author lastName – London
    // author birthdate – 12 January 1876
    print() {
        console.log(`author id - ${this.id}\nauthor firstName – ${this.firstName}\nauthor lastName – ${this.lastName}\nauthor birthdate – ${this.getFormattedBirthDate()}`);
    }


}
