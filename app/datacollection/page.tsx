/* eslint-disable prettier/prettier */
// import { fetchSingleCollection } from '@app/lib/dataCollection';

// export default async function SingleDataCollectionPage() {
//   const dataCollectionId = 'Items';
//   const collectionData = await fetchSingleCollection(dataCollectionId);

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Single Data Collection</h1>
      
//       {collectionData ? (
//         <div className="space-y-4">
//           {/* Collection Info */}
//           <div className="bg-gray-100 p-4 rounded-lg shadow">
//             <p className="text-lg">
//               <strong>Collection Data ID:</strong> {collectionData.id}
//             </p>
//             <p className="text-lg">
//               <strong>Display Name:</strong> {collectionData.displayName}
//             </p>
//           </div>

//           {/* Fields Table */}
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h2 className="text-xl font-semibold mb-4">Fields</h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full table-auto border-collapse border border-gray-300">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     {collectionData.fields.map((field, index) => (
//                       <th
//                         key={index}
//                         className="px-6 py-3 border text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
//                       >
//                         {field}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="group hover:bg-gray-50 transition ease-in-out duration-300">
//                     {collectionData.fields.map((field, index) => (
//                       <td
//                         key={index}
//                         className="px-6 py-4 border text-sm text-gray-700 group-hover:text-blue-600"
//                       >
//                         {/* Placeholder content for fields */}
//                         Content for {field}
//                       </td>
//                     ))}
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-red-500">No data available</p>
//       )}
//     </div>
//   );
// }   


// "use client";

// import { useState } from "react";
// import InsertItem from "@app/components/DataCollection/insertItem";

// export default function SingleDataCollectionPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleModalOpen = () => setIsModalOpen(true);
//   const handleModalClose = () => setIsModalOpen(false);

//   return (
//     <div className="p-8">
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Single Data Collection</h1>
//         <button
//           onClick={handleModalOpen}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//         >
//           Create Items
//         </button>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//             <button
//               onClick={handleModalClose}
//               className="text-red-500 float-right text-xl"
//             >
//               &times;
//             </button>
//             <InsertItem onSuccess={handleModalClose} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";
import { fetchSingleCollection } from '@app/lib/dataCollection';
import InsertItem from "@app/components/DataCollection/insertItem";
import { useState, useEffect } from "react";

export default function SingleDataCollectionPage() {
  const dataCollectionId = 'Items';

  const [collectionData, setCollectionData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSingleCollection(dataCollectionId);
        setCollectionData(data);
      } catch (error) {
        console.error("Error fetching collection data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dataCollectionId]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Single Data Collection</h1>
        <button
          onClick={handleModalOpen}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Create Items
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <button
              onClick={handleModalClose}
              className="text-red-500 float-right text-xl"
            >
              &times;
            </button>
            <InsertItem onSuccess={handleModalClose} />
          </div>
        </div>
      )}

      {collectionData ? (
        <div className="space-y-4">
          {/* Collection Info */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg">
              <strong>Collection Data ID:</strong> {collectionData.id}
            </p>
            <p className="text-lg">
              <strong>Display Name:</strong> {collectionData.displayName}
            </p>
          </div>

          {/* Fields Table */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Fields</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    {collectionData.fields.map((field: string, index: number) => (
                      <th
                        key={`header-${index}`}
                        className="px-6 py-3 border text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
                      >
                        {field}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="group hover:bg-gray-50 transition ease-in-out duration-300">
                    {collectionData.fields.map((field: string, index: number) => (
                      <td
                        key={`content-${index}`}
                        className="px-6 py-4 border text-sm text-gray-700 group-hover:text-blue-600"
                      >
                        {/* Placeholder content for fields */}
                        Content for {field}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red-500">No data available</p>
      )}
    </div>
  );
}
