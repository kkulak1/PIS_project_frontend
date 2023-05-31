import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import RouteCreator from './RouteCreator.jsx'
import { 
  textRoot, 
  logIn, 
  backendAddress
} from './utils/pathutils'
import { theme } from './theme'


import LogInPage from './pages/loginpage/LogInPage';


let routeCreator = new RouteCreator(
  backendAddress,
  <Navigate to={logIn}/>
)

const router = createBrowserRouter(
  [{
    path: textRoot,
    element: (
      <ThemeProvider theme={theme}>
        <Outlet/>
      </ThemeProvider>
    ),
    children: [
      routeCreator.createRoute(textRoot, <Navigate to={logIn}/>),
      routeCreator.createRoute(logIn, <LogInPage/>),
    ]
  }]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

