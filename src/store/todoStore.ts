import { create } from 'zustand'
import { TodoType } from '../type/todotype'

// Standard interface and functions

function toggleTodo(todos: TodoType[], id: string, completed: boolean): TodoType[] {
  return todos.map((item) => (item.id === id ? { ...item, completed } : item))
}

function deleteTodo(todos: TodoType[], id: string): TodoType[] {
  return todos.filter((item) => item.id !== id)
}

type TodoState = {
  todos: TodoType[]
  newTodo: string
  setTodos: (todos: TodoType[]) => void
  addTodo: (title: string) => void
  toggleTodo: (id: string, completed: boolean) => void
  deleteTodo: (id: string) => void
  setNewTodo: (newTodo: string) => void
}

const useTodoStore = create<TodoState>(
  (set): TodoState => ({
    todos: [],
    newTodo: '',
    setTodos: (todos: TodoType[]) =>
      set((state) => ({
        ...state,
        todos,
      })),
    deleteTodo: (id: string) =>
      set((state) => ({
        ...state,
        todos: deleteTodo(state.todos, id),
      })),
    toggleTodo: (id: string, completed: boolean) =>
      set((state) => ({
        ...state,
        todos: toggleTodo(state.todos, id, completed),
      })),
    setNewTodo: (newTodo: string) =>
      set((state) => ({
        ...state,
        newTodo,
      })),
    addTodo: (title: string) =>
      set((state) => ({
        ...state,
        todos: [...state.todos, { id: crypto.randomUUID(), title, completed: false }],
        newTodo: '',
      })),
  })
)

export default useTodoStore
