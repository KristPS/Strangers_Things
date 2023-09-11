import React from "react";
import { useHistory } from "react-router-dom";

async function performLogout() {
  try {
    const response = await fetch("/auth/logout");
    if (response.ok) {
      // Logout was successful
      history.push("/");
    } else {
      // Logout failed
      console.error("Logout failed.");
    }
  } catch (err) {
    // Handle other errors
    console.error("An error occurred while logging out:", err);
  }
}

export default function LogOut() {
  const history = useHistory();

  const handleLogout = async () => {
    await performLogout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}


  
