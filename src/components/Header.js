import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchMovies } from "../modules/movies";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onSerach = (value) => {
    dispatch(searchMovies(value));
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSerach(value);
    navigate("/search");
    setValue("");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand style={{ fontWeight: "bold" }}>
            <Nav.Link as={Link} to="/" style={{ color: "black" }}>
              MOVIE
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/explore">
                Explore
              </Nav.Link>
              <Nav.Link as={Link} to="/library">
                Library
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={onSubmit}>
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                value={value}
                onChange={onChange}
              />
              <Button type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
