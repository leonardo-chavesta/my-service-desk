import { BsFillArrowDownCircleFill, BsFillPencilFill } from "react-icons/bs";
import { Card, Row, Col, Button } from "react-bootstrap";
import ReactTable from "../../components/ReactTable/ReactTable";
import { Link } from "react-router-dom";

import { useEffect , useState} from "react";
import * as ApisServer from '../../services/apis/ApisServer'

const ListadoCliente = () => {

  const [resData, setResData] = useState()

  const dataListIncidencia = async () => {
    try {
      setResData(await ApisServer.useGetListadoCLiente())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    dataListIncidencia()
  },[])

console.log(resData)


  const COLUMNAS = [
    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Reporte",
      accessor: "reporte",
    },
    
  ];

  return (
    <>
      <Card>
        <Card.Header className="d-flex align-items-center justify-content-between">
          <label className="mb-0 fw-bold text-dark">
            Listado de Clientes Reportados
          </label>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={10} md={20}>
             
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={10} md={20}>
              <ReactTable columns={COLUMNAS} data={resData || []} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListadoCliente;
