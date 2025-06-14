
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export default function LanguagesPage() {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      const res = await fetch(`${BASE_URL}/configuration/languages?api_key=${API_KEY}`);
      const data = await res.json();
      setLanguages(data);
    };

    fetchLanguages();
  }, []);

  useEffect(() => {
    if (selectedLanguage) {
      const fetchMovies = async () => {
        const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${selectedLanguage}`);
        const data = await res.json();
        setMovies(data.results);
      };

      fetchMovies();
    }
  }, [selectedLanguage]);

  return (
    <div className="pt-20 px-6 sm:px-12 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Browse by Languages</h1>
      <div className="mb-6">
        <select
          className="bg-gray-800 text-white p-2 rounded"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">Select Language</option>
          {languages.map((lang) => (
            <option key={lang.iso_639_1} value={lang.iso_639_1}>
              {lang.english_name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="group relative cursor-pointer">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <p className="mt-2 text-sm">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
