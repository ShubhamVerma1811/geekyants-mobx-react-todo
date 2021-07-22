import { observer } from "mobx-react"
import { useState } from "react"
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup
} from "react-bootstrap"
import "./App.scss"
import TodoStore from "./stores/TodoStore"

const App = observer(() => {
  const [todo, setTodo] = useState("")

  return (
    <div data-testid="app" className='App'>
      <Container>
        <h1 className='title'>My todos</h1>
        <h2 className='title'>Incomplete TODO Count {TodoStore.todosCount}</h2>
        <p className='fa-6'>Click on todos to delete them. Click checkbox to mark as done.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            TodoStore.addTodo({
              id: Math.random(),
              name: todo,
              completed: false
            })
            setTodo("")
          }}>
          <Form.Control
            type='text'
            placeholder='Enter a TODO'
            value={todo}
            required
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button className='my-3' type='submit'>
            Add Todo
          </Button>
        </form>

        {TodoStore.todos?.map((todo,index) => {
          return (
            <div key={todo.id} data-testid={`div-todo-item-${index}`}>
              <div>
                <InputGroup className='my-3 checkbox'>
                  <InputGroup.Checkbox
                    onChange={() => {
                      TodoStore.updateTodo(todo.id)
                    }}
                  />
                  <span
                  data-testid={`todo-item-${index}`}
                    onClick={(e) => TodoStore.deleteTodo(todo.id)}>
                    <FormControl
                      readOnly
                      role='button'
                      defaultValue={todo.name}
                      className={`${
                        todo.completed && "text-decoration-line-through"
                      }`}
                    />
                  </span>
                </InputGroup>
              </div>
            </div>
          )
        })}
      </Container>
    </div>
  )
})

export default App
