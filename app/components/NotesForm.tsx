'use client'

import { ChangeEvent, FormEvent, useState } from 'react'

interface NotesFormProps {
  addNote: (note: string) => void
}

const NotesForm: React.FC<NotesFormProps> = ({ addNote }) => {
  const [note, setNote] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (note.trim()) {
      addNote(note)
      setNote('')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4 mb-4">
      <input
        type="text"
        value={note}
        onChange={handleChange}
        placeholder="Enter a note"
        className="border border-gray-300 rounded-lg px-4 py-2 flex-grow focus:outline-blue-500"
      />
      <button
        type="submit"
        disabled={note === ''}
        className="bg-blue-500 text-white rounded-lg px-4 py-2"
      >
        Add Note
      </button>
    </form>
  )
}

interface NotesListProps {
  notes: string[]
}

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <ul className="space-y-2" data-testid="noteslist">
      {notes.map((note, index) => (
        <li
          key={index}
          className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2"
        >
          {note}
        </li>
      ))}
    </ul>
  )
}

const NotesApp: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([])

  const addNote = (note: string) => {
    setNotes((prevNotes) => [...prevNotes, note])
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-mg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Notes App</h1>
      <p data-testid="desc">Add new notes in the list</p>
      <NotesForm addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  )
}

export default NotesApp
