// import React from "react";

// function AdminHome() {
//   const handleAddCourse = () => {
//     console.log("Navigating to Add Course page...");
//     // Implement navigation logic here
//   };

//   const handleAddModule = () => {
//     console.log("Navigating to Add Module page...");
//     // Implement navigation logic here
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
//       {/* Header */}
//       <header className="bg-white shadow-md py-4">
//         <h1 className="text-center text-2xl font-bold text-gray-800">Welcome Admin</h1>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <div className="w-1/4 bg-white shadow-lg">
//           <div className="p-6">
//             <h2 className="text-xl font-bold text-gray-900">Admin Dashboard</h2>
//           </div>
//           <ul className="space-y-4 p-6 border-t">
//             <li>
//               <button
//                 className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 onClick={() => console.log("Navigating to Courses...")}
//               >
//                 Courses
//               </button>
//             </li>
//             <li>
//               <button
//                 className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 onClick={() => console.log("Navigating to Users...")}
//               >
//                 Users
//               </button>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
//           <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8">
//             <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Manage</h2>
//             <p className="text-gray-600 text-center mb-6">Choose an action to get started</p>
//             <div className="space-y-4">
//               <button
//                 onClick={handleAddCourse}
//                 className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Add Course
//               </button>
//               <button
//                 onClick={handleAddModule}
//                 className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Add Module
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminHome;


// import React from "react";

// function AdminHome() {
//   const handleAddCourse = () => {
//     console.log("Navigating to Add Course page...");
//   };

//   const handleAddModule = () => {
//     console.log("Navigating to Add Module page...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
//         <div className="container mx-auto py-4 px-6">
//           <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//           <p className="text-sm text-indigo-200">Manage your Learning Management System efficiently.</p>
//         </div>
//       </header>

//       {/* Main Layout */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white shadow-lg">
//           <nav className="p-6">
//             <ul className="space-y-4">
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={() => console.log("Navigating to Courses...")}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={() => console.log("Navigating to Users...")}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Actions</h2>
//             <p className="text-gray-600 mb-8">Select an option below to manage the LMS platform:</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Add Course Button */}
//               <button
//                 onClick={handleAddCourse}
//                 className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Add Course
//               </button>

//               {/* Add Module Button */}
//               <button
//                 onClick={handleAddModule}
//                 className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Add Module
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminHome;






// import React, { useState } from "react";

// function AdminHome() {
//   const [isProfileCardVisible, setProfileCardVisible] = useState(false);

//   const handleAddCourse = () => {
//     console.log("Navigating to Add Course page...");
//   };

//   const handleAddModule = () => {
//     console.log("Navigating to Add Module page...");
//   };

//   const handleLogout = () => {
//     console.log("Logging out...");
//   };

//   const toggleProfileCard = () => {
//     setProfileCardVisible(!isProfileCardVisible);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
//         <div className="container mx-auto py-4 px-6 flex items-center justify-between relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//             <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//             <p className="text-sm text-indigo-200">Manage your Learning Management System efficiently.</p>
//           </div>

//           {/* Profile Button */}
//           <button
//             onClick={toggleProfileCard}
//             className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Profile
//           </button>

//           {/* Profile Card */}
//           {isProfileCardVisible && (
//             <div className="absolute right-6 top-16 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
//               <h2 className="text-lg font-semibold text-gray-800">Admin Profile</h2>
//               <p className="text-sm text-gray-600 mt-2">Username: admin_user</p>
//               <button
//                 onClick={handleLogout}
//                 className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Main Layout */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white shadow-lg">
//           <nav className="p-6">
//             <ul className="space-y-4">
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={() => console.log("Navigating to Courses...")}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={() => console.log("Navigating to Users...")}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Actions</h2>
//             <p className="text-gray-600 mb-8">Select an option below to manage the LMS platform:</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Add Course Button */}
//               <button
//                 onClick={handleAddCourse}
//                 className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Add Course
//               </button>

//               {/* Add Module Button */}
//               <button
//                 onClick={handleAddModule}
//                 className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Add Module
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminHome;




// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";

