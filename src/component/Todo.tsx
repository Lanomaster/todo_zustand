//import { useState } from 'react'

import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
//import { TodoType } from '../type/todotype'
import useTodoStore from '../store/todoStore'

export default function Todo() {
  //const [liste, setListe] = useState<TodoType[]>([])
  const todos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  // function addTodo(title: string): void {
  //   setListe((currentListe: TodoType[]) => {
  //     return [...currentListe, { id: crypto.randomUUID(), title, completed: false }]
  //   })
  // }

  // function toggleTodo(id: string, completed: boolean): void {
  //   setListe((currentListe) =>
  //     currentListe.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, completed }
  //       } else {
  //         return item
  //       }
  //     })
  //   )
  // }

  // function deleteTodo(id: string): void {
  //   setListe((currentListe) => currentListe.filter((item) => item.id !== id))
  // }

  function handleAddTodo(title: string): void {
    addTodo(title)
  }

  function handleToggleTodo(id: string, completed: boolean): void {
    toggleTodo(id, completed)
  }

  function handleDeleteTodo(id: string): void {
    deleteTodo(id)
  }

  return (
    <>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList
        liste={todos}
        toggleTodo={handleToggleTodo}
        deleteTodo={handleDeleteTodo}
      />
    </>
  )
}

//export default Todo;
