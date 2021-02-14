class Library {
    static sortType = {
        ASC: 1,
        DESC: -1,
        NO_SORTING: 0,
        includes: function (sortType) {
            return sortType === this.ASC || sortType === this.DESC || sortType === this.NO_SORTING;
        }
    }
    static filterType = {
        EQUAL: 0,
        GREATER_OR_EQUAL: 1,
        LESS_OR_EQUAL: -1
    }

    //static function, which sorts books alphabetically by its' title.
    //sortType is enum, which can be Ascending(1), Descending(-1), Or No Sorting(0)
    static sortBooksByTitle(books, sortType) {
        if (!this.sortType.includes(sortType)) {
            sortType = 0;
        }
        if (sortType === 0) {
            return books;
        }
        let copy = books.slice();
        //sorts in asc order
        copy.sort(function (a, b) {
            return a.title > b.title ? 1 : -1
        });
        return sortType === -1 ? copy.reverse() : copy;
    }

    //static function, which sorts books bt its' count of pages.
    //sortType is enum, which can be Ascending(1), Descending(-1), Or No Sorting(0)
    static sortBooksByPageCount(books, sortType) {
        if (!this.sortType.includes(sortType, 0)) {
            sortType = 0;
        }
        if (sortType === 0) {
            return books;
        }
        let copy = books.slice();
        return Array.prototype.sort.call(copy, ((a, b) => {
            return (sortType) * (a.pageCount - b.pageCount);
        }));
    }

    //static function, which sorts books by its' read attribute.
    //sortType is enum, which can be Ascending(1), Descending(-1), Or No Sorting(0)
    static sortBooksByReadOn(books, sortType) {
        if (!this.sortType.includes(sortType)) {
            sortType = 0;
        }
        if (sortType === 0) {
            return books;
        }
        let copy = books.slice();
        return Array.prototype.sort.call(copy, ((a, b) => {
            return (sortType) * (a.read - b.read);
        }));
    }

    //static function, which sorts authors by its' fullName.
    //sortType is enum, which can be Ascending(1), Descending(-1), Or No Sorting(0)
    static sortAuthorsByFullName(authors, sortType) {
        if (!this.sortType.includes(sortType)) {
            sortType = 0;
        }
        if (sortType === 0) {
            return authors;
        }
        let copy = authors.slice();
        copy = Array.prototype.sort.call(copy, ((a, b) => {
            return a.getFullName() > b.getFullName() ? 1 : -1;
        }));
        return sortType === 1 ? copy : copy.reverse();
    }

    //static function, which sorts authors by its' date of birth.
    //sortType is enum, which can be Ascending(1), Descending(-1), Or No Sorting(0)

    static sortAuthorsByBirthDate(authors, sortType) {
        if (!this.sortType.includes(sortType)) {
            sortType = 0;
        }
        if (sortType === 0) {
            return authors;
        }
        let copy = authors.slice();
        return Array.prototype.sort.call(copy, (a, b) => {
            return (sortType) * (a.birthDate - b.birthDate);
        });
    }

    //static function, which filters books by given author id
    static filterBooksByAuthorId(books, authorId) {
        return books.filter(book => {
            return book.authorId === authorId;
        });
    }

    // static function, which filters books by its' read attribute.
    static filterBooksByReadOn(books, read) {
        return books.filter(book => {
            return book.read === read;
        });
    }

    //static function, which filters books by its' count of pages.
    // filterType is enum, which can be greater than or equal(1), less than or equal(-1), equal(0)
    static filterBooksByPageCount(books, pageCount, filterType) {
        if(filterType === 1){
            return books.filter(book => book.pageCount >= pageCount)
        }
        if(filterType === -1){
            return books.filter(book => book.pageCount <= pageCount)
        }
        return books.filter(book => book.pageCount === pageCount)
    }

    //static function, which returns data of book by given authorID.
    //If no such book was found, returns undefined;
    static findBookByAuthorId(books, authorId) {
        return books.find(book => book.id === authorId)
    }

    //static function, which returns data of book by given id.
    //If no such book was found, returns undefined;
    static findBookById(books, id) {
        return books.find(book => book.id === id)
    }

    //static function, which returns data of author by given id.
    //If no such author was found, returns undefined;
    static findAuthorById(authors, id) {
        return authors.find(author => author.id === id)
    }
}
