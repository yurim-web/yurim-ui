import React, { useState } from 'react';

import GitHubLink from '../common/GitHubLink';
import useHeaderScroll from '../hooks/useHeaderScroll';
import '../styles/header.css';

const Header = () => {
  useHeaderScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header_container">
      <nav className="nav">
        <div className="nav_logo">
          <h1
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            YURIM'S PUBLISHER PORTFOLIO
          </h1>
        </div>
        <div className="nav_right">
          <ul className="nav_menu">
            <li>
              <a href="#about" className="nav_link" onClick={closeMobileMenu}>
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#strength" className="nav_link" onClick={closeMobileMenu}>
                STRENGTH
              </a>
            </li>
            <li className="nav_dropdown">
              <a href="#project" className="nav_link" onClick={closeMobileMenu}>
                PROJECTS
              </a>
              <ul className="nav_dropdown_menu">
                <li>
                  <a href="#professional" className="nav_dropdown_link" onClick={closeMobileMenu}>
                    Professional
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav_dropdown_link" onClick={closeMobileMenu}>
                    Learning
                  </a>
                </li>
                <li>
                  <a href="#web_design" className="nav_dropdown_link" onClick={closeMobileMenu}>
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact" className="nav_link" onClick={closeMobileMenu}>
                CONTACT
              </a>
            </li>
          </ul>
          <div className="header_social">
            <GitHubLink size={24} className="github_link" iconClassName="github_icon" />
          </div>
        </div>
        <button
          className={`hamburger_button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger_line" />
          <span className="hamburger_line" />
          <span className="hamburger_line" />
        </button>
      </nav>
      <div className={`mobile_menu ${isMobileMenuOpen ? 'mobile_menu_open' : ''}`}>
        <ul className="mobile_nav_menu">
          <li>
            <a href="#about" className="mobile_nav_link" onClick={closeMobileMenu}>
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#strength" className="mobile_nav_link" onClick={closeMobileMenu}>
              STRENGTH
            </a>
          </li>
          <li>
            <a href="#project" className="mobile_nav_link" onClick={closeMobileMenu}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile_nav_link" onClick={closeMobileMenu}>
              CONTACT
            </a>
          </li>
          <li className="mobile_social">
            <GitHubLink
              size={28}
              className="mobile_github_link"
              iconClassName="mobile_github_icon"
              onClick={closeMobileMenu}
            >
              GitHub
            </GitHubLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
