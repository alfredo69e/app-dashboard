import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { DashboardApp } from './DashboardApp';

import { store } from './store';

import './index.scss';

import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <DashboardApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
