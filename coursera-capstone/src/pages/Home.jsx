import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CustomCard from "../components/CustomCard";
import Review from "../components/Review";
import "./css/Home.css";

const Home = () => {
  return (
    <>
      <h1 className="text-center text-primary bg-white m-0">Home</h1>
      <Row className="m-0 bg-white p-5 d-flex justify-content-center">
        <Col
          md={6}
          className="d-flex flex-column justify-content-between align-items-start"
        >
          <div>
            <h1 className="fw-bolder">Little Lemon</h1>
            <h3 className="fw-bold">Chicago</h3>
          </div>
          <p>
            This is the description about the lemon restaurant who serves good
            food, and nice fresh baked food the lemon restaurant who serves good
            food, and nice fresh baked food.
          </p>
          <p>
            This is the description about the lemon restaurant who serves good
            food, and nice fresh baked food the lemon restaurant who serves good
            food, and nice fresh baked food.
          </p>
          <Button variant="secondary" className="text-white mb-3">
            Reserve Table
          </Button>
        </Col>
        <Col md={6}>
          <img src="/assets/Hero.jpg" width="100%" height="100%" alt="" />
        </Col>
      </Row>
      <div className="d-flex justify-content-evenly m-5 align-items-center">
        <h2 className="fw-bolder">Specials</h2>
        <Button variant="secondary" className="text-white">
          Online Menu
        </Button>
      </div>
      <Container>
        <Row className="row justify-content-center">
          <Col lg sm className="mx-auto text-center">
            <div className="d-flex justify-content-center mb-5">
              <CustomCard />
            </div>
          </Col>
          <Col lg sm className="mx-auto text-center">
            <div className="d-flex justify-content-center mb-5">
              <CustomCard />
            </div>
          </Col>
          <Col lg sm className="mx-auto text-center">
            <div className="d-flex justify-content-center mb-5">
              <CustomCard />
            </div>
          </Col>
        </Row>
      </Container>
      <h1 className="text-center m-5 p-5 bg-white rounded fw-bolder">
        Testimonials
      </h1>
      <Container>
        <Row>
          <Col sm={6} md={6} lg={3}>
            <div className="d-flex justify-content-center">
              <Review />
            </div>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <div className="d-flex justify-content-center ">
              <Review />
            </div>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <div className="d-flex justify-content-center ">
              <Review />
            </div>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <div className="d-flex justify-content-center ">
              <Review />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col md={6} lg={7} xl={8}>
            <div>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
            </div>
            <p>
              This is the description about the lemon restaurant who serves good
              food, and nice fresh baked food the lemon restaurant who serves
              good food, and nice fresh baked food.This is the description about
              the lemon restaurant who serves good food, and nice fresh baked
              food the lemon restaurant who serves good food, and nice fresh
              baked food.
            </p>
          </Col>
          <Col className="position-relative" style={{ minHeight: 550 }}>
            <img
              src="assets/Hero.jpg"
              className="about"
              style={{ top: 0, right: 0, zIndex: 1 }}
            />
            <img
              src="assets/Restaurant.jpg"
              className="about"
              style={{ bottom: 0, left: 0 }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
