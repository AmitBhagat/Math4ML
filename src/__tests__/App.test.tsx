import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '@/src/App';

// Basic smoke test: render App and ensure the Home page title appears
test('renders home page title', async () => {
  render(<App />);
  const title = await screen.findByText(/Math 4 ML/i);
  // Use a generic assertion so the test doesn't depend on jest-dom types being present
  expect(title).toBeTruthy();
});
