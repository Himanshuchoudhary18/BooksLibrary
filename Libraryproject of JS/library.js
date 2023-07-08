class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        // console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
        // so basically as in html id=tbody is empty so, we have to add this content which a user will fill on webpage in tbody section and then store it from here and += will keep on appending the value each time if any users add any book anytime.
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let Text;
        if (type === 'success') {
            Text = 'Success';
        }
        else {
            Text = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${Text}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);

    }
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');

libraryForm.addEventListener('submit', function (e) {
    // console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let g = new Book(name, author, type);
    console.log(g);

    let h = new Display();

    // Basically it means that if we able to add new Display mein g ka author,name and type then it should add g also and then clear everything after adding and in pop-up it should show "SUccesfully added"
    if (h.validate(g)) {
        h.add(g);
        h.clear();
        h.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        h.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();

});

