import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders the Calender Navigation Title", () => {
  render(<App />);
  const calenderNavigationTitle = screen.getByText(/Calender Navigation/i);
  expect(calenderNavigationTitle).toBeInTheDocument();
});

test("renders the calender view", () => {
  render(<App />);
  //check if some days of the week text is present
  const daysOfTheWeek = screen.getByText(/Sun/i);
  expect(daysOfTheWeek).toBeInTheDocument();
  const monday = screen.getByText(/Mon/i);
  expect(monday).toBeInTheDocument();
});
