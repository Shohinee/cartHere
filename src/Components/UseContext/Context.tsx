/** @format */

import { createContext, useState } from "react";
import NavBar from "../Navbar";
import AllProducts from "../products/AllProducts";

const cartCounter = createContext(null);
const Context = () => {
	const [data, setData] = useState(null);
	return (
		<div>
			<cartCounter.Provider value={cartCounter}>
				<NavBar />
				<AllProducts />
			</cartCounter.Provider>
		</div>
	);
};

export default Context;
export { cartCounter };
