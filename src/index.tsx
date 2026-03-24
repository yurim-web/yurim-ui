import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/index.css';
import './styles/common.css';
import './styles/header.css';
import './styles/main_section.css';
import './styles/info_section.css';
import './styles/skills.css';
import './styles/project.css';
import './styles/portfolio.css';
import './styles/resume.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
