import React from "react";
import Favorites from "../components/Favorites.jsx";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import RolingFooter from "../components/RolingFooter.jsx";
import Header from "../components/Header.jsx";

export default function FavoritesPage() {
  return (
    <div className="bg-gray-800 h-screen">
      <Header />
      <Navbar />
      <SearchBar />
      <Favorites />
      <RolingFooter />
    </div>
  );
}
