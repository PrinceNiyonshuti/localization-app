/** @format */
import NavBar from "../components/NavBar";
import Restaurant from "../components/Restaurant";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { demo, IResto } from "../context/Types";
import { Marker } from "@react-google-maps/api";
import resto from "../resto-icon.svg";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

function Dashboard() {
	// const [places, SetPlaces] = useState<IResto["places"]>([]);
	const [places, SetPlaces] = useState<any | null>(demo);
	const [coordinates, SetCoordinates] = useState<any | null>({});
	const [bounds, SetBounds] = useState<any | null>({
		ne: {
			lat: -1.9529727411044604,
			lng: 30.100878570544438,
		},
		sw: {
			lat: -1.9857406977979224,
			lng: 30.05461582945557,
		},
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				SetCoordinates({ lat: latitude, lng: longitude });
			}
		);
	}, []);

	// useEffect(() => {
	// 	console.log(coordinates, bounds);
	// 	getPlacesData(bounds.sw, bounds.ne).then((data) => {
	// 		SetPlaces(data);
	// 		console.log(data);
	// 	});
	// }, [coordinates, bounds]);

	// // Places
	// const URL =
	// 	"https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

	// const getPlacesData = async (sw: any, ne: any) => {
	// 	console.log(` New Bounds ${sw.lat} - ${ne.lat}`);
	// 	try {
	// 		const {
	// 			data: { data },
	// 		} = await axios.get(URL, {
	// 			params: {
	// 				bl_latitude: sw.lat,
	// 				tr_latitude: ne.lat,
	// 				bl_longitude: sw.lng,
	// 				tr_longitude: ne.lng,
	// 				limit: "5",
	// 			},
	// 			headers: {
	// 				"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
	// 				"x-rapidapi-key":
	// 					"c7ad9de5d2msh42c70d1195dd094p1aea80jsn7c1a7e219f11",
	// 			},
	// 		});
	// 		return data;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<div className="h-screen bg-gray-100">
			<NavBar />
			<div className=" px-2">
				<div className="container mx-auto">
					<div className="button-container flex flex-wrap justify-between mb-2">
						<div className="p-2 flex items-center text-sm">
							<div className="flex flex-wrap -mx-2 ">
								<h1 className="text-2xl font-bold text-center mt-4 ml-8">
									Near By Restaurants
								</h1>
							</div>
						</div>
						<div className="p-2 flex items-center text-sm">
							<div className="flex border-2 rounded">
								<input
									type="text"
									className="px-4 py-2 w-80"
									placeholder="Search City or Location ...."
								/>
								<button className="flex items-center justify-center px-4 border-l">
									<svg
										className="w-6 h-6 text-black"
										fill="black"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24">
										<path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
									</svg>
								</button>
							</div>
						</div>
						<div className="p-2 pr-4 flex items-center text-sm">
							<div className="float-right mt-2">
								<button className=" float-right px-4 py-2 inline-flex items-center text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600">
									<img
										src="/current-location.svg"
										className="h-5 mx-2"
										alt=""
									/>
									<span>Use My Location</span>
								</button>
							</div>
						</div>
					</div>
					<div>
						<div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
							<div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-1/3 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
								<div className=" hero container max-w-screen-lg mx-auto pb-10">
									<div className="overflow-auto h-screen">
										{places ? (
											<Restaurant places={places} />
										) : (
											<p>Still Loading ...</p>
										)}
									</div>
								</div>
							</div>

							<div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-2/3 lg:my-1 lg:px-1 lg:w-2/3 xl:my-1 xl:px-1 xl:w-2/3">
								{/* <div className="hero container max-w-screen-lg mx-auto pb-10">
									sads
								</div> */}
								{bounds ? (
									<GoogleMapReact
										bootstrapURLKeys={{
											key: "AIzaSyAjsvJXVS0ZEdKz4CH8iyYjzmrvOmps2zo",
										}}
										defaultCenter={coordinates}
										center={coordinates}
										defaultZoom={14}
										margin={[50, 50, 50, 50]}
										options={{}}
										onChange={(e) => {
											SetCoordinates({ lat: e.center.lat, lng: e.center.lng });
											SetBounds({
												ne: e.marginBounds.ne,
												sw: e.marginBounds.sw,
											});
											console.log(bounds);
										}}
										onChildClick={(e) => {}}>
										{places?.map((place: any) => (
											// <Marker
											// 	key={place.location_id}
											// 	position={{
											// 		lat: Number(place.latitude),
											// 		lng: Number(place.longitude),
											// 	}}
											// 	icon={{
											// 		url: resto,
											// 		origin: new window.google.maps.Point(0, 0),
											// 		anchor: new window.google.maps.Point(15, 15),
											// 		// scaledSize: new window.google.maps.Size(30, 30),
											// 	}}
											// />
											<AnyReactComponent
												key={place.location_id}
												lat={Number(place.latitude)}
												lng={place.longitude}
												text={place.name}
												className={"bg-blue-800"}
											/>
										))}
									</GoogleMapReact>
								) : (
									<p>Still Loading ...</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
