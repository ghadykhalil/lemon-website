import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import CustomCard from '../components/CustomCard'

const Menu = () => {
  return (
    <>
      <h1 className="text-center text-primary m-0 fw-bolder">Menu</h1>
      <Container className="mt-5">
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
    </>
  )
}

export default Menu
