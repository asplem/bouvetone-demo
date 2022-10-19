import React from 'react';
import { Routes as ReactRouterRoutes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from './components/MainLayout';
import { Basics } from './components/Basics';
import { Diverse } from './components/Diverse';

const RoutesComponent = () => (
  <ReactRouterRoutes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Navigate to="basics" />} />
      <Route path="basics" index element={<Basics />} />
      <Route path="diverse" index element={<Diverse />} />
    </Route>
  </ReactRouterRoutes>
);

export const Routes = React.memo(RoutesComponent);
