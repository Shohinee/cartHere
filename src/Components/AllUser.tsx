/** @format */

import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AllUser = () => {
	const [alluser, SetAlluser] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("https://fakestoreapi.com/carts")
			.then((res) => res.json())
			.then((json) => {
				SetAlluser(json);
				console.log(json);
			});
	}, []);
	const deleteItem = (id: number) => {
		fetch(`https://fakestoreapi.com/carts/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((json) => console.log(json));
	};
	const editCart = (id: number) => {
		navigate(`/:${id}`);
	};
	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th colSpan={3}></th>
						<th colSpan={2}>Products</th>
					</tr>
					<tr>
						<th>Product Id</th>
						<th>Quantity</th>
						<th>date</th>
						<th>ProductId</th>
						<th>ProductQuality</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{alluser.length > 0
						? alluser.map((item: any, index: number) => (
								<>
									{/* {console.log(item.products)} */}
									<tr key={index}>
										<td>{item.id}</td>
										<td>{item.userId}</td>
										<td>{item.date}</td>
										{item.products.map((item1: any, index1: number) => (
											<tr key={index1}>
												<td>{item1.productId}</td>
												<td>{item1.quantity}</td>
											</tr>
										))}
										<td></td>
										<td>
											<button type="button" onClick={() => editCart(item.id)}>
												Edit
											</button>
										</td>
										<td>
											<button type="button" onClick={() => deleteItem(item.id)}>
												Delete
											</button>
										</td>
									</tr>
								</>
						  ))
						: null}
				</tbody>
			</Table>

			<button
				onClick={() => {
					navigate("/singleuser");
				}}>
				go
			</button>
		</div>
	);
};

export default AllUser;
