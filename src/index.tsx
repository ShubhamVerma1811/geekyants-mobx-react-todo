import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "mobx-react"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Posts from "./components/Posts/Posts"
import "./index.css"
import PostStore from "./stores/PostStore"
import TodoStore from "./stores/TodoStore"

ReactDOM.render(
  <React.StrictMode>
    <Provider TodoStore={TodoStore}>
      <App />
      <hr />
      <Posts store={PostStore} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
