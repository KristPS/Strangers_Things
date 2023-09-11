import { Link } from "react-router-dom";

export default function NavBar({ token, setToken }) {
  
  async function handleClick(token, setToken) {
    await setToken("");
  }
  return (
    <div id="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/allPosts">Posts</Link>
          </li>
          <li>
            <Link to="/Users_Me">Users</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/logOut">Logout</Link>
          </li>
          <button onClick={() => handleClick(token, setToken)}>Login</button>
          <button onClick={() => handleClick(token, setToken)}>Logout</button>
          <button onClick={() => handleClick(token)}>Delete Post</button>
          <button onClick={() => handleClick(token)}>Edit Post</button>
          <button onClick={() => handleClick(token)}>Create New Post</button>
          <button onClick={() => handleClick(token, setToken)}>Register</button>
        </ul>
      </nav>
    </div>
  );
}

