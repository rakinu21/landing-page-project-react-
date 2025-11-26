import React, { useEffect, useState } from 'react';
import dataBurger from '../server/data.js';
import '../styles/Promo.css';

export const Promo = () => {
  const [promo, setPromo] = useState(null);

  useEffect(() => {
    setPromo(dataBurger[0].promo);
  }, []);

  if (!promo || !promo.active) return null; // hides if promo is not active

  return (
    <div className="promo-section">
      <div className="promo-content">
        <h2>{promo.title}</h2>
        <p>{promo.description}</p>
        <a className="promo-btn" href={promo.cta.href}>
          {promo.cta.label}
        </a>
      </div>

      <div className="promo-image">
        <img src={promo.image} alt={promo.title} />
      </div>
    </div>
  );
};
