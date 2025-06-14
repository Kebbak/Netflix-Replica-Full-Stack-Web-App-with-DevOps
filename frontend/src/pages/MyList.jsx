// components/MyList.jsx
import MovieCard from '../components/MovieCard';


export default function MyList({ movies }) {
  return (
    <section className="mt-12 max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        My List
      </h2>
      <div className="flex gap-4 overflow-x-auto">
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </section>
  );
}