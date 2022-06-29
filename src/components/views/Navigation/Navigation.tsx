import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand as={Link} to="/">Waiter.app</Navbar.Brand>
      <Nav.Link as={NavLink} to="/">Home</Nav.Link>
    </Navbar>
  )
}

export default Navigation;