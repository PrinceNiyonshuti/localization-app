/** @format */

import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { AuthContext } from "../context/AuthContext";

function Favorite() {
	// Context Api Data

	return (
		<div className="h-screen bg-gray-100">
			<NavBar />
			<div className="px-2">
				<div className="container mx-auto">
					<div className="flex flex-wrap -mx-2 ">
						<h1 className="text-2xl font-bold text-center mt-4 ml-8">
							My Favorite Movies
						</h1>
					</div>
					<div>
						<div className="hero container max-w-screen-lg mx-auto pb-10">
							<img
								src="/no-movie.png"
								className="mx-auto"
								alt="Movie Not Found"
							/>
							<h1 className="text-2xl font-bold text-center mt-4 ml-8">
								No Favorite Movie Found
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Favorite;
