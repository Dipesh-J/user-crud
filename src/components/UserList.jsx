import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserList = () => {
  const { state } = useContext(UserContext);
  return (
    <ul>
      {state.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;