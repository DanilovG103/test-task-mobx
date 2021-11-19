import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Table } from 'react-bootstrap'
import users from '../store/users'
import { TableRow } from './TableRow'

export const UserList = observer(() => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    users.fetchUsers(page)
  },[page])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  },[])

  const scrollHandler = (event: any) => {
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setPage(prev => prev + 1)
    }
  }

  if (!!users.error) {
    return <h1>{users.error}</h1>
  }

  return (
    <Table size='large'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {users.users.map(user => (
        <TableRow user={user} key={user.id}/>
      ))}
      </tbody>
      {users.loading && <h1>Loading...</h1>}
    </Table>  
    )
})
