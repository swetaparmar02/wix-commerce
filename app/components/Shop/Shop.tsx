/* eslint-disable prettier/prettier */
"use client";
import React, { useState } from "react";
import { products } from "@wix/stores";
import testIds from "@app/utils/test-ids";
import { WixMediaImage } from "@app/components/Image/WixMediaImage";

const PRODUCTS_PER_PAGE = 3; // Number of products per page

export function Shop({ items }: { items: products.Product[] }) {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Toggle favorite state
    }));
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage); // Update the current page state
  };

  // Get the index range for the products to display based on the current page
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedItems = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / PRODUCTS_PER_PAGE);

  return (
    <div className="mx-auto">
      <div
        className="bg-black text-custom-1 text-center py-4 sm:py-10 sm:py-20 h-[450px] sm:h-[520px]"
        data-testid={testIds.SHOP_PAGE.HEADER}
      >
        <h1 className="uppercase text-3xl sm:text-6xl">Food list</h1>
        <p className="text-sm sm:text-base mx-auto px-8 sm:max-w-[50%] my-10">
          I’m a paragraph. I’m a great space to write about what makes the
          products special and explain how customers can benefit from these
          items.
        </p>
      </div>

      {items.length ? (
        <div
          className="full-w overflow-hidden mx-auto text-center mt-[-200px] sm:mt-[-130px] px-10"
          data-testid={testIds.PRODUCT_LIST.CONTAINER}
        >
          <ul className="grid sm:grid-cols-3 gap-8 grid-flow-row">
            {paginatedItems.map((item) => (
              <li
                key={item._id}
                className="relative"
                data-testid={testIds.PRODUCT_ITEM.CONTAINER}
              >
                <a
                  href={`/product-page/${item.slug}`}
                  data-testid={testIds.PRODUCT_ITEM.PRODUCT_DETAILS_CTA}
                >
                  
                  <div className="h-auto max-w-full">
                    <WixMediaImage
                      media={item.media?.mainMedia?.image?.url}
                      height={560}
                      width={560}
                      alt={item.media?.mainMedia?.image?.altText || "main image"}
                    />
                    {/* Ribbon */}
                    {item.ribbon && (
                      <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs uppercase ribbon ribbon-top-right sale-ribbon">
                        {item.ribbon}
                      </div>
                    )}

                    {/* Heart Icon */}
                    <div
                      className="absolute top-0 right-0 p-2 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent navigation
                        toggleFavorite(item._id);
                      }}
                      data-testid={testIds.SHOP_PAGE.HEART_ICON}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${
                          favorites[item._id] ? "text-red-500" : "text-gray-500"
                        }`}
                        fill={favorites[item._id] ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318C4.318 3.09 7.09.318 10.318.318c1.886 0 3.574.965 4.682 2.428 1.108-1.463 2.796-2.428 4.682-2.428C16.91.318 19.682 3.09 19.682 6.318c0 2.667-2.248 4.962-5.346 7.6L12 16.23l-2.336-2.312C6.566 11.28 4.318 8.985 4.318 6.318z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="p-2 text-left">
                    <span>{item.name}</span>
                    <br />
                    <span className="text-xs">
                      {item.price?.formatted?.discountedPrice &&
                      item.price?.formatted?.discountedPrice !==
                        item.price?.formatted?.price ? (
                        <>
                          <span className="line-through text-gray-500">
                            {item.price.formatted.price}
                          </span>
                          <span className="text-red-500 ml-2">
                            {item.price.formatted.discountedPrice}
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-700">
                          {item.price?.formatted?.price}
                        </span>
                      )}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          <div className="mt-8">
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded-md mr-4"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded-md ml-4"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-borderbox-border max-w-4xl mx-auto">
          No products found. Click{" "}
          <a
            href="https://manage.wix.com/account/site-selector?actionUrl=+https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fstore%2Fproducts%3FreferralInfo%3DHeadless"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500"
          >
            here
          </a>{" "}
          to go to the business dashboard to add products. Once added, they will
          appear here.
        </div>
      )}
    </div>
  );
}





/* eslint-disable prettier/prettier */
// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/router"; // Import useRouter for navigation
// import { products } from "@wix/stores";
// import testIds from "@app/utils/test-ids";
// import { WixMediaImage } from "@app/components/Image/WixMediaImage";

// const PRODUCTS_PER_PAGE = 3; // Number of products per page

// export function Shop({ items }: { items: products.Product[] }) {
//   const [favorites, setFavorites] = useState<Record<string, boolean>>({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const router = useRouter(); // Router hook for navigation

//   const toggleFavorite = (productId: string) => {
//     setFavorites((prev) => {
//       const updatedFavorites = {
//         ...prev,
//         [productId]: !prev[productId], // Toggle favorite state
//       };

//       // If product is added to favorites, navigate to the favorites page
//       if (updatedFavorites[productId]) {
//         router.push(`/shop/favorites?id=${productId}`); // Navigate to favorites page
//       }

//       return updatedFavorites;
//     });
//   };

//   const handlePageChange = (newPage: number) => {
//     setCurrentPage(newPage); // Update the current page state
//   };

//   const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
//   const endIndex = startIndex + PRODUCTS_PER_PAGE;
//   const paginatedItems = items.slice(startIndex, endIndex);
//   const totalPages = Math.ceil(items.length / PRODUCTS_PER_PAGE);

//   return (
//     <div className="mx-auto">
//       {/* Shop Header */}
//       <div
//         className="bg-black text-custom-1 text-center py-4 sm:py-10 sm:py-20 h-[450px] sm:h-[520px]"
//         data-testid={testIds.SHOP_PAGE.HEADER}
//       >
//         <h1 className="uppercase text-3xl sm:text-6xl">Food list</h1>
//         <p className="text-sm sm:text-base mx-auto px-8 sm:max-w-[50%] my-10">
//           I’m a paragraph. I’m a great space to write about what makes the
//           products special and explain how customers can benefit from these
//           items.
//         </p>
//       </div>

//       {/* Product List */}
//       {items.length ? (
//         <div
//           className="full-w overflow-hidden mx-auto text-center mt-[-200px] sm:mt-[-130px] px-10"
//           data-testid={testIds.PRODUCT_LIST.CONTAINER}
//         >
//           <ul className="grid sm:grid-cols-3 gap-8 grid-flow-row">
//             {paginatedItems.map((item) => (
//               <li
//                 key={item._id}
//                 className="relative"
//                 data-testid={testIds.PRODUCT_ITEM.CONTAINER}
//               >
//                 <a
//                   href={`/product-page/${item.slug}`}
//                   data-testid={testIds.PRODUCT_ITEM.PRODUCT_DETAILS_CTA}
//                 >
//                   <div className="h-auto max-w-full">
//                     <WixMediaImage
//                       media={item.media?.mainMedia?.image?.url}
//                       height={560}
//                       width={560}
//                       alt={item.media?.mainMedia?.image?.altText || "main image"}
//                     />
//                     {/* Ribbon */}
//                     {item.ribbon && (
//                       <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs uppercase ribbon ribbon-top-right sale-ribbon">
//                         {item.ribbon}
//                       </div>
//                     )}

//                     {/* Heart Icon */}
//                     <div
//                       className="absolute top-0 right-0 p-2 cursor-pointer"
//                       onClick={(e) => {
//                         e.preventDefault(); // Prevent navigation
//                         toggleFavorite(item._id); // Toggle favorite on heart icon click
//                       }}
//                       data-testid={testIds.SHOP_PAGE.HEART_ICON}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`h-6 w-6 ${
//                           favorites[item._id] ? "text-red-500" : "text-gray-500"
//                         }`}
//                         fill={favorites[item._id] ? "currentColor" : "none"}
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M4.318 6.318C4.318 3.09 7.09.318 10.318.318c1.886 0 3.574.965 4.682 2.428 1.108-1.463 2.796-2.428 4.682-2.428C16.91.318 19.682 3.09 19.682 6.318c0 2.667-2.248 4.962-5.346 7.6L12 16.23l-2.336-2.312C6.566 11.28 4.318 8.985 4.318 6.318z"
//                         />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Product Info */}
//                   <div className="p-2 text-left">
//                     <span>{item.name}</span>
//                     <br />
//                     <span className="text-xs">
//                       {item.price?.formatted?.discountedPrice &&
//                       item.price?.formatted?.discountedPrice !==
//                         item.price?.formatted?.price ? (
//                         <>
//                           <span className="line-through text-gray-500">
//                             {item.price.formatted.price}
//                           </span>
//                           <span className="text-red-500 ml-2">
//                             {item.price.formatted.discountedPrice}
//                           </span>
//                         </>
//                       ) : (
//                         <span className="text-gray-700">
//                           {item.price?.formatted?.price}
//                         </span>
//                       )}
//                     </span>
//                   </div>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Pagination Controls */}
//           <div className="mt-8">
//             <button
//               className="px-4 py-2 bg-gray-300 text-black rounded-md mr-4"
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Previous
//             </button>
//             <span>
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               className="px-4 py-2 bg-gray-300 text-black rounded-md ml-4"
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
//           No products found. Click{" "}
//           <a
//             href="https://manage.wix.com/account/site-selector?actionUrl=+https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fstore%2Fproducts%3FreferralInfo%3DHeadless"
//             target="_blank"
//             rel="noreferrer"
//             className="text-purple-500"
//           >
//             here
//           </a>{" "}
//           to go to the business dashboard to add products. Once added, they will
//           appear here.
//         </div>
//       )}
//     </div>
//   );
// }
