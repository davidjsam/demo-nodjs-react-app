
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
  test('renders footer with copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText('© 2025 Breaking Grounds Network');
    expect(copyrightText).toBeInTheDocument();
  });

  test('footer has correct styling class', () => {
    const { container } = render(<Footer />);
    const footerElement = container.firstChild;
    expect(footerElement).toHaveClass('footer');
  });
});