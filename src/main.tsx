import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { DashboardApp } from './DashboardApp';

import { store } from './store';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import './index.scss';

import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <DashboardApp />
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
)
