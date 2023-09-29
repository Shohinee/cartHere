/** @format */

import { Route, Routes } from "react-router-dom";
import AllUser from "./AllUser";
import Login from "./login";
import SingleUser from "./SingleUser";
import Layout from "./Layout";
import AllProducts from "./products/AllProducts";
import AllCarts from "./products/AllCarts";

const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route path="/login" Component={Login} />
				<Route element={<Layout />}>
					<Route path="/" Component={AllProducts} />
					<Route path="/singleuser" Component={SingleUser} />
					<Route path="/allcart" Component={AllCarts} />
				</Route>
			</Routes>
		</div>
	);
};

export default AppRouter;
