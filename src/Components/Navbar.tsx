/** @format */
import { useContext, useState } from "react";
import "../App.css";
import {
	Button,
	Container,
	Form,
	Nav,
	NavDropdown,
	Navbar,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const NavBar = () => {
	const navigate = useNavigate();
	const count = useSelector((state: RootState) => state.counter.value);
	return (
		<Navbar expand="lg" className="bg-body-tertiary nav">
			<Container fluid>
				<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll>
						<Nav.Link href="#action1">Home</Nav.Link>
						<Nav.Link href="#action2">Link</Nav.Link>
						<NavDropdown title="Link" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Something else here
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#" disabled>
							Link
						</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
					<i className="bi bi-cart" onClick={() => navigate("/allcart")}>
						{count}
					</i>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
