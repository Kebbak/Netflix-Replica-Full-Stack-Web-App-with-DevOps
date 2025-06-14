import React, { useEffect, useState } from 'react';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

export default function HeroBanner({ featured }) {
  const [trailerKey, setTrailerKey] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const backgroundImage = featured?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${featured.backdrop_path}`
    : 'https://assets.nflxext.com/ffe/siteui/vlv3/.../default.jpg';

  useEffect(() => {
    async function fetchTrailer() {
      if (!featured?.id) return;
      const type = featured.media_type === 'tv' ? 'tv' : 'movie';
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${featured.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        const data = await res.json();
        const trailer = data.results.find(
          (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
        );
        if (trailer) setTrailerKey(trailer.key);
      } catch (err) {
        console.error('Failed to fetch trailer:', err);
      }
    }
    fetchTrailer();
  }, [featured]);

  return (
    <section className="relative w-full h-[90vh] text-white overflow-hidden">
      {/* YouTube Trailer */}
      {trailerKey && (
        <iframe
          className="absolute inset-0 w-full h-full z-0"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${trailerKey}`}
          title="Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}

      {/* Background fallback */}
      {!trailerKey && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-10 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          {featured?.title || featured?.name || 'Featured Title'}
        </h1>
        <p className="text-lg sm:text-xl mb-6 line-clamp-3">{featured?.overview}</p>
        <div className="flex gap-4">
          <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-300 transition">
            ▶ Play
          </button>
          <button className="bg-gray-700 text-white font-semibold px-6 py-2 rounded hover:bg-gray-600 transition">
            More Info
          </button>
        </div>
      </div>

      {/* Bell Icon at Bottom Right */}
      {trailerKey && (
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-6 right-6 z-30 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition"
          aria-label={isMuted ? 'Unmute trailer' : 'Mute trailer'}
        >
          {isMuted ? (
            <SpeakerXMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <SpeakerWaveIcon className="w-6 h-6 text-white" />
          )}
        </button>
      )}
    </section>
  );
}
