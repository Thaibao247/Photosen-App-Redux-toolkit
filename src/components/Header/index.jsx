import React from "react";
import "./styles.scss";
import { Container, Row, Col } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Header(props) {
  return (
    <header className="header">
      <Container fluid>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Link to="/photos" className="header__link header__title">
              Photosen
            </Link>
          </Col>

          <Col xs="auto">
            <div class="header__center ">
              <ul class="menu">
                <li>
                  <NavLink to="/photos">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/photos">Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="/photos">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/photos">About</NavLink>
                </li>
                <li>
                  <NavLink to="/photos">Contact</NavLink>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs="auto">
            <NavLink
              to="/photos"
              className="header__link"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
