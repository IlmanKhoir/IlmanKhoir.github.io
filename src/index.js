import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import FoodPage from './pages/FoodPage'; 
import DestinationPage from './pages/DestinationPage'; 
import NotFoundPage from './pages/NotFoundPage';
import RentPricePage from './pages/RentPricePage';
import ContactPage from './pages/ContactPage';
import FloatingWeatherButton from './components/FloatingButtonWeather';

import './index.css';
import PaymentPage from './pages/PaymentPage';
import WeatherPage from './pages/WeatherPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/food',
    element: <FoodPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/destination',
    element: <DestinationPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/rent',
    element: <RentPricePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/payment',
    element: <PaymentPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/weather-check',
    element: <WeatherPage />,
    errorElement: <NotFoundPage />,
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <FloatingWeatherButton />
    <RouterProvider router={router} />
  </React.StrictMode>
);
