/** @format */

import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { decrement } from "../../slices/counterSlice";

const AllCarts = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const [allCart, setAllCart] = useState<[] | any>([]);
	const [cartProduct, setCartProduct] = useState<[] | any>([]);
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const handleClose = () => {
		// console.log("close");
		setShow(false);
	};
	const handleShow = () => setShow(true);

	useEffect(() => {
		fetch("https://fakestoreapi.com/carts/2")
			.then((res) => res.json())
			.then((res) => {
				setAllCart(res.products);
				getProductDetails(res.products);
			});
	}, []);
	function getProductDetails(id: any[]) {
		id.map((item: any, index: number) =>
			fetch(`https://fakestoreapi.com/products/${item.productId}`)
				.then((res) => res.json())
				.then((json) => {
					setCartProduct((prev: any) => [...prev, json]);
				})
		);
	}
	const removeToCartCountFunction = (id: number) => {
		if (count > 0) {
			fetch(`https://fakestoreapi.com/carts/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((json) => {
					dispatch(decrement());
					console.log(json);
				});
		} else {
			alert("There are no items in the Cart");
		}
	};
	return (
		<div className="AllProducts">
			{" "}
			//problem there alert +modal show
			{cartProduct.map((item: any, index: number) => (
				<>
					<div
						className="card shadow-lg p-3 mb-5 bg-white rounded"
						key={index}
						style={{ width: "18rem" }}
						onClick={handleShow}>
						<img src={item.image} className="card-img-top" alt="..." />
						<div className="card-body">
							<p>{item.price}</p>
							<Button
								type="button"
								variant="outline-info"
								onClick={() => removeToCartCountFunction(item.id)}>
								Remove
							</Button>
						</div>
					</div>
					<Modal show={show} onHide={handleClose} key={index}>
						<Modal.Header closeButton>
							<Modal.Title>Modal heading</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Woohoo, you are reading this text in a modal!
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>
				</>
			))}
		</div>
	);
};
// () => dispatch(decrement())
export default AllCarts;
