import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
// Make sure the path is correct

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const categories = [
  { key: 'popular', title: 'Popular Movies' },
  { key: 'top_rated', title: 'Top Rated Movies' },
  { key: 'now_playing', title: 'Now Playing' },
  { key: 'upcoming', title: 'Upcoming Movies' },
];

export default function MoviesPage() {
  const [movies, setMovies] = useState({});
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const fetchCategory = async (category) => {
      const res = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`);
      const data = await res.json();
      return data.results;
    };

    const fetchAll = async () => {
      const results = {};
      for (const cat of categories) {
        results[cat.key] = await fetchCategory(cat.key);
      }
      setMovies(results);
    };

    fetchAll();
  }, []);

  const handleToggleMyList = (movie) => {
    setMyList((prevList) => {
      const exists = prevList.some((m) => m.id === movie.id);
      return exists ? prevList.filter((m) => m.id !== movie.id) : [...prevList, movie];
    });
  };

  const renderRow = (title, items) => (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {items?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isInMyList={myList.some((m) => m.id === movie.id)}
            onToggleMyList={handleToggleMyList}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-20 px-6 sm:px-12 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      {categories.map((cat) => renderRow(cat.title, movies[cat.key]))}
    </div>
  );
}
