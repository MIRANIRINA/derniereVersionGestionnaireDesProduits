import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Accueil from './pages/Accueil';
import ProductPage from './pages/ProductPages';
import Connexion from './pages/Connexion';
import { Toaster } from 'react-hot-toast';
import Inscription from './pages/Inscription';
import Navbar from './components/NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/produits",
    element: <ProductPage />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/pages",
    element: <Navbar />,
  }
]);

const Main = () => (
  <Provider store={store}>
    <Toaster position="top-right" />
    <RouterProvider router={router} />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
