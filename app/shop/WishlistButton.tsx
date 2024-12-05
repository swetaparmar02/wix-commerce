/* eslint-disable prettier/prettier */
"use client";

import { useWishlist } from "../components/WishlistContext";

export default function WishlistButton({ productId }: { productId: string }) {
  const { favorites, toggleFavorite } = useWishlist();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(productId);
      }}
      className="absolute top-2 right-2 text-xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={favorites[productId] ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`h-6 w-6 ${
          favorites[productId] ? "text-red-500" : "text-gray-500"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318C4.318 3.09 7.09.318 10.318.318c1.886 0 3.574.965 4.682 2.428 1.108-1.463 2.796-2.428 4.682-2.428C16.91.318 19.682 3.09 19.682 6.318c0 2.667-2.248 4.962-5.346 7.6L12 16.23l-2.336-2.312C6.566 11.28 4.318 8.985 4.318 6.318z"
        />
      </svg>
    </button>
  );
}
