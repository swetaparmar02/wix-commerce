/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

const FAVORITES_KEY = 'favorite_items';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (id: string) => {
    const updatedFavorites = [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((fav) => fav !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
