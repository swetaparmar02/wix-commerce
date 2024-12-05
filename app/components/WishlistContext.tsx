/* eslint-disable prettier/prettier */
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type WishlistContextType = {
  favorites: Record<string, boolean>;
  toggleFavorite: (productId: string) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <WishlistContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
