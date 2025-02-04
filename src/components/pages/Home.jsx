import React, { useState, useEffect } from "react";
import "../Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const images = [   "products/pink-ring.jpg",
    "products/heart-bear.jpg",
    "products/teddy-pendant-green.jpg",];
  
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [current]);


  return (
    <div>
      <div id="hero">
        <video autoPlay muted loop>
          <source src="assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-text">
          <h1>Sparkle with Love, Shine with Passion</h1>
          <p>
            From dazzling jewelry to exquisite accessories, our collection is
            designed to capture the magic of romance and timeless elegance.
          </p>
          <Link to="/products"><button className="shop">SHOP COLLECTION</button></Link>
        </div>
      </div>
      <div className="decor">
        <div className="decor-text">

          <h2>Celebrate Love in Every Sparkle</h2>
            <Link to="/products"><button className="shop">SHOP COLLECTION</button></Link>
        </div>
      </div>
      <div className="home-p" id="home-p1">
        This Valentine’s Day, express your affection with timeless treasures
        that speak from the heart. From radiant jewelry to dazzling accessories,
        Enamoré helps you make every moment unforgettable.
      </div>

      <div className="home-p">
        <h1>Discover Our Valentine’s Exclusives</h1>
        <p>
          Romantic Jewelry – Elegant necklaces, bracelets, and rings to
          symbolize your love.
        </p>
        <p>
          Couple’s Collection – Matching pieces to celebrate your unique bond.
        </p>
        <p>Eternal Gifts – Thoughtful keepsakes that last beyond the season.</p>
      </div>

            {/* Image Slider */}
            <div className="slider">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        {images.map((img, index) => (
          <div key={index} className={index === current ? "slide active" : "slide"}>
            {index === current && <img src={img} alt={`Slide ${index + 1}`} />}
          </div>
        ))}
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};
