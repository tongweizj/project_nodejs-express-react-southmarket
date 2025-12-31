import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App.jsx';
import AppProviders from '@/components/AppProviders'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AppProviders>
        <App />
  </AppProviders>
);