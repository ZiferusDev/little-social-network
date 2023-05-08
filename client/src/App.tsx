import React, {useState, createContext} from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Form/LoginForm"
import Registration from "./components/Form/RegistrationForm"
import Page from "./components/Page"
import styles from "./app.module.css"

function App() {
  return (
    <div className={styles.app}>
      
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route 
          path="/registration" 
          element={<Registration />} 
        />
        <Route 
          path="/page" 
          element={<Page />} 
        />
      </Routes>
    </div>
  );
}

export default App;
