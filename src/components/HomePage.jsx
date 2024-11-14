// import React from 'react';
// import Navbar from './Navbar';
// import { BookOpen, Users, Award } from 'lucide-react';

// function HomePage() {
//   return (
//     <div className="min-h-screen bg-lightBlue-50">
//       <Navbar />
      
//       <main className="pt-16">
//         {/* Hero Section */}
//         <div className="relative bg-white overflow-hidden">
//           <div className="max-w-7xl mx-auto">
//             <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
//               <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//                 <div className="sm:text-center lg:text-left">
//                   <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//                     <span className="block">Empower your future</span>
//                     <span className="block text-lightBlue-600">one step at a time</span>
//                   </h1>
//                   <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                     "Education is the most powerful weapon you can use to change the world."
//                   </p>
//                   <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//                     <div className="rounded-md shadow">
//                       <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lightBlue-600 hover:bg-lightBlue-700 md:py-4 md:text-lg md:px-10">
//                         Get started
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Features Section */}
//           <div className="bg-lightBlue-100 py-12">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//                 <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
//                   <BookOpen className="h-12 w-12 text-lightBlue-600" />
//                   <h3 className="mt-4 text-lg font-medium text-gray-900">Rich Content</h3>
//                   <p className="mt-2 text-base text-gray-500 text-center">Access thousands of courses from expert instructors</p>
//                 </div>
//                 <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
//                   <Users className="h-12 w-12 text-lightBlue-600" />
//                   <h3 className="mt-4 text-lg font-medium text-gray-900">Community</h3>
//                   <p className="mt-2 text-base text-gray-500 text-center">Learn together with peers from around the world</p>
//                 </div>
//                 <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
//                   <Award className="h-12 w-12 text-lightBlue-600" />
//                   <h3 className="mt-4 text-lg font-medium text-gray-900">Certification</h3>
//                   <p className="mt-2 text-base text-gray-500 text-center">Earn recognized certificates upon completion</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Image Section */}
//           <div className="relative mt-8">
//             <div className="absolute inset-0">
//               <img
//                 className="w-full h-full object-cover"
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
//                 alt="Students learning"
//               />
//               <div className="absolute inset-0 bg-lightBlue-600 mix-blend-multiply" />
//             </div>
//             <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
//               <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Learn at your own pace</h2>
//               <p className="mt-6 max-w-3xl text-xl text-lightBlue-100">
//                 Study anytime, anywhere, with access to world-class educational content.
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default HomePage;


// import React from 'react';
// import Navbar from './Navbar';
// import { BookOpen, Users, Award } from 'lucide-react';

// function HomePage() {
//   return (
//     <div className="min-h-screen bg-lightBlue-50">
//       <Navbar />

//       <main className="pt-16">
//         {/* Hero Section */}
//         <div className="relative bg-white overflow-hidden">
//           <div className="max-w-7xl mx-auto">
//             <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
//               <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//                 <div className="sm:text-center lg:text-left">
//                   <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//                     <span className="block">Empower your future</span>
//                     <span className="block text-lightBlue-600">one step at a time</span>
//                   </h1>
//                   <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                     "Education is the most powerful weapon you can use to change the world."
//                   </p>
//                   <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//                     <div className="rounded-md shadow">
//                       <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lightBlue-600 hover:bg-lightBlue-700 md:py-4 md:text-lg md:px-10">
//                         Get started
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Features Section */}
//           <div className="bg-lightBlue-100 py-12">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//                 <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
//                   <BookOpen className="h-12 w-12 text-lightBlue-600" />
//                   <h3 className="mt-4 text-lg font-medium text-gray-900">Rich Content</h3>
//                   <p className="mt-2 text-base text-gray-500 text-center">Access thousands of courses from expert instructors</p>
//                 </div>
//                 <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
//                   <Users className="h-12 w-12 text-lightBlue-600" />
//                   <h3 className="mt-4 text-lg font-medium text-gray-900">Community</h3>
//                   <p className="mt-2 text-base text-gray-500 text-center">Learn together with peers from around the world</p>
//                 </div>
//                 <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
//                   <Award className="h-12 w-12 text-lightBlue-600" />
//                   <h3 className="mt-4 text-lg font-medium text-gray-900">Certification</h3>
//                   <p className="mt-2 text-base text-gray-500 text-center">Earn recognized certificates upon completion</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* "How It Works" Section */}
//           <div className="bg-white py-16">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">How It Works</h2>
//               <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto text-center">
//                 Get started with EduLearn in just three simple steps.
//               </p>
//               <div className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-8">
//                 <div className="flex flex-col items-center">
//                   <img
//                     src="https://images.unsplash.com/photo-1517430816045-df4b7de2f421?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
//                     alt="Sign up illustration"
//                     className="h-40 w-40 rounded-full shadow-lg"
//                   />
//                   <h3 className="mt-6 text-lg font-medium text-gray-900">Step 1: Sign Up</h3>
//                   <p className="mt-2 text-base text-gray-500 text-center">Create an account and set up your profile.</p>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <img
//                     src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
//                     alt="Choose course illustration"
//                     className="h-40 w-40 rounded-full shadow-lg"
//                   />
//                   <h3 className="mt-6 text-lg font-medium text-gray-900">Step 2: Choose a Course</h3>
//                   <p className="mt-2 text-base text-gray-500 text-center">Explore courses and select the one that suits you best.</p>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <img
//                     src="https://images.unsplash.com/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
//                     alt="Start learning illustration"
//                     className="h-40 w-40 rounded-full shadow-lg"
//                   />
//                   <h3 className="mt-6 text-lg font-medium text-gray-900">Step 3: Start Learning</h3>
//                   <p className="mt-2 text-base text-gray-500 text-center">Begin your learning journey with our top instructors.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="relative mt-8">
//             <div className="absolute inset-0">
//               <img
//                 className="w-full h-full object-cover"
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
//                 alt="Students learning"
//               />
//               <div className="absolute inset-0 bg-lightBlue-600 mix-blend-multiply" />
//             </div>
//             <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
//               <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Learn at your own pace</h2>
//               <p className="mt-6 max-w-3xl text-xl text-lightBlue-100">
//                 Study anytime, anywhere, with access to world-class educational content.
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default HomePage;















