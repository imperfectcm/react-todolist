import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store2 } from './store2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './features/navbar/Navbar';
import { About } from './features/about/About';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store2}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <section className="bg-image"></section>
          <Navbar />
          <Routes>

            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
