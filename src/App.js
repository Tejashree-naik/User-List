import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      // Extract the relevant user data from the API response
      const userData = response.data.users.map((user) => ({
        firstName: user.firstName,
        email: user.email,
        age: user.age,
        image: user.image,
      }));
      setUsers(userData); // Set the users state with the array of user data
    });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="user-card">
            {" "}
            {/* Apply the user-card class */}
            <img
              src={user.image}
              alt={`${user.firstName}'s profile`}
              width="100"
              height="100"
            />
            <div className="user-details">
              <p>
                <strong>Name:</strong> {user.firstName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
