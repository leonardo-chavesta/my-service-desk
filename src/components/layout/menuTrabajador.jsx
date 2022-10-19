import { Link, Route,Routes } from "react-router-dom";
import "../../App.css";
import Listado from "../../views/listadoTablas/listadoUsuario";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Detalle from "../../views/Detalle/detalle"

const LayoutPanelDeControl = () => {
  return (
    <>
    <Navbar className=" py-9 px-20  " bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Nombre de Usuario</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link><Nav.Link>Inicio</Nav.Link></Link>
            <Link><Nav.Link >Categoria</Nav.Link></Link>
              <NavDropdown title="Tickets" id="navbarScrollingDropdown">
              <Link><NavDropdown.Item >Pendientes</NavDropdown.Item></Link>
              <Link><NavDropdown.Item >Desarrollo</NavDropdown.Item></Link>
              <Link><NavDropdown.Item >En Curso</NavDropdown.Item></Link>
            </NavDropdown>
            <Link><Nav.Link >Reportes</Nav.Link></Link>
            <Link><Nav.Link>Lista De Clientes</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Panel de Control</h1>
          </div>
        </header>
      </div>
      <Listado />
    </>
  );
};
export default LayoutPanelDeControl;
