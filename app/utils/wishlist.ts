/* eslint-disable prettier/prettier */
export const getWishlist = (): string[] => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("wishlist") || "[]");
  };
  
  export const toggleWishlistItem = (productId: string): void => {
    const wishlist = getWishlist();
    if (wishlist.includes(productId)) {
      const updatedWishlist = wishlist.filter((id) => id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      wishlist.push(productId);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };
  
  export const isInWishlist = (productId: string): boolean => {
    return getWishlist().includes(productId);
  };
  