import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import RouteCreator from './RouteCreator.jsx'
import { 
  textRoot, 
  logIn, 
  backendAddress,
  registration,
  overview
} from './utils/pathutils'
import { theme } from './theme'


import LogInPage from './pages/loginpage/LogInPage';
import RegistrationPage from './pages/registrationpage/RegistrationPage';
import UserSubjectListPage from './pages/UserSubjectListPage';
import InvertersPage from './pages/InvertersPage';
import OverviewPage from './pages/overviewpage/OverviewPage';



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
      routeCreator.createRoute(registration, <RegistrationPage/>),
      routeCreator.createRoute(overview, <OverviewPage/>),
    ]
  }]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

