import { action, computed, makeObservable, observable } from "mobx"

class TodoStore {
  todos = [
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

  addTodo = (todo) => {
    this.todos.push(todo)
  }

  deleteTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  updateTodo = (id) => {
    const todoToUpdate = this.todos.find((todo) => todo.id === id)

    todoToUpdate.completed = !todoToUpdate.completed
  }

  get todosCount() {
    return this.todos.filter((todo) => !todo.completed).length
  }
}

const myTodos = new TodoStore()

export default myTodos
