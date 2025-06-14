// src/components/Watchlist.js
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import MovieCard from './MovieCard';

export default function Watchlist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/users/me/watchlist').then(res => {
      setMovies(res.data);
    });
  }, []);

  if (!movies.length) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">My Watchlist</h2>
      <div className="flex overflow-x-auto">
        {movies.map(movie => <MovieCard key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
}