// function AdminHome() {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const handleAddCourse = () => {
//     console.log("Navigating to Add Course page...");
//   };

//   const handleAddModule = () => {
//     console.log("Navigating to Add Module page...");
//   };

//   const handleLogout = () => {
//     console.log("Logging out...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg relative">
//         <div className="container mx-auto py-4 px-6 flex items-center justify-between">
//           <div className="absolute left-6">
//             {/* Center alignment buffer */}
//           </div>
//           <div className="flex-grow text-center">
//             <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//           </div>
//           <div className="relative">
//             {/* Profile Icon */}
//             <FaUserCircle
//               size={32}
//               className="cursor-pointer hover:text-indigo-200 transition duration-200"
//               onClick={() => setIsProfileOpen(!isProfileOpen)}
//             />
//             {isProfileOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-10">
//                 <p className="text-gray-800 font-medium">Admin Username</p>
//                 <hr className="my-2" />
//                 <button
//                   onClick={handleLogout}
//                   className="w-full bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg focus:outline-none"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Main Layout */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white shadow-lg">
//           <nav className="p-6">
//             <ul className="space-y-4">
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={() => console.log("Navigating to Courses...")}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={() => console.log("Navigating to Users...")}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Actions</h2>
//             <p className="text-gray-600 mb-8">Select an option below to manage the LMS platform:</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Add Course Button */}
//               <button
//                 onClick={handleAddCourse}
//                 className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Add Course
//               </button>

//               {/* Add Module Button */}
//               <button
//                 onClick={handleAddModule}
//                 className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Add Module
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminHome;




// import React from "react";

// function AdminHome() {
//   const handleAddCourse = () => {
//     console.log("Navigating to Add Course page...");
//   };

//   const handleAddModule = () => {
//     console.log("Navigating to Add Module page...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
//         <div className="container mx-auto py-4 px-6">
//           <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//           <p className="text-sm text-indigo-200">Manage your Learning Management System efficiently.</p>
//         </div>
//       </header>

//       {/* Main Layout */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white shadow-lg">
//           <nav className="p-6">
//             <ul className="space-y-4">
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={() => console.log("Navigating to Courses...")}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={() => console.log("Navigating to Users...")}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Actions</h2>
//             <p className="text-gray-600 mb-8">Select an option below to manage the LMS platform:</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Add Course Button */}
//               <button
//                 onClick={handleAddCourse}
//                 className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Add Course
//               </button>

//               {/* Add Module Button */}
//               <button
//                 onClick={handleAddModule}
//                 className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Add Module
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminHome;



// import React from "react";

// function AdminHome() {
//   const handleAddCourse = () => {
//     console.log("Navigating to Add Course page...");
//   };

//   const handleAddModule = () => {
//     console.log("Navigating to Add Module page...");
//   };

//   return (
//     <div className="flex-1 p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Actions</h2>
//         <p className="text-gray-600 mb-8">Select an option below to manage the LMS platform:</p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Add Course Button */}
//           <button
//             onClick={handleAddCourse}
//             className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             Add Course
//           </button>

//           {/* Add Module Button */}
//           <button
//             onClick={handleAddModule}
//             className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Add Module
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminHome;


import React from "react";
import AdminHeaderSidebar from "./AdminHeaderSidebar";

function AdminHome() {
  const handleAddCourse = () => {
    console.log("Navigating to Add Course page...");
  };

  const handleAddModule = () => {
    console.log("Navigating to Add Module page...");
  };

  const handleNavigateToCourses = () => {
    console.log("Navigating to Courses...");
  };

  const handleNavigateToUsers = () => {
    console.log("Navigating to Users...");
  };

  return (
    <AdminHeaderSidebar
      onNavigateToCourses={handleNavigateToCourses}
      onNavigateToUsers={handleNavigateToUsers}
    >
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Actions</h2>
        <p className="text-gray-600 mb-8">Select an option below to manage the LMS platform:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={handleAddCourse}
            className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Course
          </button>
          <button
            onClick={handleAddModule}
            className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Module
          </button>
        </div>
      </div>
    </AdminHeaderSidebar>
  );
}

export default AdminHome;
