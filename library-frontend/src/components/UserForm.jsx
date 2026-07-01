import { useState } from "react";
import UserService from "../services/UserService";

function UserForm({ loadUsers }) {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        phone: ""
    });

    const handleChange = (event) => {

        setUser({
            ...user,
            [event.target.name]: event.target.value
        });

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(user);

        UserService.createUser(user)
            .then(() => {

                alert("User Added Successfully");

                setUser({
                    userName: "",
                    email: "",
                    phone: ""
                });

                loadUsers();

            })
            .catch((error) => {

                console.log(error.response);

            });

    };

    return (

        <div className="card p-4 shadow">

            <h3 className="mb-3">Add User</h3>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    className="form-control mb-3"
                    value={user.userName}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control mb-3"
                    value={user.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control mb-3"
                    value={user.phone}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="btn btn-success w-100"
                >
                    Save User
                </button>

            </form>

        </div>

    );

}

export default UserForm;