class bookModel {
    //Book constructor, which has id – number, title – string, authorId – number, pageCount – number, read – number
    constructor(id, title, authorId, pageCount, read) {
        this.id = id;
        this.title = title;
        this.authorId = authorId;
        this.pageCount = pageCount;
        this.read = read;
    }

    //Function, which receives object, initializes it and returns Book
    static fromJSON(json) {
        return new bookModel(json.id, json.title, json.authorId,
            json.pageCount, json.read);
    }


    // Function, which returns JSON string of book
    toJSONString() {
        return JSON.stringify(this);
    }

    // Function, which writes in console formatted info , such as
    // book id – 1
    // book title – White Fang
    // book pages count – 500
    // book read on - 2019
    print() {
        console.log(`book id –  ${this.id}
                     book title – ${this.title}
                     book pages count – ${this.pageCount}
                     book read on - ${this.read}`);
    }

}
