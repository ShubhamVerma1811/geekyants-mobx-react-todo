import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import { toBeInTheDocument } from "@testing-library/jest-dom"

describe("App Component", () => {
  it("should render the App", () => {
    render(<App />)
    const divElement = screen.getByTestId("app")
    expect(divElement).toBeInTheDocument()
  })

  it("should change input value", () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/enter a todo/i)
    fireEvent.change(inputElement, { target: { value: "Code" } })
    expect(inputElement.value).toBe("Code")
  })

  it("should add todo on Add button click", () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/enter a todo/i)
    const addButton = screen.getByRole("button", { name: "Add Todo" })
    fireEvent.change(inputElement, { target: { value: "Code" } })
    fireEvent.click(addButton)
    const todoItem = screen.getByTestId("div-todo-item-2")
    expect(todoItem).toBeInTheDocument()
  })

  it("should delete the todo on click", () => {
    render(<App />)
    const todoItem = screen.getByTestId("todo-item-2")
    fireEvent.click(todoItem)
    expect(todoItem).not.toBeInTheDocument()
  })
})
