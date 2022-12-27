import React from 'react';
import { render, screen } from '@testing-library/react';
import { ParkingApp } from './ParkingApp'; './ParkingApp';

test('renders learn react link', () => {
  render(<ParkingApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
