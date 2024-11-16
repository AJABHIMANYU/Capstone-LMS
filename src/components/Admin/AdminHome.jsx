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


import React from "react";

function AdminHome() {
  const handleAddCourse = () => {
    console.log("Navigating to Add Course page...");
  };

  const handleAddModule = () => {
    console.log("Navigating to Add Module page...");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-3xl font-bold">Welcome, Admin</h1>
          <p className="text-sm text-indigo-200">Manage your Learning Management System efficiently.</p>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg">
          <nav className="p-6">
            <ul className="space-y-4">
              <li>
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
                  onClick={() => console.log("Navigating to Courses...")}
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 font-medium hover:bg-indigo-100 hover:text-indigo-600 rounded-lg focus:outline-none"
                  onClick={() => console.log("Navigating to Users...")}
                >
                  Users
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Actions</h2>
            <p className="text-gray-600 mb-8">Select an option below to manage the LMS platform:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Add Course Button */}
              <button
                onClick={handleAddCourse}
                className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Course
              </button>

              {/* Add Module Button */}
              <button
                onClick={handleAddModule}
                className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Module
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminHome;

