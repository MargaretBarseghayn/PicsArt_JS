window.onload = tableInit;

//Function, which initializes table
function tableInit() {
    let body = document.body;
    let table = document.createElement('table');
    table.id = 'BookList';
    body.appendChild(table);

    let tbody = document.createElement('tbody');
    tbody.id = 'TableBody';
    table.appendChild(tbody);

    let caption = document.createElement('caption');
    caption.appendChild(document.createTextNode('My Book List'));
    table.appendChild(caption);

    let thead = document.createElement('thead');
    table.appendChild(thead);

    let tr = document.createElement('tr');
    thead.appendChild(tr);

    let thArray = ['No.', 'Title', 'Author', 'Page Count', 'Read On'];
    thArray.forEach((text) => {
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(text));
        tr.appendChild(th);
    });

    createTable();
}

//Function, which creates table
function createTable() {
    Promise.all([BookService.getBooks(), AuthorService.getAuthors()])
        .then(([books, authors]) => {
            books = Library.sortBooksByTitle(books, 1);
            updateTable(books, authors);
        })
}

//Function, which inserts in table required data
function updateTable(books, authors) {
    let tbody = document.getElementById('TableBody');

    let tr;
    for (let i = 0; i < books.length; ++i) {
        tr = document.createElement('tr');
        tr.id = books[i].id;

        let no = document.createElement('td');
        no.appendChild(document.createTextNode((i + 1).toString()));
        tr.appendChild(no);

        let title = document.createElement('td');
        title.appendChild(document.createTextNode(books[i].title));
        title.addEventListener('click', () => {
            clickHandler(books[i].id, books[i], 'title')
        })
        tr.appendChild(title);

        let author = document.createElement('td');
        author.id = books[i].id;
        let authorName = Library.findAuthorById(authors, books[i].authorId);
        let aut = new Author(authorName.id, authorName.firstName, authorName.lastName, authorName.birthDate);
        author.appendChild(document.createTextNode(Author.getFullName(aut)));
        author.addEventListener('click', () => {
            clickHandler(author.id, aut, 'author');
        }, false);
        tr.appendChild(author);

        let pagecount = document.createElement('td');
        pagecount.appendChild(document.createTextNode(books[i].pageCount));
        tr.appendChild(pagecount);

        let reading = document.createElement('td');
        reading.appendChild(document.createTextNode(books[i].read));
        tr.appendChild(reading);

        tbody.appendChild(tr);
    }
}

//function, which handles table's all 'clicked' events.
function clickHandler(id, name, attribute) {
    let elem = document.getElementById(id);
    let div = document.createElement('div');
    div.id = id;
    div.class = "pop-up window";
    elem.appendChild(div);


    let form = document.createElement('form');
    div.appendChild(form);

    let button = document.createElement('button');
    button.setAttribute('type', 'ok');
    button.innerText = 'Close';

    //If was clicked at 'title' field, handler shows that book's information.
    if (attribute === 'title') {
        form.innerText =
            `This book has ${name.pageCount} pages.\nYou read this book at ${name.read}`
    }

    //If was clicked at 'author'  field, handler shows that author's information.
    if (attribute === 'author') {
        form.innerText =
            `Author name is ${name.firstName}. \n Author surname is ${name.lastName}.\n He was born at ${name.getFormattedBirthDate()}`;
    }

    form.appendChild(button);
    button.onclick = () => {
        elem.removeChild(div);
    }
}
