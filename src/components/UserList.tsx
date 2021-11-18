import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import users from '../store/users'

export const UserList = observer(() => {

  useEffect(() => {
    users.fetchUsers(1)
  },[])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
      </thead>
      <colgroup span={4}></colgroup>
      {users.users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.gender}</td>
          <td>{user.status}</td>
        </tr>
      ))}
    </table>
  )
})
