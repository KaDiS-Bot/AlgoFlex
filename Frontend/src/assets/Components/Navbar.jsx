// import React, { useState } from "react";

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="relative">
//       {/* Sidebar */}
//       <div
//         className={`lg:flex lg:flex-col lg:w-64 bg-gray-800 text-white fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-700">
//           <h2 className="text-lg font-semibold">Dashboard</h2>
//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="lg:hidden text-white"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               x="0px"
//               y="0px"
//               width="24"
//               height="24"
//               viewBox="0 0 48 48"
//             >
//               <path d="M 12 6.9863281 C 9.256343 6.9863281 7 9.2426712 7 11.986328 C 7 14.729985 9.256343 16.986328 12 16.986328 L 36 16.986328 C 38.743657 16.986328 41 14.729985 41 11.986328 C 41 9.2426712 38.743657 6.9863281 36 6.9863281 L 12 6.9863281 z M 12 9.9863281 L 36 9.9863281 C 37.122343 9.9863281 38 10.863985 38 11.986328 C 38 13.108671 37.122343 13.986328 36 13.986328 L 12 13.986328 C 10.877657 13.986328 10 13.108671 10 11.986328 C 10 10.863985 10.877657 9.9863281 12 9.9863281 z M 12 18.986328 C 9.256343 18.986328 7 21.242671 7 23.986328 C 7 26.729985 9.256343 28.986328 12 28.986328 L 36 28.986328 C 38.743657 28.986328 41 26.729985 41 23.986328 C 41 21.242671 38.743657 18.986328 36 18.986328 L 12 18.986328 z M 12 21.986328 L 36 21.986328 C 37.122343 21.986328 38 22.863985 38 23.986328 C 38 25.108671 37.122343 25.986328 36 25.986328 L 12 25.986328 C 10.877657 25.986328 10 25.108671 10 23.986328 C 10 22.863985 10.877657 21.986328 12 21.986328 z M 12 30.986328 C 9.256343 30.986328 7 33.242671 7 35.986328 C 7 38.729985 9.256343 40.986328 12 40.986328 L 36 40.986328 C 38.743657 40.986328 41 38.729985 41 35.986328 C 41 33.242671 38.743657 30.986328 36 30.986328 L 12 30.986328 z M 12 33.986328 L 36 33.986328 C 37.122343 33.986328 38 34.863985 38 35.986328 C 38 37.108671 37.122343 37.986328 36 37.986328 L 12 37.986328 C 10.877657 37.986328 10 37.108671 10 35.986328 C 10 34.863985 10.877657 33.986328 12 33.986328 z"></path>
//             </svg>
//           </button>
//         </div>
//         {/* Sidebar Links */}
//         <ul className="flex flex-col p-4 space-y-2">
//           <li>
//             <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">
//               Settings
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">
//               Profile
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Main content */}
//       <div className="lg:ml-64 p-4">
//         {/* Burger Menu Icon */}
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="lg:hidden text-white bg-orange-500 p-2 rounded-md"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             x="0px"
//             y="0px"
//             width="24"
//             height="24"
//             viewBox="0 0 48 48"
//           >
//             <path d="M 12 6.9863281 C 9.256343 6.9863281 7 9.2426712 7 11.986328 C 7 14.729985 9.256343 16.986328 12 16.986328 L 36 16.986328 C 38.743657 16.986328 41 14.729985 41 11.986328 C 41 9.2426712 38.743657 6.9863281 36 6.9863281 L 12 6.9863281 z M 12 9.9863281 L 36 9.9863281 C 37.122343 9.9863281 38 10.863985 38 11.986328 C 38 13.108671 37.122343 13.986328 36 13.986328 L 12 13.986328 C 10.877657 13.986328 10 13.108671 10 11.986328 C 10 10.863985 10.877657 9.9863281 12 9.9863281 z M 12 18.986328 C 9.256343 18.986328 7 21.242671 7 23.986328 C 7 26.729985 9.256343 28.986328 12 28.986328 L 36 28.986328 C 38.743657 28.986328 41 26.729985 41 23.986328 C 41 21.242671 38.743657 18.986328 36 18.986328 L 12 18.986328 z M 12 21.986328 L 36 21.986328 C 37.122343 21.986328 38 22.863985 38 23.986328 C 38 25.108671 37.122343 25.986328 36 25.986328 L 12 25.986328 C 10.877657 25.986328 10 25.108671 10 23.986328 C 10 22.863985 10.877657 21.986328 12 21.986328 z M 12 30.986328 C 9.256343 30.986328 7 33.242671 7 35.986328 C 7 38.729985 9.256343 40.986328 12 40.986328 L 36 40.986328 C 38.743657 40.986328 41 38.729985 41 35.986328 C 41 33.242671 38.743657 30.986328 36 30.986328 L 12 30.986328 z M 12 33.986328 L 36 33.986328 C 37.122343 33.986328 38 34.863985 38 35.986328 C 38 37.108671 37.122343 37.986328 36 37.986328 L 12 37.986328 C 10.877657 37.986328 10 37.108671 10 35.986328 C 10 34.863985 10.877657 33.986328 12 33.986328 z"></path>
//           </svg>
//         </button>

