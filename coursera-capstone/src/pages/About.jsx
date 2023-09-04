import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const About = () => {
  return (
    <>
      <h1 className="text-center text-primary m-0 fw-bolder">About Us</h1>
      <Container className="mt-5">
        <Row>
          <Col md={6} lg={7} xl={8}>
            <div>
              <h1 className="fw-bolder">Little Lemon</h1>
              <h3 className="fw-bold">Chicago</h3>
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
  )
}

export default About
