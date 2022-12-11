import React from 'react'
import Login from './Components/Login/Login'
import Employee from './Components/Employee/Employee'
import Admin from './Components/Admin/Admin'
import {
   Routes , Route
  } from "react-router-dom";


const App = () => {
 
    // const router = createBrowserRouter([
    //     {
    //         path:"/",
    //         element:<Login />
    //     },
    //     {
    //         path:"/patient",
    //         element:<Employee />
    //     },{
    //         path:"/admin",
    //         element:<Admin />
    //     }
    // ])

  return (
    <div>
     
      <Routes>
            <Route  path="/"  exact element={<Login />} />
            <Route  path="/patient"  element={<Employee />} />
            <Route  path="/admin"  element={<Admin />} />
            <Route  path="/doctor"  element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App