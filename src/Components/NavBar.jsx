import { Link } from "react-router-dom";

export default function NavBar({ token, setToken }) {
    //show different links if logged in or not
    //implement logout functionality
    async function handleClick (token, setToken) {
      await setToken('')
    }
  return (
    <div id='navbar'>
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
          <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        <button onClick={() => handleClick(token, setToken)}>Login</button>
        <button onClick={() => handleClick(token, setToken)}>Logout</button>
      </ul>
    </nav>
    </div>
  );
}
