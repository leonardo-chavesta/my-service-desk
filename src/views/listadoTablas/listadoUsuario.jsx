import { BsFillArrowDownCircleFill ,BsFillPencilFill } from "react-icons/bs";
import { Card, Row, Col, Button } from "react-bootstrap";
import ReactTable from "../../components/ReactTable/ReactTable";
const Listado = () => {
  const COLUMNAS = [
    {
      Header: 'Acciones',
			id: 'acciones',
			Cell: ({ row }) => (
				<Button
					variant='outile-primary'
					title='Ver'
				>
					<BsFillPencilFill />
				</Button>
			),
			className: 'text-center',
    },
    
    {
      Header: "Nombre",
      accessor: "name",
    },
    {
      Header: "Descripcion",
      accessor: "descripcion",
    },
    {
      Header: "Fecha Creada",
      accessor: "fechadecreacion",
    },
  ];

  const listadoTablas = [
    {
      name: "Juan",
      descripcion: "impresora con falla",
      fechadecreacion: "18 - 02 - 20",
    },
    {
      name: "Luis",
      descripcion: "impresora con falla",
      fechadecreacion: "28 - 05 - 21",
    },
    {
      name: "David",
      descripcion: "impresora con falla",
      fechadecreacion: "20 - 02 - 20",
    },
    {
      name: "Fabian",
      descripcion: "impresora con falla",
      fechadecreacion: "05 - 01 - 21",
    },
    {
      name: "Jesus",
      descripcion: "impresora con falla",
      fechadecreacion: "15 - 10 - 21",
    },
    {
      name: "Fabricio",
      descripcion: "impresora con falla",
      fechadecreacion: "19 - 04 - 20",
    },
    {
      name: "Cristhian",
      descripcion: "impresora con falla",
      fechadecreacion: "22 - 11 - 20",
    },
    {
      name: "Gabriel",
      descripcion: "impresora con falla",
      fechadecreacion: "10 - 08 - 21",
    },
    {
      name: "Gabriel",
      descripcion: "impresora con falla",
      fechadecreacion: "10 - 08 - 21",
    },
    {
      name: "Gabriel",
      descripcion: "impresora con falla",
      fechadecreacion: "10 - 08 - 21",
    },
    {
      name: "Gabriel",
      descripcion: "impresora con falla",
      fechadecreacion: "10 - 08 - 21",
    },
    {
      name: "Gabriel",
      descripcion: "impresora con falla",
      fechadecreacion: "10 - 08 - 21",
    },
    {
      name: "Gabriel",
      descripcion: "impresora con falla",
      fechadecreacion: "10 - 08 - 21",
    },

    {
      name: "Gabriel",
      descripcion: "impresora con falla",
      fechadecreacion: "10 - 08 - 21",
    },
    {
      name: "Gabriel",
      descripcion: "impresora con falla",
      fechadecreacion: "10 - 08 - 21",
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
              <Button type="submit" variant="outline-success">
                + Generar Nuevo Ticket
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={10} md={20}>
              <ReactTable columns={COLUMNAS} data={listadoTablas || []} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Listado;
