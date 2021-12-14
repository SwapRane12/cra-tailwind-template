import { render, screen } from '@testing-library/react'
import App from './App'

test('renders react tailwind starter', () => {
  render(<App />)
  const linkElement = screen.getByText(/React Tailwindcss Starter/i)
  expect(linkElement).toBeInTheDocument()
})
