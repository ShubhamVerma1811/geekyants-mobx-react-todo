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
    <div className='App'>
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

        {TodoStore.todos?.map((todo) => {
          return (
            <div key={todo.id}>
              <div>
                <InputGroup className='my-3'>
                  <InputGroup.Checkbox
                    onChange={() => {
                      TodoStore.updateTodo(todo.id)
                    }}
                  />
                  <span onClick={(e) => TodoStore.deleteTodo(todo.id)}>
                    <FormControl
                      plainText
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
