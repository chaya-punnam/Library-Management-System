import axios from "axios";

const API_URL = "http://localhost:8040/book";

class BookService {

    getAllBooks() {
        return axios.get(`${API_URL}/all`);
    }

    createBook(book) {
        return axios.post(`${API_URL}/create`, book);
    }

    deleteBook(bookId) {
        return axios.delete(`${API_URL}/${bookId}`);
    }

}

export default new BookService();