// import React from 'react';
// import Navbar from './Navbar';
// import { BookOpen, Users, Award } from 'lucide-react';

// function HomePage() {
//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         backgroundColor: '#f8fafc',
//         fontFamily: '"Roboto", sans-serif',
//         color: '#333',
//         margin: 0,
//         padding: 0
//       }}
//     >
//       <Navbar />

//       {/* Hero Section */}
//       <div
//         style={{
//           height: '90vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: '#1e293b',
//           color: 'white',
//           textAlign: 'center',
//           position: 'relative'
//         }}
//       >
//         <div
//           style={{
//             position: 'absolute',
//             inset: 0,
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1506748686215-c25b72e0d28f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4NXwwfDF8c2VhcmNofDJ8fGJlYXV0aWZ1bHx8ZW58MHx8fHwxNjExNzA5MDAw&ixlib=rb-1.2.1&q=80&w=1080')",
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             filter: 'brightness(0.3)',
//             zIndex: 1
//           }}
//         ></div>

//         <div
//           style={{
//             position: 'relative',
//             zIndex: 2,
//             color: 'white',
//             padding: '2rem',
//             maxWidth: '70rem',
//             margin: '0 auto'
//           }}
//         >
//           <h1
//             style={{
//               fontSize: '4rem',
//               fontWeight: '600',
//               marginBottom: '1rem',
//               letterSpacing: '-0.02em'
//             }}
//           >
//             Unlock Your Potential
//           </h1>
//           <p
//             style={{
//               fontSize: '1.5rem',
//               marginBottom: '2rem',
//               color: 'rgba(255, 255, 255, 0.8)'
//             }}
//           >
//             Join millions of learners improving their skills with world-class
//             resources
//           </p>
//           <button
//             style={{
//               padding: '1.25rem 3rem',
//               fontSize: '1.125rem',
//               fontWeight: '600',
//               backgroundColor: '#3b82f6',
//               border: 'none',
//               borderRadius: '0.375rem',
//               color: 'white',
//               cursor: 'pointer',
//               transition: 'background-color 0.3s ease',
//               boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)',
//             }}
//             onMouseEnter={(e) => (e.target.style.backgroundColor = '#2563eb')}
//             onMouseLeave={(e) => (e.target.style.backgroundColor = '#3b82f6')}
//           >
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div
//         style={{
//           paddingTop: '4rem',
//           paddingBottom: '4rem',
//           backgroundColor: '#ffffff',
//           textAlign: 'center'
//         }}
//       >
//         <h2
//           style={{
//             fontSize: '2.5rem',
//             fontWeight: '600',
//             marginBottom: '3rem',
//             color: '#1e293b'
//           }}
//         >
//           Why Choose Us?
//         </h2>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '2rem',
//             padding: '0 2rem'
//           }}
//         >
//           {/* Feature 1 */}
//           <div
//             style={{
//               padding: '2rem',
//               backgroundColor: 'white',
//               borderRadius: '0.5rem',
//               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease-in-out',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center'
//             }}
//             onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
//             onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
//           >
//             <BookOpen style={{ width: '3rem', height: '3rem', color: '#3b82f6' }} />
//             <h3
//               style={{
//                 fontSize: '1.25rem',
//                 fontWeight: '600',
//                 marginTop: '1rem',
//                 color: '#1e293b'
//               }}
//             >
//               Rich Content
//             </h3>
//             <p
//               style={{
//                 fontSize: '1rem',
//                 color: '#4b5563',
//                 marginTop: '1rem',
//                 maxWidth: '280px'
//               }}
//             >
//               Access a wide variety of courses and resources for any skill level.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div
//             style={{
//               padding: '2rem',
//               backgroundColor: 'white',
//               borderRadius: '0.5rem',
//               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease-in-out',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center'
//             }}
//             onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
//             onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
//           >
//             <Users style={{ width: '3rem', height: '3rem', color: '#3b82f6' }} />
//             <h3
//               style={{
//                 fontSize: '1.25rem',
//                 fontWeight: '600',
//                 marginTop: '1rem',
//                 color: '#1e293b'
//               }}
//             >
//               Global Community
//             </h3>
//             <p
//               style={{
//                 fontSize: '1rem',
//                 color: '#4b5563',
//                 marginTop: '1rem',
//                 maxWidth: '280px'
//               }}
//             >
//               Connect and collaborate with learners from around the world.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div
//             style={{
//               padding: '2rem',
//               backgroundColor: 'white',
//               borderRadius: '0.5rem',
//               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease-in-out',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center'
//             }}
//             onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
//             onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
//           >
//             <Award style={{ width: '3rem', height: '3rem', color: '#3b82f6' }} />
//             <h3
//               style={{
//                 fontSize: '1.25rem',
//                 fontWeight: '600',
//                 marginTop: '1rem',
//                 color: '#1e293b'
//               }}
//             >
//               Certifications
//             </h3>
//             <p
//               style={{
//                 fontSize: '1rem',
//                 color: '#4b5563',
//                 marginTop: '1rem',
//                 maxWidth: '280px'
//               }}
//             >
//               Get recognized certifications to showcase your achievements.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action Section */}
//       <div
//         style={{
//           backgroundColor: '#1e293b',
//           color: 'white',
//           padding: '6rem 2rem',
//           textAlign: 'center'
//         }}
//       >
//         <h2
//           style={{
//             fontSize: '2.5rem',
//             fontWeight: '700',
//             marginBottom: '1rem',
//             color: '#ffffff'
//           }}
//         >
//           Ready to take the next step in your learning journey?
//         </h2>
//         <p
//           style={{
//             fontSize: '1.2rem',
//             color: 'rgba(255, 255, 255, 0.8)',
//             marginBottom: '3rem'
//           }}
//         >
//           Start learning with the best resources today.
//         </p>
//         <button
//           style={{
//             padding: '1.25rem 3rem',
//             fontSize: '1.125rem',
//             fontWeight: '600',
//             backgroundColor: '#3b82f6',
//             border: 'none',
//             borderRadius: '0.375rem',
//             color: 'white',
//             cursor: 'pointer',
//             boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)',
//             transition: 'background-color 0.3s ease',
//           }}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = '#2563eb')}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = '#3b82f6')}
//         >
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HomePage;





