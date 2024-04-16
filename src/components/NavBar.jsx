import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/NavBar.css';


function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container id="navbarContainer">
        <Navbar.Brand href="#home" id="title">Santiago Arocha's Portfolio</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="navbarLink">Home</Nav.Link>
            <Nav.Link href="#projects" className="navbarLink">Projects</Nav.Link>
            <Nav.Link href="#skills" className="navbarLink">Skills</Nav.Link>
            <Nav.Link href="#skills" className="navbarLink">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;