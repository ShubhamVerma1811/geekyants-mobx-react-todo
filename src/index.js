import { Provider } from "mobx-react"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import TodoStore from "./stores/TodoStore"

ReactDOM.render(
  <React.StrictMode>
    <Provider TodoStore={TodoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
