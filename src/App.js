import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";
import Product from "./components/dashboard/product";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<Dashboard />}>
					<Route path="/product" element={<Product />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
