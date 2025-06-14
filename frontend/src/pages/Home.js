import { useState, useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}`,
  topRated: `/movie/top_rated?api_key=${API_KEY}`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default function Home() {
  const [featured, setFeatured] = useState(null);
  const [continueWatching, setContinueWatching] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3${requests.trending}`);
        if (!res.ok) throw new Error('Failed to fetch featured content');
        const data = await res.json();
        setFeatured(data.results[Math.floor(Math.random() * data.results.length)]);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchContinueWatching = async () => {
      const storedIds = JSON.parse(localStorage.getItem('continueWatching')) || [];
      try {
        const moviePromises = storedIds.map(id =>
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(res => res.json())
        );
        const movies = await Promise.all(moviePromises);
        setContinueWatching(movies);
      } catch (err) {
        console.error('Failed to fetch continue watching movies:', err);
      }
    };

    fetchFeatured();
    fetchContinueWatching();
  }, []);

  if (error) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-red-600 text-xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      {featured && <HeroBanner featured={featured} />}
      {continueWatching.length > 0 && (
        <MovieRow title="Continue Watching for Kebba_k" mockData={continueWatching} />
      )}
      <MovieRow title="Trending Now" fetchUrl={requests.trending} />
      <MovieRow title="Top Rated" fetchUrl={requests.topRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.actionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.comedyMovies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.horrorMovies} />
      <MovieRow title="Romance Movies" fetchUrl={requests.romanceMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.documentaries} />
    </div>
  );
}
