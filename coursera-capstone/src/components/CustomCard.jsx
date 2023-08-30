import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CustomCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="assets/greek-salad.jpg" />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title style={{ fontSize: "18pt" }} className="fw-bold">
            Greek Salad
          </Card.Title>
          <p className="text-primary fw-bold">$12.99</p>
        </div>
        <Card.Text className="text-start w-100">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <div className="d-flex align-items-start justify-content-start">
          <Button variant="outline-secondary">Order a delivery</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
