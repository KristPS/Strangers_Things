import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import LogOut from "./Pages/LogOut";
import Users_Me from "./Pages/Users_Me";
import CreatePost from "./Pages/CreatePosts";
import AllPosts from "./Pages/AllPostsCard";
import EditPost from "./Pages/EditPost";
import DeletePost from "./Pages/DeletePostCard";
import NavBar from "./Components/NavBar";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  return (
    <div>
      <NavBar token={token} setToken={setToken} />

      <Routes>
        <Route path="/auth/login" exact element={<Login />} />
        <Route path="/auth/register" exact element={<Register />} />
        <Route path="/auth/logout" exact element={<LogOut />} />
        <Route path="/profile/:id/delete" exact element={<DeletePost />} />
        <Route path="/profile/:id/edit" exact element={<EditPost />} />
        <Route path="/profile/:id" exact element={<Users_Me />} />
        <Route path="/profile/createPost" exact element={<CreatePost />} />
        <Route path="/allPosts" exact element={<AllPosts />} />
      </Routes>
    </div>
  );
}

export default App;
