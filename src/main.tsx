import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import SiteApp from './site/SiteApp.tsx';

// Nova identidade do portfólio (src/site). O layout antigo continua em src/App.tsx, sem uso.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteApp />
  </StrictMode>,
);
