import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button,NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <>
    <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">HairGrow Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="내 정보" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">머리 길이 등록</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">목표 달성일</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">나만의 갤러리</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">회원 정보 수정</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">길이별 종류</Nav.Link>
          <Nav.Link href="#link">펌 종류</Nav.Link>
          <Nav.Link href="#link">염색 종류</Nav.Link>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </header>
    <body>
      <div id="abc">h12312312312i</div>
    </body>
    </>
  );
}

export default App;
