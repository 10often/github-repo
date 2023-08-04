import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Main } from '../pages/main';
import { Detail } from '../pages/detail';

export const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/:id',
        element: <Detail />,
      },
    ],
  },
];
