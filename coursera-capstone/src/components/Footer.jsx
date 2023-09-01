import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container className="mt-5 border-top p-5">
        <Row className="">
          <Col md={12} lg={3} >
            <img src="assets/Restaurant.jpg" width="100%" height="100%" />
          </Col>
          <Col className="mt-5">
            <div className="mt-5">
              <h5>Navigation</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Menu">Menu</Link>
                </li>
                <li>
                  <Link to="/Reservations">Reservations</Link>
                </li>
                <li>
                  <Link to="/Orders">Order Online</Link>
                </li>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="mt-5">
            <div className="mt-5">
              <h5>Contact</h5>
              <ul>
                <li className="text-primary">France Anger</li>
                <li className="text-primary">+864 45156494</li>
                <li className="text-primary">lemon@gmail.com</li>
              </ul>
            </div>
          </Col>
          <Col className="mt-5">
            <div className="mt-5">
              <h5>Social Media Links</h5>
              <ul>
                <li>
                  <Link>Facebook</Link>
                </li>
                <li>
                  <Link>Instagram</Link>
                </li>
                <li>
                  <Link>Twitter</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
