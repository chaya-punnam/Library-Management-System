import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="container mt-5">

            <div className="text-center mb-5">

                <h1 className="display-4 fw-bold">
                    📚 Library Management System
                </h1>

                <p className="lead">
                    Spring Boot Microservices + ReactJS
                </p>

            </div>

            <div className="row">

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>📚</h1>

                            <h3>Books</h3>

                            <p>
                                Add, Update, Delete and View Books
                            </p>

                            <Link
                                to="/books"
                                className="btn btn-primary"
                            >
                                Manage Books
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>👤</h1>

                            <h3>Users</h3>

                            <p>
                                Register and Manage Library Users
                            </p>

                            <Link
                                to="/users"
                                className="btn btn-success"
                            >
                                Manage Users
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>📖</h1>

                            <h3>Borrow</h3>

                            <p>
                                Borrow and Return Library Books
                            </p>

                            <Link
                                to="/borrow"
                                className="btn btn-warning"
                            >
                                Borrow Books
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

            <hr className="my-5" />

            <div className="row text-center">

                <div className="col">

                    <h5>⚙️ Technologies Used</h5>

                    <p>

                        ReactJS • Spring Boot • MySQL • Spring Data JPA •
                        Microservices • Eureka Server • API Gateway • Bootstrap

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Home;