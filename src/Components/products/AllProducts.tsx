/** @format */

import { useContext, useEffect, useState } from "react";
import "../../App.css";
import { Button } from "react-bootstrap";
import { cartCounter } from "../UseContext/Context";
import { increment } from "../../slices/counterSlice";
import { useDispatch } from "react-redux";
const AllProducts = () => {
	const [allProducts, setAllProducts] = useState([]);
	const dispatch = useDispatch();
	// const [addToCartCount, setAddToCartCount] = useState(0);
	// const { data, setData } = useContext(cartCounter);
	const addToCartCountFunction = (item: any) => {
		let today = new Date();
		console.log(item.id);
		fetch("https://fakestoreapi.com/carts", {
			method: "POST",
			body: JSON.stringify({
				userId: item.id,
				date: "2020 - 02 - 03",
				products: item.products,
				// products: [
				// 	{ productId: 5, quantity: 1 },
				// 	{ productId: 1, quantity: 5 },
				// ],
			}),
		})
			.then((res) => res.json())
			.then((json) => {
				dispatch(increment());
				console.log(json);
			});

		// 1. call the API
		// 2. dispatch action
	};
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => {
				setAllProducts(json);
				console.log(allProducts);
			});
		// .catch((err: any) => console.log(err));
	}, []);
	return (
		<div className="AllProducts">
			{allProducts
				? allProducts.map((item: any, index: number) => (
						<div
							className="card shadow-lg p-3 mb-5 bg-white rounded"
							key={index}
							style={{ width: "18rem" }}>
							<img src={item.image} className="card-img-top" alt="..." />
							<div className="card-body">
								<p>{item.price}</p>
								<Button
									type="button"
									variant="outline-info"
									onClick={() => addToCartCountFunction(item)}>
									Add to Cart
								</Button>
							</div>
						</div>
				  ))
				: null}
		</div>
	);
};

export default AllProducts;
