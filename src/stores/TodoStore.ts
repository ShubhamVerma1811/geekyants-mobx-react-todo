import { action, computed, makeObservable, observable } from "mobx"

export type Todo = {
  id: number
  name: string
  completed: false
}

class TodoStore {
  todos: Array<Todo> = [
    { id: 1, name: "Sample Todo", completed: false },
    { id: 2, name: "Cook", completed: false }
  ]

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      deleteTodo: action,
      updateTodo: action,
      todosCount: computed
    })
  }

  addTodo = (todo: Todo) => {
    this.todos.push(todo)
  }

  deleteTodo = (id: Todo["id"]) => {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  updateTodo = (id: Todo["id"]) => {
    const todoToUpdate  = this.todos.find(
      (todo) => todo.id === id
    )

    //@ts-ignore
    todoToUpdate.completed = !todoToUpdate.completed
  }

  get todosCount() {
    return this.todos.filter((todo) => !todo.completed).length
  }
}

const myTodos = new TodoStore()

export default myTodos
