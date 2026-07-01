import { useEffect, useState } from "react";
import BorrowForm from "../components/BorrowForm";
import BorrowList from "../components/BorrowList";
import BorrowService from "../services/BorrowService";

function Borrow() {

    const [borrows, setBorrows] = useState([]);

    const loadBorrows = () => {

        BorrowService.getAllBorrows()
            .then((response) => {

                setBorrows(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    };

    useEffect(() => {

        loadBorrows();

    }, []);

    return (

        <div className="container mt-5">

            <BorrowForm loadBorrows={loadBorrows} />

            <BorrowList
                borrows={borrows}
                loadBorrows={loadBorrows}
            />

        </div>

    );

}

export default Borrow;