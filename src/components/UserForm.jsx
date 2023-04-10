import React, { useState, useContext } from "react";
import {UserContext} from "../context/UserContext";
import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../reducers/userReducer";
import "./UserForm.css";

const UserForm = () => {
  const { state, dispatch } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch({ type: UPDATE_USER, payload: { id, name, email } });
    } else {
      dispatch({ type: ADD_USER, payload: { name, email } });
    }
    setName("");
    setEmail("");
    setId(null);
  };

  const handleEdit = (id) => {
    const user = state.users.find((user) => user.id === id);
    setName(user.name);
    setEmail(user.email);
    setId(user.id);
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_USER, payload: id });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">{id ? "Update" : "Add"}</button>
      </form>
      <ul>
        {state.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}){" "}
            <button onClick={() => handleEdit(user.id)}>Edit</button>{" "}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserForm;
