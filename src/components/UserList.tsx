import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import users from '../store/users'
import { Table} from 'react-bootstrap'
import { TableRow } from './TableRow'

interface Props {
  page: number
}

export const UserList = observer(({ page }: Props) => {

  useEffect(() => {
    users.fetchUsers(page)
  },[page])

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
      </thead>
      <colgroup span={4}></colgroup>
      <tbody>
      {users.users.map(user => (
        <TableRow user={user} key={user.id}/>
      ))}
      </tbody>
      {users.loading && <h1>Loading...</h1>}
    </Table>  
    )
})
