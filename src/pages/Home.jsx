import React from "react";
import SearchBar from "../components/SearchBar.jsx";
import MoviesList from "../components/MoviesList";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import RolingFooter from "../components/RolingFooter.jsx";

export default function Home() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Header />
      <Navbar />
      <SearchBar />
      <MoviesList />
      <RolingFooter />
    </div>
  );
}
