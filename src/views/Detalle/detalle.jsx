import "../../App.css";
import Button from "react-bootstrap/Button";
import { Row, Col, Form } from "react-bootstrap";

const Detalle = () => {
  return (
    <>
      <Row className="g-3">
       
        <Col xs={12} sm={4} md={6} lg={6} xxl={6}>
          <Form.Label>Jefe de Area de Servicio al Administrado</Form.Label>
          <Form.Control size="sm" name="jefeArea" type="text" />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
          <Form.Label>Especialista en Certificaciones</Form.Label>
          <Form.Control size="sm" as='textarea' readOnly />
        </Col>
        <Col xs={12} sm={4} md={6} lg={6} xxl={6}>
          <Form.Label>Jefe de Area de Servicio al Administrado</Form.Label>
          <Form.Control size="sm" name="jefeArea" type="text" />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
          <Form.Label>Especialista en Certificaciones</Form.Label>
          <Form.Control size="sm" as='textarea' readOnly />
        </Col>
        <Col xs={12} sm={4} md={6} lg={6} xxl={6}>
          <Form.Label>Jefe de Area de Servicio al Administrado</Form.Label>
          <Form.Control size="sm" name="jefeArea" type="text" />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
          <Form.Label>Especialista en Certificaciones</Form.Label>
          <Form.Control size="sm" as='textarea' readOnly />
        </Col>
        <Col xs={12} sm={4} md={6} lg={6} xxl={6}>
          <Form.Label>Jefe de Area de Servicio al Administrado</Form.Label>
          <Form.Control size="sm" name="jefeArea" type="text" />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
          <Form.Label>Especialista en Certificaciones</Form.Label>
          <Form.Control size="sm" as='textarea' readOnly />
        </Col>
      </Row>
    </>
  );
};
export default Detalle;
