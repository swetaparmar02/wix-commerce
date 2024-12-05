/* eslint-disable prettier/prettier */
import React from "react";
import { WishlistButton} from './WishlistContext';



export function ProductCard({ product }: { product: any }) {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <WishlistButton productId={product.id} />
    </div>
  );
}
