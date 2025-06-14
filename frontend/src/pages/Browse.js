// Example usage in /src/pages/Browse.js
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import { movies } from './Home'; // or wherever your movies array is

export default function Browse() {
  return (
    <div className="bg-[#141414] min-h-screen">
      <HeroBanner featured={movies[0]} />
      <div className="px-8 mt-8">
        <MovieRow title="Top Picks for You" movies={movies} />
        {/* Add more MovieRow components for other categories */}
      </div>
    </div>
  );
}