import { useState } from "react";
import BookService from "../services/BookService";

function BookForm({ loadBooks }) {

    const [book, setBook] = useState({
        bookTitle: "",
        author: "",
        totalCopies: "",
        availableCopies: ""
    });

    const handleChange = (event) => {

        setBook({
            ...book,
            [event.target.name]: event.target.value
        });

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log("Button Clicked");
        console.log("Book Data:", book);

        BookService.createBook(book)
            .then((response) => {

                console.log("SUCCESS");
                console.log(response);

                alert("Book Added Successfully");

                setBook({
                    bookTitle: "",
                    author: "",
                    totalCopies: "",
                    availableCopies: ""
                });

                loadBooks();

            })
            .catch((error) => {

                console.log("ERROR");

                console.log(error);

                if (error.response) {
                    console.log("Status:", error.response.status);
                    console.log("Response:", error.response.data);
                    alert("Status: " + error.response.status);
                } else {
                    console.log(error.message);
                }

            });

    };

    return (

        <div className="card p-4 shadow">

            <h3 className="mb-3">Add Book</h3>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="bookTitle"
                    placeholder="Book Title"
                    className="form-control mb-3"
                    value={book.bookTitle}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    className="form-control mb-3"
                    value={book.author}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="totalCopies"
                    placeholder="Total Copies"
                    className="form-control mb-3"
                    value={book.totalCopies}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="availableCopies"
                    placeholder="Available Copies"
                    className="form-control mb-3"
                    value={book.availableCopies}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    Save Book
                </button>

            </form>

        </div>

    );

}

export default BookForm;