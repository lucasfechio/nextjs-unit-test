import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Home from './Home'

describe('Testing Home component', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders a heading', () => {
    const text = screen.getByText(/Home/i)
    expect(text).toBeInTheDocument()
  })

  it('renders a heading inside h1', () => {
    const text = screen.getByRole('heading', { level: 1 })
    expect(text).toBeInTheDocument()
  })

  it('test description', () => {
    const text = screen.getByTestId('desc')
    expect(text.textContent).toMatch(/description/)
  })
})
