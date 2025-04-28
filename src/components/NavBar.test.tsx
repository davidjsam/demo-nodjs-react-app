import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

test('renders NavBar with all three links', () => {
  render(<NavBar />);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});