import React from 'react';
import Navbar from './Navbar';
import { BookOpen, Users, Award } from 'lucide-react';

function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        fontFamily: '"Roboto", sans-serif',
        color: '#333',
        margin: 0,
        padding: 0
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1e293b',
          color: 'white',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506748686215-c25b72e0d28f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4NXwwfDF8c2VhcmNofDJ8fGJlYXV0aWZ1bHx8ZW58MHx8fHwxNjExNzA5MDAw&ixlib=rb-1.2.1&q=80&w=1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
            zIndex: 1
          }}
        ></div>

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            color: 'white',
            padding: '2rem',
            maxWidth: '70rem',
            margin: '0 auto'
          }}
        >
          <h1
            style={{
              fontSize: '4rem',
              fontWeight: '600',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            Unlock Your Potential
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            Join millions of learners improving their skills with world-class
            resources
          </p>
          <button
            style={{
              padding: '1.25rem 3rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              backgroundColor: '#3b82f6',
              border: 'none',
              borderRadius: '0.375rem',
              color: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#2563eb')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#3b82f6')}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div
        style={{
          paddingTop: '4rem',
          paddingBottom: '4rem',
          backgroundColor: '#ffffff',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            marginBottom: '3rem',
            color: '#1e293b'
          }}
        >
          Why Choose Us?
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            padding: '0 2rem'
          }}
        >
          {/* Feature 1 */}
          <div
            style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            <BookOpen style={{ width: '3rem', height: '3rem', color: '#3b82f6' }} />
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginTop: '1rem',
                color: '#1e293b'
              }}
            >
              Rich Content
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#4b5563',
                marginTop: '1rem',
                maxWidth: '280px'
              }}
            >
              Access a wide variety of courses and resources for any skill level.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            <Users style={{ width: '3rem', height: '3rem', color: '#3b82f6' }} />
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginTop: '1rem',
                color: '#1e293b'
              }}
            >
              Global Community
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#4b5563',
                marginTop: '1rem',
                maxWidth: '280px'
              }}
            >
              Connect and collaborate with learners from around the world.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            <Award style={{ width: '3rem', height: '3rem', color: '#3b82f6' }} />
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginTop: '1rem',
                color: '#1e293b'
              }}
            >
              Certifications
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#4b5563',
                marginTop: '1rem',
                maxWidth: '280px'
              }}
            >
              Get recognized certifications to showcase your achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
