import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Home from './Home'
import { useRouter } from 'next/navigation'

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

  it('test description', () => {
    const text = screen.getByTestId('desc')
    expect(text.textContent).toMatch(/description/)
  })
})

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

test('test navigation to another route', () => {
  const mockPush = jest.fn()

  // @ts-ignore
  useRouter.mockReturnValue({
    push: mockPush,
  })

  render(<Home />)

  const button = screen.getByRole('button')
  fireEvent.click(button)

  expect(mockPush).toHaveBeenCalledWith('myroute')
})

test('test navigation to "myroute" when button is clicked', () => {
  const mockPush = jest.fn()

  const useRouterMock = jest
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    .spyOn(require('next/navigation'), 'useRouter')
    .mockReturnValue({ push: mockPush })

  const { getByText } = render(<Home />)
  fireEvent.click(getByText('Navigate to myroute'))

  expect(mockPush).toHaveBeenCalledWith('myroute')

  useRouterMock.mockRestore()
})
