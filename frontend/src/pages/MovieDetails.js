import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;

      if (!apiKey) {
        setError('Missing API key. Please check your .env file.');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );

        if (!res.ok) throw new Error('Movie not found');

        const data = await res.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <h2 className="text-white text-2xl">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-white text-2xl mb-4">{error}</h2>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl text-white font-bold mb-4">{movie.title}</h1>
      <p className="text-gray-400 text-lg mb-4 max-w-2xl text-center">{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-64 rounded mb-6"
      />
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
