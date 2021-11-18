import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { UserList } from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [page, setPage] = useState(1)

  const scrollHandler = (event: any) => {
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 50){
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  },[])

  return (
    <Container>
      <UserList page={page}/>
    </Container>
  );
}

export default App;
