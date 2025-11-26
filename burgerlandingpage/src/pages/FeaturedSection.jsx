import React, { useEffect, useState } from 'react';
import dataBurger from '../server/data.js';
import '../styles/FeaturedSection.css';

export const FeaturedSection = () => {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    setFeatured(dataBurger[0].featuredSection);
  }, []);

  if (!featured) return <p>Loading...</p>;

  return (
    <div className='featured-section'>
      {/* Title & Description */}
      <div className='featured-header'>
        <h2>{featured.title}</h2>
        <p>{featured.description}</p>
      </div>

      {/* Items */}
      <div className='featured-items'>
        {featured.items.map((item) => (
          <div className='featured-card' key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className='price'>${item.price.toFixed(2)}</p>
            <div className='tags'>
              {item.tags.map((tag, index) => (
                <span className='tag' key={index}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
