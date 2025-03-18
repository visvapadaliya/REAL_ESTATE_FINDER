import { useEffect, useState } from 'react'

import { UserSidebar } from './components/layouts/UserSidebar'
// import './App.css'
import './assets/form.css'
import './assets/adminlte.css'
import './assets/adminlte.min.css'

import './assets/all.min.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { UserProfile } from './components/user/UserProfile'
import { Login } from './components/common/Login'
import { Signup } from './components/common/Signup'

import { Demo } from './components/common/Demo'
import { AdminSidebar } from './components/layouts/AdminSidebar'
import axios from 'axios'
import { AddProperty } from './components/agent/AddProperty'

import { AgentSidebar } from './components/layouts/AgentSidebar'
import PrivateRoutes from './hooks/PrivateRoutes'
import { ViewProperty } from './components/agent/ViewProperty'
import { UpdateProperty } from './components/agent/UpdateProperty'


function App() {
  axios.defaults.baseURL = "http://localhost:3030"

  const location=useLocation();

  useEffect(()=>{
    if(location.pathname==="/login" || location.pathname === "/signup"){
      document.body.className="body";
    }else{
      document.body.className=
      "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  },[location.pathname]);

  return (
    
     <div
      className={
        location.pathname === "/login" || location.pathname === "/signup"
          ? ""
          : "app-wrapper"
      }
    >
   
        <Routes>

        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        
        <Route path='' element={<PrivateRoutes/>}>
              <Route path='/user' element={<UserSidebar/>}>
              <Route path='demo' element={<Demo/>}></Route>
              <Route path='profile' element={<UserProfile/>}></Route>
              </Route>
        </Route>
              <Route path='/agent' element={<AgentSidebar/>}>
                    <Route path='property' element={<AddProperty/>}></Route>
                    <Route path='viewproperty' element={<ViewProperty/>}></Route>
                    <Route path='updateproperty' element={<UpdateProperty/>}></Route>
             </Route>
        
        <Route path='/admin' element={<AdminSidebar/>}></Route>              
              
        </Routes>
      </div>

  )
}

export default App
