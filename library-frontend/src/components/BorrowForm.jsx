import { useState } from "react";
import BorrowService from "../services/BorrowService";

function BorrowForm({ loadBorrows }) {

const [borrow, setBorrow] = useState({
    bookId: "",
    userId: "",
    borrowDate: "",
    returnDate: "",
    status: "BORROWED"
});

    const handleChange = (event) => {
        setBorrow({
            ...borrow,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        BorrowService.createBorrow(borrow)
            .then(() => {

                alert("Borrow Record Added Successfully");

                setBorrow({
                    bookId: "",
                    userId: "",
                    borrowDate: "",
                    returnDate: "",
                    status: "BORROWED"
                });

                loadBorrows();

            })
            .catch((error) => {

                console.log(error);

            });
    };

    return (

        <div className="card p-4 shadow">

            <h3 className="mb-3">Borrow Book</h3>

            <form onSubmit={handleSubmit}>

                <input
                    type="number"
                    name="bookId"
                    placeholder="Book ID"
                    className="form-control mb-3"
                    value={borrow.bookId}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="userId"
                    placeholder="User ID"
                    className="form-control mb-3"
                    value={borrow.userId}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="borrowDate"
                    className="form-control mb-3"
                    value={borrow.borrowDate}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="returnDate"
                    className="form-control mb-3"
                    value={borrow.returnDate}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    Borrow Book
                </button>

            </form>

        </div>

    );

}

export default BorrowForm;