import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Provinsi from "./components/Provinsi";
import Kecamatan from "./components/Kecamatan";
import Desa from "./components/Desa";
import Kota from "./components/Kota";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col lg={3} md={4} sm={12}>
            <Provinsi />
          </Col>
          <Col lg={3} md={4} sm={12}>
            <Kecamatan />
          </Col>
          <Col lg={3} md={4} sm={12}>
            <Desa />
          </Col>
          <Col lg={3} md={4} sm={12}>
            <Kota />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
