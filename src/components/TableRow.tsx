import React from 'react'
import { observer } from 'mobx-react-lite'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { User } from '../api/types'
import posts from '../store/posts'

interface Props {
  user: User
}

export const TableRow = observer(({user}: Props) => {
  return (
    <tr>
      <td>{user.name}</td>
      <OverlayTrigger placement='right' overlay={
        <Tooltip>
          {posts.loading ? (
            <p>Loading info...</p>
          ) : (
            <p>
              Total posts: {posts.postsCount}
            </p> 
          )}
        </Tooltip>
      }>
      <td onMouseEnter={() => posts.fetchUserPosts(user.id)}>{user.email}</td>
      </OverlayTrigger>
      <td>{user.gender}</td>
      <td>{user.status}</td>
    </tr>
  )
})
