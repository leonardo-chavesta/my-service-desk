import { Link, Routes, Route, Navigate, Outlet } from "react-router-dom";

import "../../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Detalle from "../../views/Detalle/detalle";
import ListadoProducto from "../../views/Producto/ListadoProducto";
import ClientesMain from "../../views/listadoTablas/ClientesMain";
import ListadoIncidencia from "../../views/ListadoIncidencia/ListadoIncidencia";

const LayoutPanelDeControl = () => {




  return (
    <>
      <Navbar bg="dark" variant="dark" className=" py-9 px-20  " expand="lg">
        <Container fluid>
          <Navbar.Brand>Nombre de Usuario</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            
              <Nav.Link><Link to='producto'>Categoria Productos</Link></Nav.Link>
              <Nav.Link><Link to='incidencia'>Lista de incidencia</Link></Nav.Link>
              <Nav.Link><Link to='reportes'>Lista De Reportes</Link></Nav.Link>
              <Nav.Link><Link to='registrar'>Crear un Tikect</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Panel de Control
            </h1>
          </div>
        </header>
      </div>

      <div>
    <Outlet />

      </div>
      <Routes>
        <Route path="producto" element={<ListadoProducto />} />
        <Route path="reportes" element={<ClientesMain />} />
        <Route path="incidencia" element={<ListadoIncidencia />} />
        <Route path="registrar" element={<Detalle />} />
      </Routes>
    </>
  );
};
export default LayoutPanelDeControl;
