import axios from "axios";

const API_URL = "http://localhost:8042/borrow";

class BorrowService {

    getAllBorrows() {
        return axios.get(`${API_URL}/all`);
    }

    createBorrow(borrow) {
        return axios.post(`${API_URL}/create`, borrow);
    }

    deleteBorrow(borrowId) {
        return axios.delete(`${API_URL}/${borrowId}`);
    }

}

export default new BorrowService();