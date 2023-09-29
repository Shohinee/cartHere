/** @format */
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
const Layout = () => {
	return (
		<>
			<NavBar />
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
