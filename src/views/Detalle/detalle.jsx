import form from "react-bootstrap/Form";
import { Row, Col, Form, Card } from "react-bootstrap";
import "../../App.css";
import Button from "react-bootstrap/Button";

const Detalle = () => {
  return (
    <>
      <Row>
        <Col>
          <Card className="mb-1">
            <Card.Header className="d-flex align-items-center justify-content-between">
              <label className="mb-0 fw-bold text-dark">
                Datos Generales
              </label>
            </Card.Header>
            <Card.Body>
              <Row className="g-3">
                <Col xs={12} sm={8} md={8} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>
                        Nombre:
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        name="nombre"
                        type="text"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={9} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>
                        Numero:
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        name="nombre"
                        type="text"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={9} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>
                        Correo:
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        name="nombre"
                        type="text"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={9} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>
                        Prirodad:
                      </Form.Label>
                      <Form.Select >
                        <option value="1">Alto</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={9} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>
                        Tecnico Asignado:
                      </Form.Label>
                      <Form.Select >
                        <option value="1">Jose Martines</option>
                        <option value="2">Abel Palomino</option>
                        <option value="3">Ricardo Mendoza</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={9} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>
                        Estado de Incidencia:
                      </Form.Label>
                      <Form.Select >
                        <option value="1">Pendiente</option>
                        <option value="2">Desarrollo</option>
                        <option value="3">Curso</option>
                        <option value="3">Culminado</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={8} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={10}>
                      <Form.Label>
                        Descripcion:
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        name="nombre"
                        as="textarea"
                        rows={3}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col xs={12} sm={8} md={8} lg={5}>
                  <br />
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Button variant="danger" active size="lg">Generar Incidencia</Button>{' '}
                    </Col>
                  </Row>
                </Col>
          
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Detalle;
