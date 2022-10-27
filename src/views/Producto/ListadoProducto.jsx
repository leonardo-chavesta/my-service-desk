import { AiFillEye } from "react-icons/ai";
import { Card, Row, Col, Button , Form} from "react-bootstrap";
import ReactTable from "../../components/ReactTable/ReactTable";
import { useEffect, useState } from "react";
import * as ApisServer from '../../services/apis/ApisServer'
import { toastme } from 'toastmejs';
import { swalAlertOk } from "../../utils/alertSwa";

const ListadoProducto = () => {


const [res , setRes] = useState()

const dataList = async () => {
  try {
    setRes (await ApisServer.useGetlistadoProductos())
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  dataList()
},[])


  const COLUMNAS = [
    {
      Header: "Acciones",
      id: "acciones",
      Cell: ({ row }) => (
        <Button variant="outile-primary" title="Ver">
          <AiFillEye />
        </Button>
      ),
      className: "text-center",
    },

    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Descripcion",
      accessor: "descripcion",
    },
  ];

  return (
    <>
      <Card>
        <Card.Header className="d-flex align-items-center justify-content-between">
          <label className="mb-0 fw-bold text-dark">
            Categoria Producto
          </label>
        </Card.Header>
        <Card.Body>
          <br />
          <Row>
            <Col xs={10} md={20}>
              <ReactTable columns={COLUMNAS} data={res || []} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListadoProducto;
