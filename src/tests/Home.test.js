import React from 'react';
import { screen } from '@testing-library/react';
import CustomRender from '../components/CustomRender';
import App from '../App';

test('renders learn react link', () => {
  CustomRender(<App />);
  const home = screen.getByRole('heading', { level: 1, name: /Home Page/i})
  expect(home).toBeDefined();
});
