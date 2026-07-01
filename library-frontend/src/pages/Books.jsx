import { useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import BookService from "../services/BookService";

function Books() {

    const [books, setBooks] = useState([]);

    const loadBooks = () => {

        BookService.getAllBooks()
            .then((response) => {

                setBooks(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    };

    useEffect(() => {

        loadBooks();

    }, []);

    return (

        <div className="container mt-5">

            <BookForm loadBooks={loadBooks} />

            <BookList
                books={books}
                loadBooks={loadBooks}
            />

        </div>

    );

}

export default Books;