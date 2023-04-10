import './App.css'
import React from "react";
import { UserProvider } from "./context/UserContext";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  return (
    <UserProvider>
      <UserForm />
      <UserList />
    </UserProvider>
  );
};

export default App;
