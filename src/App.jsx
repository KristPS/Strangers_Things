import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./Pages/Posts";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import SignUpPage from "./Pages/SignUpPage";
import NavBar from "./Components/NavBar";
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>
      <NavBar token={token} setToken={setToken}/>
      <Routes>
        <Route path="/posts" element={<Posts token={token} />} />
        <Route path="/profile" element={<Profile token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<SignUp setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
