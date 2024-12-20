import Home from './components/Home'
import NotesApp from './components/NotesForm'
import TodoAndPhotoList from './components/TodoAndPhotoList'

export default function Landing() {
  return (
    <div className="size-full flex flex-col gap-8 items-center justify-center">
      <Home />
      <NotesApp />
      <TodoAndPhotoList />
    </div>
  )
}
