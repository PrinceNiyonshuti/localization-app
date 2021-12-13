/** @format */

export interface IRegister {
	email: string;
	password: string;
}

export interface IComment {
	commentList: {
		comment: string;
		author: string;
		movie_id: number;
		id: number;
	}[];
}

export type TMovie = {
	cover: string;
	title: string;
	genre: string;
	year: string;
	description: string;
	publisher: string;
	votes: number;
	favorite: boolean;
	watch: boolean;
	id: number;
};
export type TComment = {
	comment: string;
	author: string;
	movie_id: number;
	id: number;
};

export interface ILogin {
	email: string;
	password: string;
}

export type AuthContextState = {
	currentUser: any | null;
	register: (email: string, password: string) => void;
	login: (email: string, password: string) => void;
	logout: () => void;
};

export interface IAward {
	awards: {
		award_type: string;
		year: number;
	}[];
}
export interface IResto {
	places: {
		location_id: number;
		latitude: string;
		longitude: string;
		name: string;
		description: string;
		photo: {
			images: {
				large: {
					width: number;
					url: string;
				};
			};
		};
		price: string;
		awards: [award_type: string, year: number];
		rating: number;
		ranking: string;
		distance_string: string;
		cuisine: [key: number, name: string];
	}[];
}

export const demo = [
	{
		location_id: "1102768",
		name: "Heaven Restaurant & Boutique Hotel",
		latitude: "-1.946736",
		longitude: "30.065287",
		num_reviews: "1108",
		timezone: "Africa/Kigali",
		location_string: "Kigali, Kigali Province",
		photo: {
			images: {
				small: {
					width: "150",
					url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/c2/15/7a/the-team.jpg",
					height: "150",
				},
				thumbnail: {
					width: "50",
					url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/c2/15/7a/the-team.jpg",
					height: "50",
				},
				original: {
					width: "1280",
					url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/c2/15/7a/the-team.jpg",
					height: "630",
				},
				large: {
					width: "1024",
					url: "https://media-cdn.tripadvisor.com/media/photo-w/1a/c2/15/7a/the-team.jpg",
					height: "504",
				},
				medium: {
					width: "550",
					url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/c2/15/7a/the-team.jpg",
					height: "271",
				},
			},
			is_blessed: true,
			uploaded_date: "2020-01-31T02:52:26-0500",
			caption: "The team",
			id: "448927098",
			helpful_votes: "0",
			published_date: "2020-01-31T02:52:26-0500",
			user: {
				user_id: null,
				member_id: "0",
				type: "user",
			},
		},
		awards: [
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2021",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2021",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2020",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2020",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2019",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2019",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2018",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2018",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2017",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2017",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2015",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2015",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2014",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2014",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2013",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2013_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2013",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2012",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2012_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2012",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2011",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2011_en_US-0-5.png",
				},
				categories: [],
				display_name: "Certificate of Excellence 2011",
			},
		],
		doubleclick_zone: "af.rwanda",
		preferred_map_engine: "default",
		raw_ranking: "4.394336223602295",
		ranking_geo: "Kigali",
		ranking_geo_id: "293829",
		ranking_position: "6",
		ranking_denominator: "195",
		ranking_category: "restaurant",
		ranking: "#6 of 203 Restaurants in Kigali",
		distance: "2.873865014716021",
		distance_string: "2.9 km",
		bearing: "northwest",
		rating: "4.5",
		is_closed: false,
		open_now_text: "Open Now",
		is_long_closed: false,
		price_level: "",
		price: "$15 - $60",
		description:
			"Heaven Restaurant & Boutique Hotel is an American-owned, private, serene property opened in May of 2008 in the lovely neighborhood of Kiyovu. Started as a social enterprise to improve service levels in the hospitality sector and create employment, Heaven is consistently ranked one of the country's top restaurants with a spectacular ambience on a custom-built outdoor terrace overlooking the entire city. Since our opening, we have trained over 1,500 Rwandans. Heaven Boutique Hotel has 30 beautifully appointed hotel rooms with a salt water heated swimming pool, an open air state-of-the-art gym, ensuite private bathrooms, local artwork, free wifi, unlimited coffee/tea/purified water, 24 hour security, just steps from downtown Kigali. In addition to 30 rooms currently in operation, our 20 room luxury hotel called The Retreat is located just next door! The Retreat is a new property with 20 luxury rooms all with peaked ceilings and private outdoor terraces, a gym, spa and swimming pool!",
		web_url:
			"https://www.tripadvisor.com/Restaurant_Review-g293829-d1102768-Reviews-Heaven_Restaurant_Boutique_Hotel-Kigali_Kigali_Province.html",
		write_review:
			"https://www.tripadvisor.com/UserReview-g293829-d1102768-Heaven_Restaurant_Boutique_Hotel-Kigali_Kigali_Province.html",
		ancestors: [
			{
				subcategory: [
					{
						key: "city",
						name: "City",
					},
				],
				name: "Kigali",
				abbrv: null,
				location_id: "293829",
			},
			{
				subcategory: [
					{
						key: "district",
						name: "District",
					},
				],
				name: "Kigali Province",
				abbrv: null,
				location_id: "3685406",
			},
			{
				subcategory: [
					{
						key: "country",
						name: "Country",
					},
				],
				name: "Rwanda",
				abbrv: null,
				location_id: "293828",
			},
		],
		category: {
			key: "restaurant",
			name: "Restaurant",
		},
		subcategory: [
			{
				key: "sit_down",
				name: "Sit down",
			},
		],
		parent_display_name: "Kigali",
		is_jfy_enabled: false,
		nearest_metro_station: [],
		reviews: [
			{
				id: "776007841",
				lang: null,
				location_id: "0",
				published_date: "2021-12-13T12:23:32-05:00",
				published_platform: "Desktop",
				rating: "5",
				type: "review",
				helpful_votes: "0",
				url: "https://www.tripadvisor.com/ShowUserReviews?src=776007841#review776007841",
				travel_date: null,
				text: null,
				user: null,
				title: "World Class food in Kigali",
				owner_response: null,
				subratings: [],
				machine_translated: false,
				machine_translatable: false,
			},
		],
		phone: "+250 788 486 581",
		website: "http://www.heavenrwanda.com/",
		email: "restaurant@heavenrwanda.com",
		address_obj: {
			street1: "29 No. 7, Street KN",
			street2: "Kiyovu",
			city: "Kigali",
			state: null,
			country: "Rwanda",
			postalcode: "",
		},
		address: "29 No. 7, Street KN Kiyovu, Kigali Rwanda",
		hours: {
			week_ranges: [
				[
					{
						open_time: 600,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 600,
						close_time: 1350,
					},
				],
			],
			timezone: "Africa/Kigali",
		},
		is_candidate_for_contact_info_suppression: false,
		cuisine: [
			{
				key: "10648",
				name: "International",
			},
		],
		dietary_restrictions: [],
		establishment_types: [],
		tripads_metadata: {
			restaurants_request_guid: "a0b6de0d-323a-4348-b7b4-3670d509d049",
			ad_slot: "TA/Android/NearMe/List/0a",
			tripads_selection_guid: "9aec7f9b-6ef1-4c69-b797-11f11249442f",
			payload_token:
				"T1pNUTvfCWDcRJW_ABQClfZokeWoSyml32QqGT1AmxpCINLKeCPW8zgmioJYql5885NUM3ddFcV9IYeKG-_Y1_9l17EGadbjrTeHKTlKHFJ5a2r1FkepQIBqZLbq7Nowvl1i1DScC7DVNzZG0bLB5I7yjKKhUs342MjZKupDd4bo81RgEgMr5RDbYnAlVg",
			location_id: "1102768",
			tripads_id: "5105625",
			sl_line_item_id: "5473831",
			advertiser_id: "0",
		},
	},
	{
		location_id: "11714486",
		name: "The Hut",
		latitude: "-1.957905",
		longitude: "30.093393",
		num_reviews: "342",
		timezone: "Africa/Kigali",
		location_string: "Kigali, Kigali Province",
		photo: {
			images: {
				small: {
					width: "150",
					url: "https://media-cdn.tripadvisor.com/media/photo-l/0d/70/42/b9/the-hut-at-the-evening.jpg",
					height: "150",
				},
				thumbnail: {
					width: "50",
					url: "https://media-cdn.tripadvisor.com/media/photo-t/0d/70/42/b9/the-hut-at-the-evening.jpg",
					height: "50",
				},
				original: {
					width: "2000",
					url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/70/42/b9/the-hut-at-the-evening.jpg",
					height: "1335",
				},
				large: {
					width: "1024",
					url: "https://media-cdn.tripadvisor.com/media/photo-w/0d/70/42/b9/the-hut-at-the-evening.jpg",
					height: "684",
				},
				medium: {
					width: "550",
					url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/70/42/b9/the-hut-at-the-evening.jpg",
					height: "367",
				},
			},
			is_blessed: true,
			uploaded_date: "2016-10-27T09:52:53-0400",
			caption: "The HUt at the evening!!",
			id: "225460921",
			helpful_votes: "4",
			published_date: "2016-10-27T09:52:53-0400",
			user: {
				user_id: null,
				member_id: "0",
				type: "user",
			},
		},
		awards: [
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2021",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2021",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2020",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2020",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2019",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2019",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2018",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2018",
			},
		],
		doubleclick_zone: "af.rwanda",
		preferred_map_engine: "default",
		raw_ranking: "4.672935962677002",
		ranking_geo: "Kigali",
		ranking_geo_id: "293829",
		ranking_position: "1",
		ranking_denominator: "195",
		ranking_category: "restaurant",
		ranking: "#1 of 203 Restaurants in Kigali",
		distance: "2.1570742105572087",
		distance_string: "2.2 km",
		bearing: "northeast",
		rating: "4.5",
		is_closed: false,
		open_now_text: "Open Now",
		is_long_closed: false,
		price_level: "$$ - $$$",
		price: "$10 - $80",
		description:
			"The Hut Restaurant is one of the best newly opened restaurants in Rwanda. Our unique international cuisine that incorporates local, organic Rwandan ingredients. Our customers especially enjoy dining on our outdoor terrace with an excellent scenic view of Kigali hills. . Lunch service and daytime conferences during weekdays may be arranged with advanced reservations.",
		web_url:
			"https://www.tripadvisor.com/Restaurant_Review-g293829-d11714486-Reviews-The_Hut-Kigali_Kigali_Province.html",
		write_review:
			"https://www.tripadvisor.com/UserReview-g293829-d11714486-The_Hut-Kigali_Kigali_Province.html",
		ancestors: [
			{
				subcategory: [
					{
						key: "city",
						name: "City",
					},
				],
				name: "Kigali",
				abbrv: null,
				location_id: "293829",
			},
			{
				subcategory: [
					{
						key: "district",
						name: "District",
					},
				],
				name: "Kigali Province",
				abbrv: null,
				location_id: "3685406",
			},
			{
				subcategory: [
					{
						key: "country",
						name: "Country",
					},
				],
				name: "Rwanda",
				abbrv: null,
				location_id: "293828",
			},
		],
		category: {
			key: "restaurant",
			name: "Restaurant",
		},
		subcategory: [
			{
				key: "sit_down",
				name: "Sit down",
			},
		],
		parent_display_name: "Kigali",
		is_jfy_enabled: false,
		nearest_metro_station: [],
		phone: "+250 783 419 980",
		website: "http://www.facebook.com/thehutrwanda/",
		email: "thehutrwanda@gmail.com",
		address_obj: {
			street1: "1 KG 646 Street, Number",
			street2: "Rugando, Kimihurura, Behind Kigali Convention Center",
			city: "Kigali",
			state: null,
			country: "Rwanda",
			postalcode: "00250",
		},
		address:
			"1 KG 646 Street, Number Rugando, Kimihurura, Behind Kigali Convention Center, Kigali 00250 Rwanda",
		hours: {
			week_ranges: [
				[
					{
						open_time: 660,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 660,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 660,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 660,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 660,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 660,
						close_time: 1350,
					},
				],
				[
					{
						open_time: 660,
						close_time: 1350,
					},
				],
			],
			timezone: "Africa/Kigali",
		},
		is_candidate_for_contact_info_suppression: false,
		cuisine: [
			{
				key: "10640",
				name: "Bar",
			},
			{
				key: "10671",
				name: "Fusion",
			},
			{
				key: "10665",
				name: "Vegetarian Friendly",
			},
			{
				key: "10697",
				name: "Vegan Options",
			},
			{
				key: "10992",
				name: "Gluten Free Options",
			},
		],
		dietary_restrictions: [
			{
				key: "10665",
				name: "Vegetarian Friendly",
			},
			{
				key: "10697",
				name: "Vegan Options",
			},
			{
				key: "10992",
				name: "Gluten Free Options",
			},
		],
		establishment_types: [
			{
				key: "10591",
				name: "Restaurants",
			},
		],
	},
	{
		location_id: "12688822",
		name: "Cucina Restaurant",
		latitude: "-1.952921",
		longitude: "30.06105",
		num_reviews: "130",
		timezone: "Africa/Kigali",
		location_string: "Kigali, Kigali Province",
		photo: {
			images: {
				small: {
					width: "150",
					url: "https://media-cdn.tripadvisor.com/media/photo-l/10/09/1b/a6/cucina-s-elegant-dining.jpg",
					height: "150",
				},
				thumbnail: {
					width: "50",
					url: "https://media-cdn.tripadvisor.com/media/photo-t/10/09/1b/a6/cucina-s-elegant-dining.jpg",
					height: "50",
				},
				original: {
					width: "2000",
					url: "https://media-cdn.tripadvisor.com/media/photo-o/10/09/1b/a6/cucina-s-elegant-dining.jpg",
					height: "1335",
				},
				large: {
					width: "1024",
					url: "https://media-cdn.tripadvisor.com/media/photo-w/10/09/1b/a6/cucina-s-elegant-dining.jpg",
					height: "683",
				},
				medium: {
					width: "550",
					url: "https://media-cdn.tripadvisor.com/media/photo-s/10/09/1b/a6/cucina-s-elegant-dining.jpg",
					height: "367",
				},
			},
			is_blessed: true,
			uploaded_date: "2017-07-27T04:20:30-0400",
			caption: "Cucina's elegant dining room",
			id: "269032358",
			helpful_votes: "0",
			published_date: "2017-07-27T04:20:30-0400",
			user: {
				user_id: null,
				member_id: "0",
				type: "user",
			},
		},
		awards: [
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2020",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2020",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2019",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2019",
			},
		],
		doubleclick_zone: "af.rwanda",
		preferred_map_engine: "default",
		raw_ranking: "4.596572399139404",
		ranking_geo: "Kigali",
		ranking_geo_id: "293829",
		ranking_position: "2",
		ranking_denominator: "195",
		ranking_category: "restaurant",
		ranking: "#2 of 203 Restaurants in Kigali",
		distance: "2.6067447340012",
		distance_string: "2.6 km",
		bearing: "northwest",
		rating: "4.5",
		is_closed: false,
		open_now_text: "Open Now",
		is_long_closed: false,
		price_level: "$$ - $$$",
		price: "$6 - $30",
		description:
			"Savor a taste of Italy in Kigali. Cucina offers flavorful, authentic dishes from mouthwatering pizzas to savory risottos to classic pastas. Complement your meal with a glass of wine from our international selection and be sure to save room for dessert!",
		web_url:
			"https://www.tripadvisor.com/Restaurant_Review-g293829-d12688822-Reviews-Cucina_Restaurant-Kigali_Kigali_Province.html",
		write_review:
			"https://www.tripadvisor.com/UserReview-g293829-d12688822-Cucina_Restaurant-Kigali_Kigali_Province.html",
		ancestors: [
			{
				subcategory: [
					{
						key: "city",
						name: "City",
					},
				],
				name: "Kigali",
				abbrv: null,
				location_id: "293829",
			},
			{
				subcategory: [
					{
						key: "district",
						name: "District",
					},
				],
				name: "Kigali Province",
				abbrv: null,
				location_id: "3685406",
			},
			{
				subcategory: [
					{
						key: "country",
						name: "Country",
					},
				],
				name: "Rwanda",
				abbrv: null,
				location_id: "293828",
			},
		],
		category: {
			key: "restaurant",
			name: "Restaurant",
		},
		subcategory: [
			{
				key: "sit_down",
				name: "Sit down",
			},
		],
		parent_display_name: "Kigali",
		is_jfy_enabled: false,
		nearest_metro_station: [],
		phone: "+250 222 111 111",
		website: "http://www.facebook.com/CucinaKigali/",
		email: "mhrs.kglmc.ays@marriott.com",
		address_obj: {
			street1: "KN 3 Avenue",
			street2: null,
			city: "Kigali",
			state: null,
			country: "Rwanda",
			postalcode: null,
		},
		address: "KN 3 Avenue, Kigali Rwanda",
		hours: {
			week_ranges: [
				[
					{
						open_time: 720,
						close_time: 900,
					},
					{
						open_time: 1020,
						close_time: 1380,
					},
				],
				[
					{
						open_time: 720,
						close_time: 900,
					},
					{
						open_time: 1020,
						close_time: 1380,
					},
				],
				[
					{
						open_time: 720,
						close_time: 900,
					},
					{
						open_time: 1020,
						close_time: 1380,
					},
				],
				[
					{
						open_time: 720,
						close_time: 900,
					},
					{
						open_time: 1020,
						close_time: 1380,
					},
				],
				[
					{
						open_time: 720,
						close_time: 900,
					},
					{
						open_time: 1020,
						close_time: 1380,
					},
				],
				[
					{
						open_time: 720,
						close_time: 900,
					},
					{
						open_time: 1020,
						close_time: 1380,
					},
				],
				[
					{
						open_time: 720,
						close_time: 900,
					},
					{
						open_time: 1020,
						close_time: 1380,
					},
				],
			],
			timezone: "Africa/Kigali",
		},
		is_candidate_for_contact_info_suppression: false,
		cuisine: [
			{
				key: "4617",
				name: "Italian",
			},
			{
				key: "10641",
				name: "Pizza",
			},
			{
				key: "10649",
				name: "Mediterranean",
			},
			{
				key: "10654",
				name: "European",
			},
			{
				key: "10665",
				name: "Vegetarian Friendly",
			},
			{
				key: "10697",
				name: "Vegan Options",
			},
			{
				key: "10992",
				name: "Gluten Free Options",
			},
		],
		dietary_restrictions: [
			{
				key: "10665",
				name: "Vegetarian Friendly",
			},
			{
				key: "10697",
				name: "Vegan Options",
			},
			{
				key: "10992",
				name: "Gluten Free Options",
			},
		],
		establishment_types: [
			{
				key: "10591",
				name: "Restaurants",
			},
		],
	},
	{
		location_id: "14106473",
		name: "Fusion Restaurant",
		latitude: "-1.947684",
		longitude: "30.065271",
		num_reviews: "150",
		timezone: "Africa/Kigali",
		location_string: "Kigali, Kigali Province",
		photo: {
			images: {
				small: {
					width: "150",
					url: "https://media-cdn.tripadvisor.com/media/photo-l/1c/90/0d/e1/organic-gardens-outdoor.jpg",
					height: "150",
				},
				thumbnail: {
					width: "50",
					url: "https://media-cdn.tripadvisor.com/media/photo-t/1c/90/0d/e1/organic-gardens-outdoor.jpg",
					height: "50",
				},
				original: {
					width: "1080",
					url: "https://media-cdn.tripadvisor.com/media/photo-o/1c/90/0d/e1/organic-gardens-outdoor.jpg",
					height: "720",
				},
				large: {
					width: "1024",
					url: "https://media-cdn.tripadvisor.com/media/photo-w/1c/90/0d/e1/organic-gardens-outdoor.jpg",
					height: "683",
				},
				medium: {
					width: "550",
					url: "https://media-cdn.tripadvisor.com/media/photo-s/1c/90/0d/e1/organic-gardens-outdoor.jpg",
					height: "367",
				},
			},
			is_blessed: true,
			uploaded_date: "2021-01-23T02:13:04-0500",
			caption: "Organic gardens, outdoor seating",
			id: "479202785",
			helpful_votes: "1",
			published_date: "2021-01-23T02:13:04-0500",
			user: {
				user_id: null,
				member_id: "0",
				type: "user",
			},
		},
		awards: [
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2021",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2021",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2020",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2020",
			},
		],
		doubleclick_zone: "af.rwanda",
		preferred_map_engine: "default",
		raw_ranking: "4.504101276397705",
		ranking_geo: "Kigali",
		ranking_geo_id: "293829",
		ranking_position: "3",
		ranking_denominator: "195",
		ranking_category: "restaurant",
		ranking: "#3 of 203 Restaurants in Kigali",
		distance: "2.782742714971544",
		distance_string: "2.8 km",
		bearing: "northwest",
		rating: "4.5",
		is_closed: false,
		open_now_text: "Open Now",
		is_long_closed: false,
		price_level: "$$$$",
		price: "$25 - $75",
		description:
			"Fusion Restaurant is located at The Retreat, the new luxury boutique hotel in Kigali featuring farm-to-table international fusion cuisine, top-notch service, and magnificent poolside seating. From the owners of Heaven, Fusion provides Kigali visitors with a fresh new innovative menu, creative cocktails and hand-picked wines from South Africa!",
		web_url:
			"https://www.tripadvisor.com/Restaurant_Review-g293829-d14106473-Reviews-Fusion_Restaurant-Kigali_Kigali_Province.html",
		write_review:
			"https://www.tripadvisor.com/UserReview-g293829-d14106473-Fusion_Restaurant-Kigali_Kigali_Province.html",
		ancestors: [
			{
				subcategory: [
					{
						key: "city",
						name: "City",
					},
				],
				name: "Kigali",
				abbrv: null,
				location_id: "293829",
			},
			{
				subcategory: [
					{
						key: "district",
						name: "District",
					},
				],
				name: "Kigali Province",
				abbrv: null,
				location_id: "3685406",
			},
			{
				subcategory: [
					{
						key: "country",
						name: "Country",
					},
				],
				name: "Rwanda",
				abbrv: null,
				location_id: "293828",
			},
		],
		category: {
			key: "restaurant",
			name: "Restaurant",
		},
		subcategory: [
			{
				key: "sit_down",
				name: "Sit down",
			},
		],
		parent_display_name: "Kigali",
		is_jfy_enabled: false,
		nearest_metro_station: [],
		phone: "+250 788 486 581",
		website: "http://www.theretreatrwanda.com",
		email: "restaurant@heavenrwanda.com",
		address_obj: {
			street1: "No 5 KN 29 Kiyovu",
			street2: null,
			city: "Kigali",
			state: null,
			country: "Rwanda",
			postalcode: null,
		},
		address: "No 5 KN 29 Kiyovu, Kigali Rwanda",
		hours: {
			week_ranges: [
				[
					{
						open_time: 420,
						close_time: 1320,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1320,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1320,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1320,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1320,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1320,
					},
				],
				[
					{
						open_time: 420,
						close_time: 1320,
					},
				],
			],
			timezone: "Africa/Kigali",
		},
		is_candidate_for_contact_info_suppression: false,
		cuisine: [
			{
				key: "10632",
				name: "African",
			},
			{
				key: "10648",
				name: "International",
			},
			{
				key: "10671",
				name: "Fusion",
			},
			{
				key: "10665",
				name: "Vegetarian Friendly",
			},
			{
				key: "10697",
				name: "Vegan Options",
			},
			{
				key: "10992",
				name: "Gluten Free Options",
			},
		],
		dietary_restrictions: [
			{
				key: "10665",
				name: "Vegetarian Friendly",
			},
			{
				key: "10697",
				name: "Vegan Options",
			},
			{
				key: "10992",
				name: "Gluten Free Options",
			},
		],
		establishment_types: [
			{
				key: "10591",
				name: "Restaurants",
			},
		],
	},
	{
		location_id: "293829",
		ad_position: "inline1",
		ad_size: "8X8",
		doubleclick_zone: "af.rwanda",
		ancestors: [
			{
				subcategory: [
					{
						key: "district",
						name: "District",
					},
				],
				name: "Kigali Province",
				abbrv: null,
				location_id: "3685406",
			},
			{
				subcategory: [
					{
						key: "country",
						name: "Country",
					},
				],
				name: "Rwanda",
				abbrv: null,
				location_id: "293828",
			},
		],
		detail: "0",
		page_type: "restaurants",
		mob_ptype: "app_restaurants",
	},
	{
		location_id: "1011122",
		name: "Khana Khazana",
		latitude: "-1.947285",
		longitude: "30.066023",
		num_reviews: "678",
		timezone: "Africa/Kigali",
		location_string: "Kigali, Kigali Province",
		photo: {
			images: {
				small: {
					width: "150",
					url: "https://media-cdn.tripadvisor.com/media/photo-l/16/0b/98/bb/khana-khazana-kiyovu.jpg",
					height: "150",
				},
				thumbnail: {
					width: "50",
					url: "https://media-cdn.tripadvisor.com/media/photo-t/16/0b/98/bb/khana-khazana-kiyovu.jpg",
					height: "50",
				},
				original: {
					width: "1008",
					url: "https://media-cdn.tripadvisor.com/media/photo-o/16/0b/98/bb/khana-khazana-kiyovu.jpg",
					height: "490",
				},
				large: {
					width: "1008",
					url: "https://media-cdn.tripadvisor.com/media/photo-o/16/0b/98/bb/khana-khazana-kiyovu.jpg",
					height: "490",
				},
				medium: {
					width: "550",
					url: "https://media-cdn.tripadvisor.com/media/photo-s/16/0b/98/bb/khana-khazana-kiyovu.jpg",
					height: "267",
				},
			},
			is_blessed: true,
			uploaded_date: "2019-01-10T14:07:57-0500",
			caption: "KHANA KHAZANA KIYOVU BAR",
			id: "369858747",
			helpful_votes: "4",
			published_date: "2019-01-10T14:07:57-0500",
			user: {
				user_id: null,
				member_id: "0",
				type: "user",
			},
		},
		awards: [
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2020",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2020",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2019",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2019",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2018",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2018",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2017",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2017",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2016",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2016",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2015",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2015",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2014",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2014",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2013",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2013_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2013",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2012",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2012_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2012",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2011",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2011_en_US-0-5.png",
				},
				categories: [],
				display_name: "Certificate of Excellence 2011",
			},
		],
		doubleclick_zone: "af.rwanda",
		preferred_map_engine: "default",
		raw_ranking: "4.430978775024414",
		ranking_geo: "Kigali",
		ranking_geo_id: "293829",
		ranking_position: "4",
		ranking_denominator: "195",
		ranking_category: "restaurant",
		ranking: "#4 of 203 Restaurants in Kigali",
		distance: "2.7811583323541176",
		distance_string: "2.8 km",
		bearing: "northwest",
		rating: "4.5",
		is_closed: false,
		open_now_text: "Closed Now",
		is_long_closed: false,
		price_level: "$$ - $$$",
		price: "$10 - $15",
		description:
			"1} Khana Khazana , The authentic Indian restaurant, An easy place to locate on 9,KN 31st, Kiyovu the third branch on your left after BNR , LUNCH-12:00 PM TO 3:30 PM- DINNER-6:00PM TO 10:30 PM 2) Khana khazana Villas & Boutique Hotel , locate on KG 9, Ave, Near (RDB ) RWANDA DEVELOPMENT BOARD, and perfect distance from the center of town to feel the escape necessary after a busy week at the office , provides just the right variant from the hustle and bustle of the center town. Khazana has the great Ambiance,surrounds garden, offer you open air dining with extremely attentive service contributed to brilliant dining experience. At a very reasonable price,The imagination of our chefs will cook for you with delicious dishes, A meal at Khazana really will leave your taste buds tingling for all the right reasons and seasons.our popular dish in starter subzi taka tin,tandoori chicken, hariyali fish, in main course chicken tikka masala,butter chicken, mutton nihari, palak paneer, nan etc",
		web_url:
			"https://www.tripadvisor.com/Restaurant_Review-g293829-d1011122-Reviews-Khana_Khazana-Kigali_Kigali_Province.html",
		write_review:
			"https://www.tripadvisor.com/UserReview-g293829-d1011122-Khana_Khazana-Kigali_Kigali_Province.html",
		ancestors: [
			{
				subcategory: [
					{
						key: "city",
						name: "City",
					},
				],
				name: "Kigali",
				abbrv: null,
				location_id: "293829",
			},
			{
				subcategory: [
					{
						key: "district",
						name: "District",
					},
				],
				name: "Kigali Province",
				abbrv: null,
				location_id: "3685406",
			},
			{
				subcategory: [
					{
						key: "country",
						name: "Country",
					},
				],
				name: "Rwanda",
				abbrv: null,
				location_id: "293828",
			},
		],
		category: {
			key: "restaurant",
			name: "Restaurant",
		},
		subcategory: [
			{
				key: "sit_down",
				name: "Sit down",
			},
		],
		parent_display_name: "Kigali",
		is_jfy_enabled: false,
		nearest_metro_station: [],
		phone: "+250 788 499 600",
		website: "http://www.khanakhazana.rw",
		email: "khazanarwanda@yahoo.com",
		address_obj: {
			street1: "KN 31st, Kiyovu branch 1 and",
			street2: "Kg 9 Avenue, Near Branch 2",
			city: "Kigali",
			state: null,
			country: "Rwanda",
			postalcode: "6352",
		},
		address:
			"KN 31st, Kiyovu branch 1 and Kg 9 Avenue, Near Branch 2, Kigali 6352 Rwanda",
		hours: {
			week_ranges: [
				[
					{
						open_time: 690,
						close_time: 1110,
					},
				],
				[
					{
						open_time: 690,
						close_time: 1110,
					},
				],
				[
					{
						open_time: 690,
						close_time: 1110,
					},
				],
				[
					{
						open_time: 690,
						close_time: 1110,
					},
				],
				[
					{
						open_time: 690,
						close_time: 1110,
					},
				],
				[
					{
						open_time: 690,
						close_time: 1110,
					},
				],
				[
					{
						open_time: 690,
						close_time: 1110,
					},
				],
			],
			timezone: "Africa/Kigali",
		},
		is_candidate_for_contact_info_suppression: false,
		cuisine: [
			{
				key: "10346",
				name: "Indian",
			},
			{
				key: "10665",
				name: "Vegetarian Friendly",
			},
			{
				key: "10697",
				name: "Vegan Options",
			},
			{
				key: "10751",
				name: "Halal",
			},
			{
				key: "10992",
				name: "Gluten Free Options",
			},
		],
		dietary_restrictions: [
			{
				key: "10665",
				name: "Vegetarian Friendly",
			},
			{
				key: "10697",
				name: "Vegan Options",
			},
			{
				key: "10751",
				name: "Halal",
			},
			{
				key: "10992",
				name: "Gluten Free Options",
			},
		],
		establishment_types: [
			{
				key: "10591",
				name: "Restaurants",
			},
		],
	},
	{
		location_id: "2667996",
		name: "Repub Lounge",
		latitude: "-1.952294",
		longitude: "30.081387",
		num_reviews: "399",
		timezone: "Africa/Kigali",
		location_string: "Kigali, Kigali Province",
		photo: {
			images: {
				small: {
					width: "150",
					url: "https://media-cdn.tripadvisor.com/media/photo-l/0a/d8/20/2c/karibuni.jpg",
					height: "150",
				},
				thumbnail: {
					width: "50",
					url: "https://media-cdn.tripadvisor.com/media/photo-t/0a/d8/20/2c/karibuni.jpg",
					height: "50",
				},
				original: {
					width: "2160",
					url: "https://media-cdn.tripadvisor.com/media/photo-o/0a/d8/20/2c/karibuni.jpg",
					height: "1440",
				},
				large: {
					width: "1024",
					url: "https://media-cdn.tripadvisor.com/media/photo-w/0a/d8/20/2c/karibuni.jpg",
					height: "682",
				},
				medium: {
					width: "550",
					url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/d8/20/2c/karibuni.jpg",
					height: "367",
				},
			},
			is_blessed: true,
			uploaded_date: "2016-04-08T09:36:46-0400",
			caption: "Karibuni!",
			id: "181936172",
			helpful_votes: "2",
			published_date: "2016-04-08T09:37:07-0400",
			user: {
				user_id: null,
				member_id: "0",
				type: "user",
			},
		},
		awards: [
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2020",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2020",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2019",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2019",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2018",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2018",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2017",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2017",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2016",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2016",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2015",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2015",
			},
			{
				award_type: "CERTIFICATE_OF_EXCELLENCE",
				year: "2014",
				images: {
					small:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
					large:
						"https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg",
				},
				categories: [],
				display_name: "Certificate of Excellence 2014",
			},
		],
		doubleclick_zone: "af.rwanda",
		preferred_map_engine: "default",
		raw_ranking: "4.406209945678711",
		ranking_geo: "Kigali",
		ranking_geo_id: "293829",
		ranking_position: "5",
		ranking_denominator: "195",
		ranking_category: "restaurant",
		ranking: "#5 of 203 Restaurants in Kigali",
		distance: "1.941640477136812",
		distance_string: "1.9 km",
		bearing: "north",
		rating: "4.5",
		is_closed: false,
		open_now_text: "Open Now",
		is_long_closed: false,
		price_level: "$$ - $$$",
		price: "$15 - $25",
		description:
			"Repub Lounge is a two-story restaurant and lounge boasting beautiful views, relaxed ambience, African cuisine, and live music. Ideal for large groups, date nights, and cocktail events. Repub Lounge: a must in Kigali.",
		web_url:
			"https://www.tripadvisor.com/Restaurant_Review-g293829-d2667996-Reviews-Repub_Lounge-Kigali_Kigali_Province.html",
		write_review:
			"https://www.tripadvisor.com/UserReview-g293829-d2667996-Repub_Lounge-Kigali_Kigali_Province.html",
		ancestors: [
			{
				subcategory: [
					{
						key: "city",
						name: "City",
					},
				],
				name: "Kigali",
				abbrv: null,
				location_id: "293829",
			},
			{
				subcategory: [
					{
						key: "district",
						name: "District",
					},
				],
				name: "Kigali Province",
				abbrv: null,
				location_id: "3685406",
			},
			{
				subcategory: [
					{
						key: "country",
						name: "Country",
					},
				],
				name: "Rwanda",
				abbrv: null,
				location_id: "293828",
			},
		],
		category: {
			key: "restaurant",
			name: "Restaurant",
		},
		subcategory: [
			{
				key: "sit_down",
				name: "Sit down",
			},
		],
		parent_display_name: "Kigali",
		is_jfy_enabled: false,
		nearest_metro_station: [],
		phone: "+250 788 388 333",
		website: "http://republounge.com",
		email: "info@republounge.com",
		address_obj: {
			street1: "# 16 KG 674 St.",
			street2: "Kimihurura",
			city: "Kigali",
			state: null,
			country: "Rwanda",
			postalcode: "",
		},
		address: "# 16 KG 674 St. Kimihurura, Kigali Rwanda",
		hours: {
			week_ranges: [
				[],
				[
					{
						open_time: 720,
						close_time: 1440,
					},
				],
				[
					{
						open_time: 720,
						close_time: 1440,
					},
				],
				[
					{
						open_time: 720,
						close_time: 1440,
					},
				],
				[
					{
						open_time: 720,
						close_time: 1440,
					},
				],
				[
					{
						open_time: 720,
						close_time: 1440,
					},
				],
				[
					{
						open_time: 1080,
						close_time: 1440,
					},
				],
			],
			timezone: "Africa/Kigali",
		},
		is_candidate_for_contact_info_suppression: false,
		cuisine: [
			{
				key: "10632",
				name: "African",
			},
			{
				key: "10640",
				name: "Bar",
			},
			{
				key: "10668",
				name: "Grill",
			},
			{
				key: "10665",
				name: "Vegetarian Friendly",
			},
			{
				key: "10697",
				name: "Vegan Options",
			},
			{
				key: "10992",
				name: "Gluten Free Options",
			},
		],
		dietary_restrictions: [
			{
				key: "10665",
				name: "Vegetarian Friendly",
			},
			{
				key: "10697",
				name: "Vegan Options",
			},
			{
				key: "10992",
				name: "Gluten Free Options",
			},
		],
		establishment_types: [
			{
				key: "10591",
				name: "Restaurants",
			},
		],
	},
];
