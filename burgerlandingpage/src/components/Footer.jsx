import React, { useEffect, useState } from 'react';
import dataBurger from '../server/data';
import '../styles/Footer.css';

export const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    setFooter(dataBurger[0].footer);
  }, []);

  if (!footer) return null;

  return (
    <footer className="footer">

      {/* Company Name */}
      <div className="footer-section">
        <h3>{footer.company}</h3>
      </div>

      {/* Links */}
      <div className="footer-section">
        <h4>Links</h4>
        <ul>
          <li><a href={footer.links.about}>About</a></li>
          <li><a href={footer.links.contact}>Contact</a></li>
          <li><a href={footer.links.careers}>Careers</a></li>
          <li><a href={footer.links.privacy}>Privacy Policy</a></li>
        </ul>
      </div>

      {/* Socials */}
      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li><a href={footer.socials.instagram} target="_blank">Instagram</a></li>
          <li><a href={footer.socials.facebook} target="_blank">Facebook</a></li>
          <li><a href={footer.socials.tiktok} target="_blank">TikTok</a></li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>{footer.copyright}</p>
      </div>

    </footer>
  );
};
