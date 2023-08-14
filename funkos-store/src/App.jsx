import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { FunkoView } from './FunkoView';

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/View', element: <FunkoView/> },
  ])
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export {App};
