import React from 'react';
import { Container } from 'react-bootstrap';
import { UserList } from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <UserList />
    </Container>
  );
}

export default App;
