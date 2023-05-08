import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MyDemoAppApp } from './app';

export const MyDemoAppBasic = () => {
  return (
    <MemoryRouter>
      <MyDemoAppApp />
    </MemoryRouter>
  );
};
