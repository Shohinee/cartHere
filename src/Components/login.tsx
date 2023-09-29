/** @format */
import { Button, Form } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const authenticateUser = () => {
		let headers = new Headers();
		headers.append("Content-Type", "application/json");
		let raw = JSON.stringify({ username: "mor_2314", password: "83r5^_" });
		let requestOptions = {
			method: "POST",
			headers: headers,
			body: raw,
		};
		fetch("https://fakestoreapi.com/auth/login", requestOptions)
			.then((res: any) => {
				if (res.status == 200) {
					alert("Login Successful");
					navigate("/");
					return res.json();
				} else {
					alert("Incorrect Username or Password");
				}
			})
			.then((json) => {
				sessionStorage.setItem("token", json.token);

				// console.log(json.token);
			});
	};
	return (
		<div>
			<Form className="loginForm">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Button variant="primary" type="button" onClick={authenticateUser}>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Login;
