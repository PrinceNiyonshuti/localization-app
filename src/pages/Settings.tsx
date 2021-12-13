/** @format */

import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { AuthContext } from "../context/AuthContext";

function Settings() {
	// Context Api Data
	const { currentUser } = useContext(AuthContext);

	return (
		<div className="h-screen bg-gray-100">
			<NavBar />
			<div className="h-screen bg-gray-300">
				<div className="w-full flex justify-center py-10">
					<div className="p-3 bg-white rounded-xl max-w-lg hover:shadow">
						<div className="flex justify-between w-full">
							<div className="ml-2">
								<div className="p-3">
									<h3 className="text-2xl">{currentUser.email}</h3>
									<span>Team Member</span>
								</div>
								<div className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
									<div className="mr-3">
										<span className="text-gray-400 block">Movies</span>
										<span className="font-bold text-black text-xl">7</span>
									</div>
									<div className="mr-3">
										<span className="text-gray-400 block">Comments</span>
										<span className="font-bold text-black text-xl">7</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Settings;
