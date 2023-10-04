import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import LogOut from "./Pages/LogOut";
import Users_Me from "./Components/Users_Me";
import CreatePost from "./Components/CreatePosts";
import AllPosts from "./Components/AllPostsCard";
import EditPost from "./Components/EditPost";
import DeletePostCard from "./Components/DeletePostCard";
import NavBar from "./Components/NavBar";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  return (
    <div>
      <NavBar token={token} setToken={setToken} />

      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/logOut" exact element={<LogOut />} />
        <Route path="/profile/:id/delete" exact element={<DeletePostCard />} />
        <Route path="/profile/:id/edit" exact element={<EditPost />} />
        <Route path="/Users_Me" exact element={<Users_Me />} />
        <Route path="/profile/createPost" exact element={<CreatePost />} />
        <Route path="/allPosts" exact element={<AllPosts />} />
      </Routes>
    </div>
  );
}

export default App;
