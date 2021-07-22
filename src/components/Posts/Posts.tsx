import { observer } from "mobx-react"
import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"

// @ts-ignore
const Posts = observer(({ store }) => {
  useEffect(() => {
    store.fetchUser()
  }, [])

  useEffect(() => {
    store.fetchPosts()
  })

  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          1 of 2
          <div>
            <h3>
              Name of Users fetched from API and stored in MobX store using
              <code>flow</code>
            </h3>
            {/* @ts-ignore */}
            {store.users.map((user) => (
              <li key={user.id}>{user?.name}</li>
            ))}
          </div>
        </Col>
        <Col>
          <div>
            <h3>
              Title of Posts fetched from API and stored in MobX store using
              <code>runInAction</code>
            </h3>
            {/* @ts-ignore */}
            {store.posts.slice(0, 10).map((post) => (
              <li key={post.id}>{post?.title}</li>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
})

export default Posts
