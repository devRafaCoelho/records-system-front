import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppProvider from './context/AppProvider';
import MainRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root') ?? document.body).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <MainRoutes />
        <ToastContainer autoClose={3000} />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
