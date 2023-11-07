import { SyntheticEvent, useState } from 'react'
//import useTodoStore from '../store/todoStore'

type TodoFormProps = {
  onAdd: (title: string) => void
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [todo, setTodo] = useState<string>('')
  //const todoStore = useTodoStore();

  function handleSubmit(e: SyntheticEvent): void {
    e.preventDefault()
    if (todo === '') return

    onAdd(todo)

    setTodo('')
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit}
    >
      <label htmlFor="x">To-Do Liste</label>
      <input
        type="text"
        placeholder="Füge ein neues Todo hinzu"
        id="x"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}
