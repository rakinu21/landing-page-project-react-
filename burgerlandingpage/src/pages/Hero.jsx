import React, { useEffect, useState } from 'react';
import dataBurger from '../server/data.js';
import '../styles/Hero.css';

export const Hero = () => {
  const [dataItem, setData] = useState(null);

  useEffect(() => {
    setData(dataBurger[0].hero);
  }, []);

  if (!dataItem) return <p>Loading...</p>;

  return (
    <div className='hero-content'>
      {/* Left content: title, subtitle, buttons */}
      <div className='hero-content-left'>
        <h1>{dataItem.title}</h1>
        <p>{dataItem.subtitle}</p>
        <div className='hero-buttons'>
          {dataItem.buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.href}
              className={`btn btn-${btn.type}`} // for styling primary/secondary
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right content: hero image */}
      <div className='hero-content-right'>
        <img src={dataItem.media.src} alt={dataItem.media.alt} />
      </div>
    </div>
  );
};
