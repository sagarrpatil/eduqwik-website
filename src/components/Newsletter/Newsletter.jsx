import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center widths">
            <h2 className="mb-4">Login</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
            </div>
            <br/>
            <div className="subscribe">
         
              <input type="text" placeholder="Password" />
            </div>
            <br/>
            <button className="btn">Login</button>
            <br/><br/>
            <button className="btn">Registration</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
