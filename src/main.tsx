import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './ui/views/home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
