import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TrendingNow({ movies }) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="bg-black text-white py-12 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
      {movies && movies.length > 0 ? (
        <Slider {...sliderSettings}>
          {movies.map((show, idx) => (
            <div key={show.id || idx} className="px-2">
              <div className="relative group">
                <span
                  className="absolute -left-4 top-4 text-7xl font-extrabold text-white opacity-90 drop-shadow-lg select-none z-20"
                  style={{ WebkitTextStroke: '2px #111' }}
                >
                  {idx + 1}
                </span>
                <Link to="#">
                  <img
                    src={
                      show.poster_path || show.image || show.poster
                        ? `https://image.tmdb.org/t/p/w500${show.poster_path || show.image || show.poster}`
                        : 'https://via.placeholder.com/300x450?text=No+Image'
                    }
                    alt={show.name || show.title}
                    className="rounded-lg shadow-md border border-gray-700 hover:border-red-600 hover:scale-105 transition-transform duration-200 w-full h-[320px] object-cover"
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
                    }}
                  />
                  <h3 className="text-center mt-2 text-base font-semibold truncate">
                    {show.name || show.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-gray-400">Loading trending shows...</p>
      )}
    </div>
  );
}