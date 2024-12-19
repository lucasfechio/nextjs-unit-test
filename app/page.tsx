import Home from './components/Home'
import NotesApp from './components/NotesForm'

export default function Landing() {
  return (
    <div className="size-full flex flex-col gap-8 items-center justify-center">
      <Home />
      <NotesApp />
    </div>
  )
}
