// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModelSignal title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModelSignal/i);
    expect(titleElement).toBeInTheDocument();
});
