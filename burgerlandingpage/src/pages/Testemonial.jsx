import React, { useEffect, useState } from 'react';
import dataBurger from '../server/data.js';
import '../styles/Testimonials.css';

export const Testemonial = () => {
  const [testimonials, setTestimonials] = useState(null);

  useEffect(() => {
    setTestimonials(dataBurger[0].testimonials);
  }, []);

  if (!testimonials) return <p>Loading...</p>;

  return (
    <div className="testimonials-section">

      {/* Title */}
      <h2 className="testimonials-title">{testimonials.title}</h2>

      {/* Cards */}
      <div className="testimonials-wrapper">
        {testimonials.items.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.avatar} alt={item.name} className="avatar" />

            <h3>{item.name}</h3>

            <div className="rating">
              {"⭐".repeat(item.rating)}
            </div>

            <p className="review">"{item.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
