import { Link } from "react-router-dom";

export default function NavBar({ token }) {
    //show different links if logged in or not
    //implement logout functionality
  return (
    <nav>
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <button>logout</button>
      </ul>
    </nav>
  );
}
