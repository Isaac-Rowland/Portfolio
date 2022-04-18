import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <div className="header">
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/#about-me">About</Nav.Link>
              <Nav.Link href="/#projects">Projects</Nav.Link>
              <Nav.Link href="/#tech-stack">Tech stack</Nav.Link>
              <Nav.Link href="/posts/Resume">Resume</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="https://github.com/Isaac-Rowland"
                className="externalLinks"
              >
                <BsGithub />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/isaacbrowland/"
                className="externalLinks"
              >
                <BsLinkedin />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style jsx>
        {`
          a {
            color: inherit;
            text-decoration: none;
          }
          .header {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
