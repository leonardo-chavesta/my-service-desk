import { AiFillEye } from "react-icons/ai";
import { Card, Row, Col, Button , Form} from "react-bootstrap";
import ReactTable from "../../components/ReactTable/ReactTable";

const ListadoProducto = () => {
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
      accessor: "name",
    },
    {
      Header: "Descripcion",
      accessor: "descripcion",
    },
  ];

  const listadoTablas = [
    {
      name: "Samsung",
      descripcion: "Samsung Galaxy A03 Core 6.5 2GB RAM 32GB",
    },
    {
      name: "Samsung",
      descripcion: "Celular Samsung Galaxy A13 6.6 4GB RAM",
    },
    {
      name: "Samsung",
      descripcion: "Celular Galaxy A33 5G 6.4 SM-A336MZKFLTP",
    },
    {
      name: "HP",
      descripcion: "Laptop HP 15.615-dy5010la Corei7 12va G",
    },
    {
      name: "Acer",
      descripcion: "HP Impresora Multifuncional OfficeJet 3830",
    },
    {
      name: "Canon",
      descripcion: "Impresora Multifuncional G4110",
    },
    {
      name: "Epson",
      descripcion: "Impresora Multifuncional L4160 Ecotank",
    },
    {
      name: "Dell",
      descripcion: "Laptop Gamer Acer Nitro 5 15.6 Intel",
    },
    {
      name: "Lenovo",
      descripcion: "Laptop HP 15-dy5000la 15.6 FHD Intel Cor",
    },
    {
      name: "Lenovo",
      descripcion: "Laptop Gaming 15.6GF63 THIN10UC/I5-10500H",
    },
    {
      name: "Lenovo",
      descripcion: "Laptop Dell 15.6 W - CE AMD Ryzen 5 345",
    },
    {
      name: "Lenovo",
      descripcion: "impresora con falla",
    },
    {
      name: "HUAWEI",
      descripcion: "Laptop HP VICTUS 16-d0503la 16.1 Intel C",
    },

    {
      name: "HUAWEI",
      descripcion: "Laptop ASUS Zenbook Duo 14 UX482EGR 14",
    },
    {
      name: "HUAWEI",
      descripcion: "HP Laptop 15-ef2505la 15.6 ",
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
          <Row>
            <Col xs={9} md={5}>
              <Form.Label>Tipo De Producto:</Form.Label>
              <Form.Select>
                <option value="1">LAPTOP</option>
                <option value="2">CELULARES</option>
                <option value="3">IMPRESORAS</option>
              </Form.Select>
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

export default ListadoProducto;
