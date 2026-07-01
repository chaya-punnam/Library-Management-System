import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import UserService from "../services/UserService";

function Users() {

    const [users, setUsers] = useState([]);

    const loadUsers = () => {

        UserService.getAllUsers()
            .then((response) => {

                setUsers(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    };

    useEffect(() => {

        loadUsers();

    }, []);

    return (

        <div className="container mt-5">

            <UserForm loadUsers={loadUsers} />

            <UserList
                users={users}
                loadUsers={loadUsers}
            />

        </div>

    );

}

export default Users;