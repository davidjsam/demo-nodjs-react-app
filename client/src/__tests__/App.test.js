import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
  test('renders welcome message', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome to Breaking Grounds Network/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders header and footer', () => {
    render(<App />);
    expect(screen.getByText(/Header Placeholder/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer Placeholder/i)).toBeInTheDocument();
  });
});