import React from 'react'
import { observer } from 'mobx-react-lite'
import { User } from '../api/types'
import { Popup } from './Popup'
import posts from '../store/posts'

interface Props {
  user: User
}

export const TableRow = observer(({user}: Props) => {
  return (
    <tr>
      <td>{user.name}</td>
      <Popup>
        <td onMouseEnter={() => posts.fetchUserPosts(user.id)}>{user.email}</td>
      </Popup>
      <td>{user.gender}</td>
      <td>{user.status}</td>
    </tr>
  )
})
