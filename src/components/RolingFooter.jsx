import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function RolingFooter() {
  const { movies } = useSelector((state) => state.movies);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        // Scrolla 800px åt vänster
        scrollRef.current.scrollBy({
          left: 800,
          behavior: "smooth",
        });

        // Kolla om vi är nära slutet av rullningsområdet
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          // Återställ till början för att skapa en loopande effekt
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [movies]);

  return (
    <div
      className="bg-gray-800 text-white p-5 mt-6 w-full border-t-2 shadow-lg"
      style={{ borderTopColor: "#22cf22" }}
    >
      <h2 className="text-2xl font-bold mb-4">More movies you might enjoy</h2>

      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
        >
          {[...movies, ...movies].map((movie, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 rounded-lg flex-shrink-0"
              style={{ width: "320px", height: "400px" }}
            >
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-72 object-cover rounded-lg mb-2"
                />
                <h3 className="text-xl font-semibold mb-1">
                  {movie.title} ({movie.year})
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
