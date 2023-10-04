import React from "react";
//import { useHistory } from "react-router-dom";

export default function LogOut() {
  //const history = useHistory();

  const handleLogout = async () => {
    await performLogout();
  };

  async function performLogout() {
    try {
      const response = await fetch("/auth/logout");
      if (response.ok) {
        //history.push("/");
      } else {
        console.error("Logout failed.");
      }
    } catch (err) {
      console.error("An error occurred while logging out:", err);
    }
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

  
