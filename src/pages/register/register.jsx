import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
	const [message, setMessage] = useState("");

	const navigate = useNavigate();
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const key = useRef();

	let onSubmit = async () => {
		try {
			setMessage("");
			let inputUsername = username.current.value;
			let inputEmail = email.current.value;
			let inputPassword = password.current.value;
			let inputKey = key.current.value;
			let invalidPasswordError = {
				message:
					"Password must be minimum of 8 characters and contains a number",
			};
			let emptyFieldError = { message: "Field Must Not Empty" };
			let character = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

			if (
				inputUsername.length === 0 ||
				inputPassword.length === 0 ||
				inputEmail.length === 0 ||
				inputKey.length === 0
			)
				throw emptyFieldError;

			if (inputPassword.length < 8 || !character.test(inputPassword))
				throw invalidPasswordError;

			await axios.post("http://localhost:5010/user/register", {
				username: inputUsername,
				email: inputEmail,
				password: inputPassword,
				key: inputKey,
			});
			navigate("/");
		} catch (error) {
			error.response === undefined
				? setMessage(error.message)
				: setMessage(error.response.data.message);
		}
	};
	return (
		<div>
			<div className="flex justify-center items-center h-screen">
				<div className="w-96 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
					<div className="space-y-6" action="#">
						<h5 className="text-xl font-bold text-gray-900 dark:text-white">
							Register Form
						</h5>
						<div>
							<label
								htmlFor="username"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Username
							</label>
							<input
								ref={username}
								type="text"
								name="username"
								id="username"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="Insert username here"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Email
							</label>
							<input
								ref={email}
								type="email"
								name="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="Insert Email here"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Password
							</label>
							<input
								ref={password}
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="key"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Key
							</label>
							<input
								ref={key}
								type="text"
								name="key"
								id="key"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="Insert key here"
								required
							/>
						</div>
						<div className="text-red-500 text-sm">{message}</div>
						<button
							onClick={onSubmit}
							type="submit"
							className="submit-button w-full text-white pwvape-bg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:pwvape-bg dark:focus:ring-blue-800"
						>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
