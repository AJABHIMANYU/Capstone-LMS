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
import { BrowserRouter, Routes,Route,Router} from 'react-router-dom'
import Schedule from './components/Schedule'
import Register from './components/Register'
import Feedback from './components/Feedback'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import AddModuleMain from './components/AddCourse/AddModuleMain'
import CourseForm from './components/AddCourse/CourseForm'
import AdminHome from './components/Admin/AdminHome'
import AdminCourses from './components/Admin/AdminCourses'
import AdminHeaderSidebar from './components/Admin/AdminHeaderSidebar'
import EnrollToCourse from './components/Admin/EnrollToCourse'
import AdminCourseCard from './components/Admin/AdminCourseCard'


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
     {/* <AdminHome></AdminHome> */}

     {/* <DashBoard></DashBoard> */}

     {/* <AdminCourses></AdminCourses> */}
     {/* <AdminHeaderSidebar></AdminHeaderSidebar> */}
     <EnrollToCourse></EnrollToCourse>

  
     </>
   )
 }  
 export default App;

