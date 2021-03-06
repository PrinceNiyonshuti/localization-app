/** @format */
import NavBar from "../components/NavBar";
import Restaurant from "../components/Restaurant";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IResto } from "../context/Types";
import { Autocomplete } from "@react-google-maps/api";

const AnyReactComponent = ({ content }: any) => <div>{content}</div>;

function Dashboard() {
	const [places, SetPlaces] = useState<IResto["places"]>([]);
	const [autocomplete, SetAutocomplete] = useState<any | null>(null);
	const [coordinates, SetCoordinates] = useState<any | null>({});
	const [bounds, SetBounds] = useState<any | null>({});

	const onLoad = (autoC: any) => {
		SetAutocomplete(autoC);
	};
	const onPlaceChanged = () => {
		const lat = autocomplete.getPlace().geometry.location.lat();
		const lng = autocomplete.getPlace().geometry.location.lng();
		SetCoordinates({ lat: lat, lng: lng });
	};

	const useMyLocation = () => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				SetCoordinates({ lat: latitude, lng: longitude });
			}
		);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				SetCoordinates({ lat: latitude, lng: longitude });
			}
		);
	}, []);

	useEffect(() => {
		if (bounds) {
			getPlacesData(bounds.sw, bounds.ne).then((data) => {
				SetPlaces(
					data?.filter((place: any) => place.name && place.num_reviews > 0)
				);
			});
		}
	}, [bounds]);

	// Places
	const URL =
		"https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

	const getPlacesData = async (sw: any, ne: any) => {
		try {
			const {
				data: { data },
			} = await axios.get(URL, {
				params: {
					bl_latitude: sw.lat,
					tr_latitude: ne.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
					limit: "30",
				},
				headers: {
					"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
					// "x-rapidapi-key": process.env.REACT_RAPID_APP_API_KEY,
					"x-rapidapi-key":
						"d39137d481msh105a1a3863d985cp1fdf9djsn706cf10395d1",
				},
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	};

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
								<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
									<input
										type="text"
										className="px-4 py-2 w-80"
										placeholder="Search City or Location ...."
									/>
								</Autocomplete>
							</div>
						</div>
						<div className="p-2 pr-4 flex items-center text-sm">
							<div className="float-right mt-2">
								<button
									onClick={useMyLocation}
									className=" float-right px-4 py-2 inline-flex items-center text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600">
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
								{coordinates ? (
									<GoogleMapReact
										bootstrapURLKeys={{
											key: process.env.REACT_APP_GOOGLE_KEY!,
										}}
										defaultCenter={coordinates}
										center={coordinates}
										defaultZoom={14}
										margin={[50, 50, 50, 50]}
										onChange={(e) => {
											SetCoordinates({ lat: e.center.lat, lng: e.center.lng });
											SetBounds({
												ne: e.marginBounds.ne,
												sw: e.marginBounds.sw,
											});
										}}
										onChildClick={(child) => {
											alert(`Clicked `);
										}}>
										{bounds ? (
											places?.map((place: any) => (
												<AnyReactComponent
													key={place.location_id}
													lat={
														place?.latitude
															? Number(place.latitude)
															: coordinates.lat
													}
													lng={
														place?.longitude
															? Number(place.longitude)
															: coordinates.lng
													}
													content={
														<div className=" inline-block py-1 leading-none rounded font-semibold  text-xs">
															<p className="bg-white rounded w-full">
																{place.name}
															</p>
															<div className=" relative pb-48 overflow-hidden">
																<img
																	className=" bg-white rounded shadow-lg absolute inset-0 h-8 w-12 object-cover"
																	src={place.photo?.images?.large?.url}
																	alt=""
																/>
															</div>
														</div>
													}
												/>
											))
										) : (
											<AnyReactComponent
												key="Marker 1"
												position={coordinates}
												content={
													<img src={"/icon.png"} className="h-4" alt="" />
												}
											/>
										)}
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
