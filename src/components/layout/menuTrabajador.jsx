import { Link,Routes, Route, Navigate } from "react-router-dom";
import "../../App.css";
<<<<<<< HEAD
=======
import Listado from "../../views/listadoTablas/listadoUsuario";
>>>>>>> estructura-pagina
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
<<<<<<< HEAD
import Listado from "../../views/listadoTablas/listadoUsuario";
import Detalle from "../../views/Detalle/detalle";
import Registro from "../../views/registro/registro";
=======
import Detalle from "../../views/Detalle/detalle"
import Registro from "../../views/registro/registro";
import ListadoProducto from "../../views/Producto/ListadoProducto";
import ListadoIncidencia from "../../views/ListadoIncidencia/ListadoIncidencia";
>>>>>>> estructura-pagina

const LayoutPanelDeControl = () => {
  return (
    <>
<<<<<<< HEAD
      <Navbar className=" py-9 px-20  " bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Nombre de Usuario</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link>
                <Nav.Link>Inicio</Nav.Link>
              </Link>
              <Link>
                <Nav.Link>Categoria</Nav.Link>
              </Link>
              <NavDropdown title="Tickets" id="navbarScrollingDropdown">
                <Link>
                  <NavDropdown.Item>Pendientes</NavDropdown.Item>
                </Link>
                <Link>
                  <NavDropdown.Item>Desarrollo</NavDropdown.Item>
                </Link>
                <Link>
                  <NavDropdown.Item>En Curso</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link>
                <Nav.Link>Reportes</Nav.Link>
              </Link>
              <Link  >
                <Nav.Link >Lista De Clientes</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="min-h-full">
=======
    <Navbar bg="dark" variant="dark" className=" py-9 px-20  " expand="lg">
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
              <NavDropdown title="Reportes" id="navbarScrollingDropdown">
              <Link><NavDropdown.Item >Pendientes</NavDropdown.Item></Link>
              <Link><NavDropdown.Item >Desarrollo</NavDropdown.Item></Link>
              <Link><NavDropdown.Item >En Curso</NavDropdown.Item></Link>
            </NavDropdown>
            <Link><Nav.Link>Lista De Reportes</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <div className="">
>>>>>>> estructura-pagina
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Panel de Control
            </h1>
          </div>
        </header>
      </div>
      <Listado />
<<<<<<< HEAD
      <Detalle />
      <Registro /> 
=======
       <Detalle/>
     <Registro />
     <ListadoProducto />
     <ListadoIncidencia />
     
>>>>>>> estructura-pagina
    </>
  );
};
export default LayoutPanelDeControl;
