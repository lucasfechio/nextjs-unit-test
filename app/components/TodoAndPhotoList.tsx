'use client'

import { useEffect, useState } from 'react'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

type Photo = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const TodoAndPhotoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data))
  }, [])

  return (
    <div>
      <h1 className="text-2xl">Todos</h1>
      <ul>
        {todos.slice(0, 5).map((todo: Todo) => (
          <li key={todo?.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
      <h1 className="text-2xl mt-2">Photos</h1>
      <ul>
        {photos.slice(0, 5).map((photo: Photo) => (
          <li key={photo?.id}>
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoAndPhotoList
