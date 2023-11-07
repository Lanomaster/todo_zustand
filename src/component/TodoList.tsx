import useTodoStore from '../store/todoStore'
import { TodoType } from '../type/todotype'

type TodoListProps = {
  toggleTodo: (id: string, completed: boolean) => void
  deleteTodo: (id: string) => void
}

export function TodoList({ toggleTodo, deleteTodo }: TodoListProps) {
  const liste = useTodoStore((state) => state.todos)

  return (
    <ul>
      {liste.map((item) => {
        return (
          <li key={item.id}>
            <input
              type="checkBox"
              checked={item.completed}
              onChange={(e) => toggleTodo(item.id, e.target.checked)}
            />
            {item.title}
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )
}
