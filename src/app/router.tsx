// src/app/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Biblioteca from '../pages/Biblioteca';
import Home from '../pages/Home';
import Recurso from '../pages/Recurso';
import Proyectos from '../pages/Proyectos';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import NotFound from '../pages/NotFound';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // layout con <Outlet />
    children: [
      { index: true, element: <Home /> },
      { path: 'biblioteca', element: <Biblioteca /> },
      { path: 'recurso/:id', element: <Recurso /> },
      { path: 'proyectos', element: <Proyectos /> },
      { path: 'acerca', element: <Acerca /> },
      { path: 'contacto', element: <Contacto /> },
      { path: '*', element: <NotFound /> }, 

    ],
  },
]);
