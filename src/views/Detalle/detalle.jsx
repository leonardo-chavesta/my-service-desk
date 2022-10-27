import { Row, Col, Form, Card } from "react-bootstrap";
import "../../App.css";
import Button from "react-bootstrap/Button";
import * as ApisServer from '../../services/apis/ApisServer' 
import { useState , useEffect} from "react";
import { useFormik } from "formik";
import { createIncidencia } from "../../services/apis/ApisServer";
import Select from "react-select";
import { toastme } from 'toastmejs';
import { swalAlertOk , swalAlertInfo} from "../../utils/alertSwa";


const Detalle = () => {


  
  const [tecnico, setTecnico] = useState([])
  const [prioridad, setPrioridad] = useState([])
  const [producto, setProducto] = useState([])

  const dataListTecnico = async () => {
    try {
      setTecnico(await ApisServer.useGetListadoTecnico())
      setPrioridad(await ApisServer.useGetListadoPrioridad())
      setProducto(await ApisServer.useGetlistadoProductos())
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    dataListTecnico();
  },[])


  // datos guardar 
  const formik = useFormik({
    enableReinitialize: true,
    initialValues:{
      nombre:'',

      producto:null,
      tecnico:null,
      prioridad:null,
      correo: '', 
      numero: '',
      reporte:'',
    },
    onSubmit : values => handleSave({...values})
  })

  const handleSave = async (values)  => {
    const valores = {
      nombre:values.nombre,
      producto_Id:values.producto.id,
      tecnico_Id:values.tecnico.id,
      prioridad_Id:values.prioridad.id,
      correo: values.correo, 
      numero: values.numero,
      reporte:values.reporte,
    }
    createIncidencia(valores)
    if(formik.values.nombre === '' ||  formik.values.correo === '' || formik.values.producto === null){
      await swalAlertInfo('Error a llenar todos los campos', 'Mensaje', 'Cerrar');
    }else{
      await swalAlertOk('Guardarde Cambios', 'Mensaje', 'Cerrar');
    }  
  }
   
  useEffect(()=>{
    if(formik.onSubmit === true){
      formik.resetForm()
    }
  },[])


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
              <Form onSubmit={formik.handleSubmit}>
              <Row className="g-3">
                <Col xs={12} sm={8} md={8} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>Nombre:</Form.Label>
                      <Form.Control size="sm" name="nombre" values={formik.values?.nombre} onChange={formik.handleChange} type="text" />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={9} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>Numero: </Form.Label>
                      <Form.Control size="sm" name="numero" values={formik.values?.numero} onChange={formik.handleChange} type="text" />
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
                        name="correo"
                        type="text"
                        values={formik.values?.correo} 
                        onChange={formik.handleChange}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={9} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>
                        Priodad:
                      </Form.Label>
                      <Select
								        name='prioridad'
								        options={prioridad}
                        values={formik.values.prioridad}
								        onChange={(option, target) =>
								        	formik.setFieldValue(target.name, option)
								        }
								        getOptionValue={option => option.id}
								        getOptionLabel={option => option.estado}
								        
							        />        
                     
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={9} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>
                        Tecnico Asignado:
                      </Form.Label>
                      <Select
								        name='tecnico'
								        options={tecnico}
                        values={formik.values.tecnico}
								        onChange={(option, target) =>
								        	formik.setFieldValue(target.name, option)
								        }
								        getOptionValue={option => option.id}
								        getOptionLabel={option => option.nombre}
								        
							        /> 
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={9} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>
                        Producto:
                      </Form.Label>
                      <Select
								        name='producto'
								        options={producto}
                        values={formik.values.producto}
								        onChange={(option, target) =>
								        	formik.setFieldValue(target.name, option)
								        }
								        getOptionValue={option => option.id}
								        getOptionLabel={option => option.nombre}
								        
							        /> 
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={9} lg={5}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={6}>
                      <Form.Label>
                        Estado de Incidencia:
                      </Form.Label>
                      <Select
								        name='producto'
								        options={producto}
                        values={formik.values.producto}
								        onChange={(option, target) =>
								        	formik.setFieldValue(target.name, option)
								        }
								        getOptionValue={option => option.id}
								        getOptionLabel={option => option.nombre}
								        
							        /> 
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={8} md={8} lg={7}>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xxl={10}>
                      <Form.Label>
                        Descripcion:
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        name="reporte"
                        as="textarea"
                        values={formik.values?.reporte} onChange={formik.handleChange}
                        rows={3}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col xs={12} sm={8} md={8} lg={8}>
                  <br />
                  <Row>
                    <Col xs={8} sm={6} md={6} lg={6} xxl={6}>
                      <Button variant="danger" type="submit" active size="lg">Generar Incidencia</Button>{' '}
                    </Col>
                  </Row>
                </Col>
          
              </Row>
            </Form>
            </Card.Body>
            
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Detalle;