//         {/* Main Content Here */}
//         <div>
//           <h1 className="text-3xl">Welcome to the Dashboard</h1>
//           <p>This is the main content area.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`lg:flex lg:flex-col lg:w-64 bg-gray-800 text-white fixed top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path d="M 12 6.9863281 C 9.256343 6.9863281 7 9.2426712 7 11.986328 C 7 14.729985 9.256343 16.986328 12 16.986328 L 36 16.986328 C 38.743657 16.986328 41 14.729985 41 11.986328 C 41 9.2426712 38.743657 6.9863281 36 6.9863281 L 12 6.9863281 z M 12 9.9863281 L 36 9.9863281 C 37.122343 9.9863281 38 10.863985 38 11.986328 C 38 13.108671 37.122343 13.986328 36 13.986328 L 12 13.986328 C 10.877657 13.986328 10 13.108671 10 11.986328 C 10 10.863985 10.877657 9.9863281 12 9.9863281 z M 12 18.986328 C 9.256343 18.986328 7 21.242671 7 23.986328 C 7 26.729985 9.256343 28.986328 12 28.986328 L 36 28.986328 C 38.743657 28.986328 41 26.729985 41 23.986328 C 41 21.242671 38.743657 18.986328 36 18.986328 L 12 18.986328 z M 12 21.986328 L 36 21.986328 C 37.122343 21.986328 38 22.863985 38 23.986328 C 38 25.108671 37.122343 25.986328 36 25.986328 L 12 25.986328 C 10.877657 25.986328 10 25.108671 10 23.986328 C 10 22.863985 10.877657 21.986328 12 21.986328 z M 12 30.986328 C 9.256343 30.986328 7 33.242671 7 35.986328 C 7 38.729985 9.256343 40.986328 12 40.986328 L 36 40.986328 C 38.743657 40.986328 41 38.729985 41 35.986328 C 41 33.242671 38.743657 30.986328 36 30.986328 L 12 30.986328 z M 12 33.986328 L 36 33.986328 C 37.122343 33.986328 38 34.863985 38 35.986328 C 38 37.108671 37.122343 37.986328 36 37.986328 L 12 37.986328 C 10.877657 37.986328 10 37.108671 10 35.986328 C 10 34.863985 10.877657 33.986328 12 33.986328 z"></path>
            </svg>
          </button>
        </div>
        {/* Sidebar Links */}
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-700 px-2 py-1 rounded">
              Profile
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="lg:ml-64 p-4">
        {/* Burger Menu Icon */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden text-white bg-orange-500 p-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path d="M 12 6.9863281 C 9.256343 6.9863281 7 9.2426712 7 11.986328 C 7 14.729985 9.256343 16.986328 12 16.986328 L 36 16.986328 C 38.743657 16.986328 41 14.729985 41 11.986328 C 41 9.2426712 38.743657 6.9863281 36 6.9863281 L 12 6.9863281 z M 12 9.9863281 L 36 9.9863281 C 37.122343 9.9863281 38 10.863985 38 11.986328 C 38 13.108671 37.122343 13.986328 36 13.986328 L 12 13.986328 C 10.877657 13.986328 10 13.108671 10 11.986328 C 10 10.863985 10.877657 9.9863281 12 9.9863281 z M 12 18.986328 C 9.256343 18.986328 7 21.242671 7 23.986328 C 7 26.729985 9.256343 28.986328 12 28.986328 L 36 28.986328 C 38.743657 28.986328 41 26.729985 41 23.986328 C 41 21.242671 38.743657 18.986328 36 18.986328 L 12 18.986328 z M 12 21.986328 L 36 21.986328 C 37.122343 21.986328 38 22.863985 38 23.986328 C 38 25.108671 37.122343 25.986328 36 25.986328 L 12 25.986328 C 10.877657 25.986328 10 25.108671 10 23.986328 C 10 22.863985 10.877657 21.986328 12 21.986328 z M 12 30.986328 C 9.256343 30.986328 7 33.242671 7 35.986328 C 7 38.729985 9.256343 40.986328 12 40.986328 L 36 40.986328 C 38.743657 40.986328 41 38.729985 41 35.986328 C 41 33.242671 38.743657 30.986328 36 30.986328 L 12 30.986328 z M 12 33.986328 L 36 33.986328 C 37.122343 33.986328 38 34.863985 38 35.986328 C 38 37.108671 37.122343 37.986328 36 37.986328 L 12 37.986328 C 10.877657 37.986328 10 37.108671 10 35.986328 C 10 34.863985 10.877657 33.986328 12 33.986328 z"></path>
          </svg>
        </button>

        {/* Dashboard Content */}
        <h1 className="text-4xl font-bold mb-6">Welcome to your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Total Sales</h2>
            <p className="text-xl">$34,235</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Users</h2>
            <p className="text-xl">1,238</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Orders</h2>
            <p className="text-xl">978</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
