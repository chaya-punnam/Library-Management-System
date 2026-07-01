import BookService from "../services/BookService";

function BookList({ books, loadBooks }) {

    const deleteBook = (bookId) => {

        BookService.deleteBook(bookId)
            .then(() => {

                alert("Book Deleted Successfully");

                loadBooks();

            })
            .catch((error) => {

                console.log(error);

            });

    };

    return (

        <table className="table table-bordered table-hover mt-4">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Total</th>
                    <th>Available</th>
                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {
                    books.map((book) => (

                        <tr key={book.bookId}>

                            <td>{book.bookId}</td>
                            <td>{book.bookTitle}</td>
                            <td>{book.author}</td>
                            <td>{book.totalCopies}</td>
                            <td>{book.availableCopies}</td>

                            <td>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteBook(book.bookId)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))
                }

            </tbody>

        </table>

    );

}

export default BookList;