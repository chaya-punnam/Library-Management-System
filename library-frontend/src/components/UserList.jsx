import UserService from "../services/UserService";

function UserList({ users, loadUsers }) {

    const deleteUser = (userId) => {

        UserService.deleteUser(userId)
            .then(() => {

                alert("User Deleted Successfully");

                loadUsers();

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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {
                    users.map((user) => (

                        <tr key={user.userId}>

                            <td>{user.userId}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>

                            <td>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteUser(user.userId)}
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

export default UserList;