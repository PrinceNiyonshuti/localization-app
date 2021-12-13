/** @format */

import { Link } from "react-router-dom";
import { IResto } from "../context/Types";

const Restaurant = (props: IResto) => {
	console.log(props.places);
	const data = props.places;
	return (
		<div>
			{data ? (
				data.map((place) => (
					<div className="w-full p-4" key={place.location_id}>
						<div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
							<div className="relative pb-48 overflow-hidden">
								<img
									className="absolute inset-0 h-full w-full object-cover"
									src={place.photo?.images?.large?.url}
									alt=""
								/>
							</div>
							<div className="p-4">
								<span className="inline-block px-2 py-1 leading-none bg-blue-600 text-white rounded-full font-semibold uppercase tracking-wide text-xs">
									Get Directions
								</span>
								<h2 className="mt-2 mb-2  font-bold">{place.name}</h2>
								<p className="text-sm truncate ...">{place.description}</p>
								<div className="mt-3 flex items-center">
									<span className="font-bold text-xl">{place.price}</span>&nbsp;
								</div>
							</div>
							<div className="p-4 border-t border-b text-xs text-gray-700">
								{place.awards?.map((award: any) => (
									<p>
										{award.award_type} - {award.year}
									</p>
								))}

								<span className="flex items-center mb-1 mt-2 font-bold">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-3 w-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									&nbsp;
									<p>{place.distance_string}</p>
								</span>
								<span className="flex items-center font-bold">
									<p>Rank : </p> &nbsp;
									{place.ranking}
								</span>
							</div>
							<div className="mx-3 my-1">
								<span className="font-medium">Cousine :</span>
								{place.cuisine?.map((cook: any) => (
									<span className="inline-block px-2 py-1 mx-1 leading-none bg-blue-600 text-white rounded-full font-small tracking-wide text-sm">
										{cook.name}
									</span>
								))}
							</div>

							<div className="p-4 flex items-center text-sm text-gray-600">
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 fill-current text-yellow-500">
									<path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
								</svg>
								<span className="ml-2">{place.rating}</span>
							</div>
						</div>
					</div>
				))
			) : (
				<p>No data</p>
			)}
		</div>
	);
};

export default Restaurant;
