import React, { useState } from 'react';
import './Header.css';
import { NavLink } from '../../types';

interface HeaderProps {
  navLinks: NavLink[];
  logo?: string;
}

const getPublicAssetUrl = (assetPath: string): string => {
  if (assetPath.startsWith('/public/')) {
    return `${process.env.PUBLIC_URL || ''}${assetPath.slice('/public'.length)}`;
  }
  return assetPath;
};

const Header: React.FC<HeaderProps> = ({ navLinks, logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          {logo ? <img src={getPublicAssetUrl(logo)} alt="Logo" /> : <h1>Tony Huynh</h1>}
        </div>
        
        <button className="header__menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
        </button>
        
        <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;