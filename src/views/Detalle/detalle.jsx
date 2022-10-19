
import form from "react-bootstrap/Form";
import { Row, Col, Form } from "react-bootstrap";
import "../../App.css"
import Button from 'react-bootstrap/Button';


const Detalle = () => {
  return (
    <>

     
      <Row className="g-3 contenedor " >
        <Col xs={12} sm={4} md={8} lg={6}>
        
          <Row>
            <Col sm={5} md={5} xl={3} xxl={3}>
              <Form.Label> Nombre </Form.Label>
            </Col>
            <Col sm={15} md={8} xl={3} xxl={9}>
              <Form.Control
                size="sm"
               
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <Row>
            <Col sm={5} md={5} xl={5} xxl={4}>
              <Form.Label> Número</Form.Label>
            </Col>
            <Col sm={7} md={7} xl={7} xxl={8}>
              <Form.Control
                size="sm"
                
                
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
          <Form.Label>Correo</Form.Label>
          <Form.Control
            size="sm"
            
           
            type="text"
           

            
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
          <Form.Label>Prioridad</Form.Label>
          <Form.Control
            size="sm"
            type="text"
          
            
          />
        </Col>
        <Col xs={14} sm={8} md={8} lg={6}>
          <Row>
            <Col md={3} xl={3} xxl={3}>
              <Form.Label> Tecnico asignado</Form.Label>
            </Col>
        <Col >
        <Form.Select aria-label="Default select example">
      <option>Hola mundo</option>
      <option value="1">d</option>
      <option value="2">d</option>
      <option value="3">f</option>
    </Form.Select>
    </Col>



            <Col md={8} xl={3} xxl={9}>
                
             
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <Row>
            <Col sm={5} md={3} xl={5} xxl={4}>
              <Form.Label> Descripción </Form.Label>
            </Col>
            <Col sm={7} md={7} xl={7} xxl={8}>
              <Form.Control
                size="sm"
                
                type="text"
              
              />
            <Col>
             <Button variant="primary" size="lg" active>
            Genererar ticket

            </Button>{' '}
            </Col>

            
            </Col>
          </Row>
        </Col>
      </Row>
     
    </>
  );
};
export default Detalle;
