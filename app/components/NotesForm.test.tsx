import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import NotesApp from './NotesForm'

describe('Testing NotesApp component', () => {
  beforeEach(() => {
    render(<NotesApp />)
  })

  it('renders a title', () => {
    const text = screen.getByText(/Notes App/i)
    expect(text).toBeInTheDocument()
  })

  it('test description', () => {
    const text = screen.getByTestId('desc')
    expect(text).toBeInTheDocument()
  })

  it('render input textbox', () => {
    const textInput = screen.getByPlaceholderText(/Enter a note/i)
    expect(textInput).toBeInTheDocument()
  })

  it('add note button renders', () => {
    const addNoteButton = screen.getByRole('button')
    expect(addNoteButton).toBeInTheDocument()
  })

  it('check add note button disabled', () => {
    const addNoteButton = screen.getByRole('button')
    expect(addNoteButton).toBeDisabled()
  })

  it('fill the input note textbox to make button enabled', () => {
    const textInput = screen.getByPlaceholderText(/Enter a note/i)

    fireEvent.change(textInput, { target: { value: 'Test note 1' } })

    const addNoteButton = screen.getByRole('button')

    expect(addNoteButton).toBeEnabled()
  })

  it('test notes list', () => {
    const textInput = screen.getByPlaceholderText(/Enter a note/i)
    const notesList = screen.getByTestId('noteslist')
    const addNoteButton = screen.getByRole('button')

    expect(notesList.querySelectorAll('li')).toHaveLength(0)

    fireEvent.change(textInput, { target: { value: 'Test note 1' } })
    fireEvent.click(addNoteButton)
    fireEvent.change(textInput, { target: { value: 'Test note 2' } })
    fireEvent.click(addNoteButton)

    expect(notesList.querySelectorAll('li')).toHaveLength(2)
  })
})
