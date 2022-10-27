
import { Card, Row, Col, Button , Form} from "react-bootstrap";
import ReactTable from "../../components/ReactTable/ReactTable";
import { useEffect , useState} from "react";
import * as ApisServer from '../../services/apis/ApisServer'


const ListadoIncidencia = () => {


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
      Header: "Producto",
      accessor: "producto.nombre",
    },
    {
      Header: "Tecnico Asignado",
      accessor: "tecnico.nombre"
    },
    {
        Header: "Fecha generada Incidencia",
        accessor: "fechaReporte",
        Cell: ({ row }) => (new Date(row.original?.fechaReporte).toLocaleDateString()),
    },
    {
        Header: "Estado",
        accessor: "prioridad.estado",
    },
    
  ];

  // const listadoTablas = [
  //   {
  //     name: "Juan",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "18 - 02 - 20",
  //     fechadeIncidencia: "28 - 05 - 21",
  //     estado:'Pendiente'
  //   },
  //   {
  //     name: "Luis",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "28 - 05 - 21",
  //     fechadeIncidencia: "28 - 05 - 21",
  //     estado:'Pendiente'
  //   },
  //   {
  //     name: "David",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "20 - 02 - 20",
  //     fechadeIncidencia: "28 - 05 - 21",
  //     estado:'Pendiente'
  //   },
  //   {
  //     name: "Fabian",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "05 - 01 - 21",
  //     fechadeIncidencia: "28 - 05 - 21",
  //     estado:'Pendiente'
  //   },
  //   {
  //     name: "Jesus",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "15 - 10 - 21",
  //     fechadeIncidencia: "28 - 05 - 21",
  //     estado:'Desarrollo'
  //   },
  //   {
  //     name: "Fabricio",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "19 - 04 - 20",
  //     fechadeIncidencia: "28 - 05 - 21",
  //     estado:'curso'
  //   },
  //   {
  //     name: "Cristhian",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "22 - 11 - 20",
  //     fechadeIncidencia: "28 - 05 - 21",
  //     estado:'completo'
  //   },
  //   {
  //     name: "Gabriel",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "10 - 08 - 21",
  //     fechadeIncidencia: "28 - 05 - 21",
  //     estado:'Desarollo'
  //   },
  //   {
  //     name: "Gabriel",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "10 - 08 - 21",
  //     fechadeIncidencia: "10 - 08 - 21",
  //     estado:'Desarollo'
  //   },
  //   {
  //     name: "Gabriel",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "10 - 08 - 21",
  //     fechadeIncidencia: "10 - 08 - 21",
  //     estado:'Desarollo'


  //   },
  //   {
  //     name: "Gabriel",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "10 - 08 - 21",
  //     fechadeIncidencia: "10 - 08 - 21",
  //     estado:'curso'
  //   },
  //   {
  //     name: "Gabriel",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "10 - 08 - 21",
  //     fechadeIncidencia: "10 - 08 - 21",
  //     estado:'curso'
  //   },
  //   {
  //     name: "Gabriel",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "10 - 08 - 21",
  //     fechadeIncidencia: "10 - 08 - 21",
  //     estado:'curso'
  //   },

  //   {
  //     name: "Gabriel",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "10 - 08 - 21",
  //     fechadeIncidencia: "10 - 08 - 21",
  //     estado:'curso'
  //   },
  //   {
  //     name: "Gabriel",
  //     descripcion: "impresora con falla",
  //     fechadecreacion: "10 - 08 - 21",
  //     fechadeIncidencia: "10 - 08 - 21",
  //     estado:'curso'
  //   },
  // ];
  return (
    <>
      <Card>
        <Card.Header className="d-flex align-items-center justify-content-between">
          <label className="mb-0 fw-bold text-dark">
            Listado de Incidencia
          </label>
        </Card.Header>
        <Card.Body>
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

export default ListadoIncidencia;
