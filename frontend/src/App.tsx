import MyTerm from "./view/MyTerm";
import {FaTerminal} from 'react-icons/fa'
import { Card, Row, Col, Container } from "react-bootstrap";
import logo from './assets/logo.svg'
function App() {
  return (
    <Container fluid className="min-vh-100">
      <Row className=" py-5">
        <Col>
          <Card className=" shadow-lg">
            <Card.Header>
              <img src={logo} width="30em" alt="terminal" className="d-inline mx-1"/>{"Web Terminal"}
            </Card.Header>
            <Card.Body className="mx-1">
              <MyTerm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
