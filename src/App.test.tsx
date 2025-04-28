import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  test('renders navbar, welcome message, and footer', () => {
    render(<App />);
    
    // Check NavBar links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    
    // Check main content
    expect(screen.getByText('Welcome to Breaking Grounds Network')).toBeInTheDocument();
    
    // Check Footer
    expect(screen.getByText(/© 2025 Breaking Grounds Network/)).toBeInTheDocument();
  });

  test('components have correct layout structure', () => {
    const { container } = render(<App />);
    
    expect(container.querySelector('nav')).toBeInTheDocument();
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
});

describe('Responsive Layout', () => {
  test('renders correctly at different screen sizes', () => {
    const { container } = render(<App />);
    
    // Desktop
    window.innerWidth = 1200;
    window.dispatchEvent(new Event('resize'));
    expect(container).toMatchSnapshot('desktop');
    
    // Tablet
    window.innerWidth = 800;
    window.dispatchEvent(new Event('resize'));
    expect(container).toMatchSnapshot('tablet');
    
    // Mobile
    window.innerWidth = 375;
    window.dispatchEvent(new Event('resize'));
    expect(container).toMatchSnapshot('mobile');
  });
});