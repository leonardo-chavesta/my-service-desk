import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import ListadoCliente from "./ListadoCliente";

const ClientesMain = () => {
  const [filtro, setFiltro] = useState({
    filtro: {
      id: 0,
      email: "",
      name: "",
    },
  });

  return (
    <Row>
      <Col lg={11} xl={10} xxl={9}>
        <ListadoCliente  />
      </Col>
    </Row>
  );
};
export default ClientesMain;
