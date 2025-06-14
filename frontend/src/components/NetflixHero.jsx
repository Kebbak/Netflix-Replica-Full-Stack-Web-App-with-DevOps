import React from "react";
import "./NetflixHero.css";

export default function NetflixHero() {
  const fallbackImage = process.env.PUBLIC_URL + "/netflix-collage.jpg";

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85)), url(${fallbackImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-xl sm:text-2xl mb-4">Starts at 33 zł. Cancel anytime.</h2>
        <p className="text-lg sm:text-xl mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-2/3 px-5 py-3 bg-black bg-opacity-70 text-white border border-gray-400 rounded focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded"
          >
            Get Started &gt;
          </button>
        </form>
      </div>
    </div>
  );
}
