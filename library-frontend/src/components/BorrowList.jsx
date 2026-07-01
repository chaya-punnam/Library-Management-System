import BorrowService from "../services/BorrowService";

function BorrowList({ borrows, loadBorrows }) {

    const deleteBorrow = (borrowId) => {

        BorrowService.deleteBorrow(borrowId)
            .then(() => {

                alert("Borrow Record Deleted Successfully");

                loadBorrows();

            })
            .catch((error) => {

                console.log(error);

            });

    };

    return (

        <table className="table table-bordered table-hover mt-4">

            <thead className="table-dark">

                <tr>

                    <th>Borrow ID</th>
                    <th>Book ID</th>
                    <th>User ID</th>
                    <th>Borrow Date</th>
                    <th>Return Date</th>
                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {
                    borrows.map((borrow) => (

                        <tr key={borrow.borrowId}>

                            <td>{borrow.borrowId}</td>
                            <td>{borrow.bookId}</td>
                            <td>{borrow.userId}</td>
                            <td>{borrow.borrowDate}</td>
                            <td>{borrow.returnDate}</td>

                            <td>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteBorrow(borrow.borrowId)}
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

export default BorrowList;