import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="py-2 px-3 rounded d-flex justify-content-between" bg="primary" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">Waiter.app</Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation;