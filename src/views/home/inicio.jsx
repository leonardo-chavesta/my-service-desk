import FondoCenterImg from "../../templates/img/SVFT.png";
import Button from "react-bootstrap/Button";
import "../../App.css";

const home = () => (
  <div className="container_menu">
    <div className="container_inicio">
      <div className="container_title">
        <h2>My</h2>
        <h2>Service Desk</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod
          aliquam eaque, distinctio quisquam praesentium similique animi ipsum.
          Harum consequatur rem natus ratione similique voluptate molestias iure
          eligendi, modi ex!
        </p>
        <Button variant="outline-info">Continuar </Button>{" "}
      </div>
      <div className="container_img">
        <img src={FondoCenterImg} alt="" />
      </div>
    </div>
  </div>
);
export default home;
