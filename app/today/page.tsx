// import { useEffect, useState } from 'react';
// import BottomNavbars from '../Bottomnavbar';
// import BottomNavbar from '../Bottomnavbar';

// export default function Home() {
//   const [isClient, setIsClient] = useState(false);

//   // Ensure the client-side logic runs after hydration
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <header className="bg-white shadow-md p-4 flex justify-between items-center">
//         <h1 className="text-lg font-bold">Today</h1>
//         <div className="w-8 h-8 bg-gray-200 rounded-full">
//           {/* Placeholder for Profile Icon */}
//         </div>
//       </header>

//       {/* Content Section */}
//       <main className="p-4 pb-20">
//         {/* Total Sale Section */}
//         <section className="mb-6">
//           <h2 className="text-md font-medium">Total Sale</h2>
//           <div className="mt-2 bg-white p-4 shadow rounded-md">
//             {/* Placeholder for Chart */}
//             <div className="h-40 bg-gray-100 flex items-center justify-center">
//               <p>Chart Placeholder</p>
//             </div>
//           </div>
//         </section>

//         {/* Average Order Value Section */}
//         <section>
//           <h2 className="text-md font-medium">Average Order Value</h2>
//           <div className="mt-2 bg-white p-4 shadow rounded-md">
//             <p className="text-gray-600">
//               You averaged <strong>2,224 steps</strong> a day over the last 7 days.
//             </p>
//             <div
//               className="mt-2 h-40 bg-gray-100 flex items-center justify-center"
//               suppressHydrationWarning
//             >
//               <p>Graph Placeholder</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Bottom Navigation */}
//       {isClient && <BottomNavbar activeTab={''} />}
//     </div>
//   );
// }
