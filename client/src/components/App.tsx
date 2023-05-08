import React, {useState, createContext} from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./Form/LoginForm"
import Registration from "./Form/RegistrationForm"
import Page from "./Page/Page"
import UnknownPage from "./Page/UnknownPage"
import styles from "./app.module.css" 

function App() {
  return (
    <div className={styles.app}>
      
      <Routes>
        <Route path="" element={<Login />}/>
        <Route 
          path="registration" 
          element={<Registration />} 
        />
        <Route 
          path="page" 
          element={<Page />} 
        />
        <Route
          path="*"
          element={<UnknownPage />}
        />
      </Routes>
    </div>
  );
}

// function App() {
//   let element = useRoutes([
//     { path: "/", element: <Login/>},
//     { path: "registration", element: <Registration /> }
//   ])

//   return element
// }

export default App;
