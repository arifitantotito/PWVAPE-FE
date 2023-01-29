import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
	const navigate = useNavigate();

	const tokenCheck = () => {
		const token = localStorage.getItem("token");
		if (!token) navigate("/login");
	};
	const logOut = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};
	useEffect(() => {
		tokenCheck();
	});

	return (
		<div className="grid grid-cols-9">
			<div className="flex flex-col col-span-2 justify-between border-2 h-screen">
				<div className="grid">
					<button onClick={() => navigate("/product")} className="py-5">
						Product
					</button>
					<button className="py-5 border-y-2">Sales</button>
					<button className="py-5 border-b-2">User</button>
				</div>
				<button onClick={logOut} className="py-5 border-y-2">
					Logout
				</button>
			</div>
			<div className="w-max">
				<Outlet />
			</div>
		</div>
	);
}
