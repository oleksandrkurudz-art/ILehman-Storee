import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);

function Favoritess() {
  try {
    const saved = JSON.parse(localStorage.getItem("favorites"));

    if (!Array.isArray(saved)) {
      return [];
    }

    return saved.filter((id) => Number.isInteger(id));
  } catch {
    return [];
  }
}
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(Favoritess);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
