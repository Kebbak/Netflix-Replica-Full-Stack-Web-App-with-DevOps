// components/PopularNow.jsx
import MovieCard from './MovieCard';

export default function PopularNow({ movies }) {
  return (
    <section className="mt-12 max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        Popular on Netflix
      </h2>
      <div className="flex gap-4 overflow-x-auto">
        {movies.slice(5, 10).map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </section>
  );
}