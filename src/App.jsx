import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
// import './index.css'
import DashBoard from './components/DashBoard'
import Sidebar from './components/SideBar'
// import ModuleSidebar from './components/ModuleSIdebar'
import ContentViewer from './components/ContentViewer'
import CourseContent from './components/CourseContent'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Schedule from './components/Schedule'
import Register from './components/Register'
import Feedback from './components/Feedback'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import AddModuleMain from './components/AddCourse/AddModuleMain'
import CourseForm from './components/AddCourse/CourseForm'
import AdminHome from './components/Admin/AdminHome'


function   App() {
  const [count, setCount] = useState(0)

  return (
     <>
       
        {/* <Login></Login>        */}

        {/* <Register></Register> */}
       {/* <DashBoard></DashBoard>     */}
{/* 
       <Feedback></Feedback> */}
     
       {/* <CourseContent></CourseContent> */}
       {/* <ModuleSidebar></ModuleSidebar> */}

       {/* <HomePage></HomePage> */}

       {/* <AddModuleMain></AddModuleMain> */}
     {/* <ModuleFormMain></ModuleFormMain> */}
     <AdminHome></AdminHome>

  
     </>
   )
 }  
 export default App;

