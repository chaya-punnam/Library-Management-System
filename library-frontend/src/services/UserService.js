import axios from "axios";

const API_URL = "http://localhost:8041/user";

class UserService {

    getAllUsers() {
        return axios.get(`${API_URL}/all`);
    }

    createUser(user) {
        return axios.post(`${API_URL}/create`, user);
    }

    deleteUser(userId) {
        return axios.delete(`${API_URL}/${userId}`);
    }

}

export default new UserService();