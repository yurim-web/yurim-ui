/**
 * 포트폴리오 루트 컴포넌트
 *
 * HashRouter를 사용하여 메인 포트폴리오와 경력기술서 페이지를 라우팅합니다.
 * - / : 포트폴리오 메인
 * - /resume : 경력기술서
 */
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import ResumeToggle from './common/button/ResumeToggle';
import ThemeToggle from './common/button/ThemeToggle';
import { SectionProvider } from './contexts/SectionContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Resume from './pages/Resume';
import About from './sections/About';
import Contact from './sections/Contact';
import Header from './sections/Header';
import Main from './sections/Main';
import Portfolio from './sections/Portfolio';
import ProfessionalProjects from './sections/ProfessionalProjects';
import Project from './sections/Project';
import Skills from './sections/Skills';
import WebDesign from './sections/WebDesign';

const PortfolioPage = () => {
  return (
    <ThemeProvider>
      <SectionProvider>
        <div className="App">
          <Header />
          <Main />
          <div id="about">
            <About />
          </div>
          <div id="strength">
            <Skills />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="professional">
            <ProfessionalProjects />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="web_design">
            <WebDesign />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <ResumeToggle />
          <ThemeToggle />
        </div>
      </SectionProvider>
    </ThemeProvider>
  );
};

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
