import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { FaCalendar } from "react-icons/fa";
import moment from "moment";

const EditorsInsight = () => {
  return (
    <div className="my-4">
      <h4 className="my-3">Editors Insight</h4>
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text>
                <FaCalendar /> <span>{moment().format("ddd-mm-yyyy")}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text>
                <FaCalendar /> <span>{moment().format("ddd-mm-yyyy")}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Title>
              <Card.Text>
                <FaCalendar /> <span>{moment().format("ddd-mm-yyyy")}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorsInsight;
