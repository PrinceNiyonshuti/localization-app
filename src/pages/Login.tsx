/** @format */
import { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

function Login() {
	// context data
	const { login, currentUser } = useContext(AuthContext);
	const history = useNavigate();

	// Form data
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = emailRef.current?.value;
		const password = passwordRef.current?.value;

		try {
			await login(`${email}`, `${password}`);
			Swal.fire({
				title: "Logged In",
				icon: "success",
				timer: 2000,
				showConfirmButton: false,
			});
			history("/Dashboard");
		} catch {
			Swal.fire({
				title: "Invalid Credentials",
				text: ``,
				icon: "error",
				timer: 2000,
				showConfirmButton: false,
			});
		}
	};
	return (
		<div className="flex items-center min-h-screen bg-gray-50">
			<div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
				<div className="flex flex-col md:flex-row">
					<div className="h-32 md:h-auto md:w-1/2">
						<img
							className="object-cover w-full h-full"
							src="/bg.jpg"
							alt="Movie App Background"
						/>
					</div>
					<div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
						<div className="w-full">
							<div className="flex justify-center">
								<img
									className="object-cover w-1/4 h-1/4"
									src="/logo.png"
									alt="Movie App Logo"
								/>
							</div>
							<h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
								Login {currentUser && currentUser.email}
							</h1>
							<form onSubmit={handleLogin}>
								<div>
									<label className="block text-sm">Email</label>
									<input
										type="email"
										id="email"
										ref={emailRef}
										className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder="Enter your E-mail"
										required
									/>
								</div>
								<div>
									<label className="block mt-4 text-sm">Password</label>
									<input
										className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder=" **************** "
										type="password"
										id="password"
										ref={passwordRef}
										required
									/>
								</div>
								<button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
									Log in
								</button>
							</form>
							<p className="mt-4">
								Need an account ? &nbsp;
								<Link
									to="Register"
									className="text-sm text-blue-600 hover:underline">
									Register
								</Link>
							</p>
							<hr className="my-8" />

							<div className="flex items-center justify-center gap-4">
								<button className="flex items-center justify-center w-full px-4 py-2 text-sm  border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
									<img
										src="https://img.icons8.com/color/20/000000/google-logo.png"
										alt="Auth google"
									/>
									&nbsp; Google
								</button>
								<button className="flex items-center justify-center w-full px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
									<svg
										className="w-4 h-4 mr-2"
										aria-hidden="true"
										viewBox="0 0 24 24"
										fill="currentColor">
										<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
									</svg>
									Github
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
