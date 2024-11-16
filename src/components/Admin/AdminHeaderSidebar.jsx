// // AdminHeaderSidebar.jsx
// import React from "react";

// function AdminHeaderSidebar({ onNavigateToCourses, onNavigateToUsers }) {
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
//                   onClick={onNavigateToCourses}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={onNavigateToUsers}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           {/* Content can be added here if needed */}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminHeaderSidebar;


// AdminHeaderSidebar.js
// AdminHeaderSidebar.js
// AdminHeaderSidebar.js
// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa"; // Import the user icon from react-icons

// function AdminHeaderSidebar({ onNavigateToCourses, onNavigateToUsers }) {
//   const [isProfileVisible, setIsProfileVisible] = useState(false);

//   const handleProfileToggle = () => {
//     setIsProfileVisible(!isProfileVisible);
//   };

//   const handleLogout = () => {
//     console.log("Logging out...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
//         <div className="container mx-auto py-4 px-6 flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//             <p className="text-sm text-indigo-200">Manage your Learning Management System efficiently.</p>
//           </div>
//           {/* User Icon (Profile Button) */}
//           <button
//             onClick={handleProfileToggle}
//             className="text-3xl text-white hover:text-indigo-200 focus:outline-none"
//           >
//             <FaUserCircle />
//           </button>
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
//                   onClick={onNavigateToCourses}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={onNavigateToUsers}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Profile Card */}
//         {isProfileVisible && (
//           <div className="fixed top-20 right-8 w-64 bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Admin Profile</h3>
//             <button
//               onClick={handleLogout}
//               className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//             >
//               Logout
//             </button>
//           </div>
//         )}

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           {/* No more "Manage LMS" card here */}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminHeaderSidebar;















// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa"; // Import the user icon from react-icons
// import AdminCourses from "./AdminCourses";

// function AdminHeaderSidebar({ onNavigateToCourses, onNavigateToUsers }) {
//   const [isProfileVisible, setIsProfileVisible] = useState(false);

//   const handleProfileToggle = () => {
//     setIsProfileVisible(!isProfileVisible);
//   };

//   const handleLogout = () => {
//     console.log("Logging out...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
//         <div className="container mx-auto py-4 px-6 flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//             <p className="text-sm text-indigo-200">Manage your Learning Management System efficiently.</p>
//           </div>
//           {/* User Icon (Profile Button) */}
//           <button
//             onClick={handleProfileToggle}
//             className="text-3xl text-white hover:text-indigo-200 focus:outline-none"
//           >
//             <FaUserCircle />
//           </button>
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
//                   onClick={onNavigateToCourses}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={onNavigateToUsers}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Profile Card */}
//         {isProfileVisible && (
//           <div className="fixed top-20 right-8 w-64 bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Admin Profile</h3>
//             <button
//               onClick={handleLogout}
//               className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//             >
//               Logout
//             </button>
//           </div>
//         )}

//         {/* Empty Main Content */}
//         <main className="flex-1 p-8">
//           {/* This section remains empty */}
          
          
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminHeaderSidebar;




// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";

// function AdminHeaderSidebar({ children, onNavigateToCourses, onNavigateToUsers }) {
//   const [isProfileVisible, setIsProfileVisible] = useState(false);

//   const handleProfileToggle = () => {
//     setIsProfileVisible(!isProfileVisible);
//   };

//   const handleLogout = () => {
//     console.log("Logging out...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
//         <div className="container mx-auto py-4 px-6 flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//             <p className="text-sm text-indigo-200">Manage your Learning Management System efficiently.</p>
//           </div>
//           {/* User Icon (Profile Button) */}
//           <button
//             onClick={handleProfileToggle}
//             className="text-3xl text-white hover:text-indigo-200 focus:outline-none"
//           >
//             <FaUserCircle />
//           </button>
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
//                   onClick={onNavigateToCourses}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={onNavigateToUsers}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Profile Card */}
//         {isProfileVisible && (
//           <div className="fixed top-20 right-8 w-64 bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Admin Profile</h3>
//             <button
//               onClick={handleLogout}
//               className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//             >
//               Logout
//             </button>
//           </div>
//         )}

//         {/* Main Content */}
//         <main className="flex-1 p-8">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default AdminHeaderSidebar;


// import React, { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";

// function AdminHeaderSidebar({ children, onNavigateToCourses, onNavigateToUsers }) {
//   const [isProfileVisible, setIsProfileVisible] = useState(false);

//   const handleProfileToggle = () => {
//     setIsProfileVisible(!isProfileVisible);
//   };

//   const handleLogout = () => {
//     console.log("Logging out...");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
//         <div className="container mx-auto py-4 px-6 flex items-center">
//           {/* Welcome Text */}
//           <div className="flex flex-col items-center justify-center">
//             <h1 className="text-3xl font-bold">Welcome, Admin</h1>
//             <p className="text-sm text-indigo-200">
//               Manage your Learning Management System efficiently.
//             </p>
//           </div>
//           {/* User Icon (Profile Button) */}
//           <button
//             onClick={handleProfileToggle}
//             className="ml-auto text-3xl text-white hover:text-indigo-200 focus:outline-none"
//           >
//             <FaUserCircle />
//           </button>
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
//                   onClick={onNavigateToCourses}
//                 >
//                   Courses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
//                   onClick={onNavigateToUsers}
//                 >
//                   Users
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//         {/* Profile Card */}
//         {isProfileVisible && (
//           <div className="fixed top-20 right-8 w-64 bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Admin Profile</h3>
//             <button
//               onClick={handleLogout}
//               className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//             >
//               Logout
//             </button>
//           </div>
//         )}

//         {/* Main Content */}
//         <main className="flex-1 p-8">{children}</main>
//       </div>
//     </div>
//   );
// }

// export default AdminHeaderSidebar;


import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function AdminHeaderSidebar({ children, onNavigateToCourses, onNavigateToUsers }) {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleProfileToggle = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f3f4f6" }}>
      {/* Header */}
      <header style={{ background: "linear-gradient(to right, #4f46e5, #3b82f6)", color: "#fff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ flex: 1, textAlign: "center" }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}>Welcome, Admin</h1>
            <p style={{ fontSize: "14px", margin: "4px 0 0", color: "#c7d2fe" }}>
              Manage your Learning Management System efficiently.
            </p>
          </div>
          <button
            onClick={handleProfileToggle}
            style={{ fontSize: "24px", color: "#fff", background: "none", border: "none", cursor: "pointer", outline: "none" }}
          >
            <FaUserCircle />
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <aside style={{ width: "256px", backgroundColor: "#fff", boxShadow: "2px 0 4px rgba(0, 0, 0, 0.1)", padding: "24px" }}>
          <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "16px" }}>
                <button
                  onClick={onNavigateToCourses}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 16px",
                    color: "#374151",
                    fontWeight: "500",
                    background: "none",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToUsers}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 16px",
                    color: "#374151",
                    fontWeight: "500",
                    background: "none",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Users
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Profile Card */}
        {isProfileVisible && (
          <div
            style={{
              position: "fixed",
              top: "80px",
              right: "32px",
              width: "256px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#1f2937", marginBottom: "16px" }}>Admin Profile</h3>
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#ef4444",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        )}

        {/* Main Content */}
        <main style={{ flex: 1, padding: "32px" }}>{children}</main>
      </div>
    </div>
  );
}

export default AdminHeaderSidebar;
