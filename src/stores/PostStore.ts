import {
  action,
  configure,
  flow,
  makeObservable,
  observable,
  runInAction
} from "mobx"

configure({
  enforceActions: "always"
})

class PostStore {
  @observable posts = []
  @observable users = []

  constructor() {
    makeObservable(this)
  }

  @action
  async fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    runInAction(() => {
      this.posts = data
    })
  }

  @flow
  *fetchUser() {
    //@ts-ignore
    const res = yield fetch("https://jsonplaceholder.typicode.com/users")
    //@ts-ignore
    const data = yield res.json()

    this.users = data
  }
}

export default new PostStore()
