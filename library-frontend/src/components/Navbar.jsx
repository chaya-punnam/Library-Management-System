import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Library Management System
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/books">
            Books
          </Link>
          <Link className="nav-link" to="/users">
            Users
          </Link>
          <Link className="nav-link" to="/borrow">
            Borrow
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;