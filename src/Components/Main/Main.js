import React from 'react'
import { Navbar ,Container} from 'react-bootstrap'

function Main() {
  return (
     <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Main