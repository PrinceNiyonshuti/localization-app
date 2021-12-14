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
		awards: [display_name: string, year: number];
		rating: number;
		ranking: string;
		distance_string: string;
		cuisine: [key: number, name: string];
	}[];
}

export const demo = [
    {
        "location_id": "11714486",
        "name": "The Hut",
        "latitude": "-1.957905",
        "longitude": "30.093393",
        "num_reviews": "342",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/0d/70/42/b9/the-hut-at-the-evening.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0d/70/42/b9/the-hut-at-the-evening.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2000",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0d/70/42/b9/the-hut-at-the-evening.jpg",
                    "height": "1335"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/0d/70/42/b9/the-hut-at-the-evening.jpg",
                    "height": "684"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/70/42/b9/the-hut-at-the-evening.jpg",
                    "height": "367"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2016-10-27T09:52:53-0400",
            "caption": "The HUt at the evening!!",
            "id": "225460921",
            "helpful_votes": "4",
            "published_date": "2016-10-27T09:52:53-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2021",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2021"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "4.67287015914917",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "1",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#1 of 203 Restaurants in Kigali",
        "distance": "3.509009110105848",
        "distance_string": "3.5 km",
        "bearing": "east",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Opens in 21 min",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$10 - $80",
        "description": "The Hut Restaurant is one of the best newly opened restaurants in Rwanda. Our unique international cuisine that incorporates local, organic Rwandan ingredients. Our customers especially enjoy dining on our outdoor terrace with an excellent scenic view of Kigali hills. . Lunch service and daytime conferences during weekdays may be arranged with advanced reservations.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d11714486-Reviews-The_Hut-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d11714486-The_Hut-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 783 419 980",
        "website": "http://www.facebook.com/thehutrwanda/",
        "email": "thehutrwanda@gmail.com",
        "address_obj": {
            "street1": "1 KG 646 Street, Number",
            "street2": "Rugando, Kimihurura, Behind Kigali Convention Center",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": "00250"
        },
        "address": "1 KG 646 Street, Number Rugando, Kimihurura, Behind Kigali Convention Center, Kigali 00250 Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 660,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1350
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10640",
                "name": "Bar"
            },
            {
                "key": "10671",
                "name": "Fusion"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "12688822",
        "name": "Cucina Restaurant",
        "latitude": "-1.952921",
        "longitude": "30.06105",
        "num_reviews": "130",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/10/09/1b/a6/cucina-s-elegant-dining.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/10/09/1b/a6/cucina-s-elegant-dining.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2000",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/10/09/1b/a6/cucina-s-elegant-dining.jpg",
                    "height": "1335"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/10/09/1b/a6/cucina-s-elegant-dining.jpg",
                    "height": "683"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/10/09/1b/a6/cucina-s-elegant-dining.jpg",
                    "height": "367"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-07-27T04:20:30-0400",
            "caption": "Cucina's elegant dining room",
            "id": "269032358",
            "helpful_votes": "0",
            "published_date": "2017-07-27T04:20:30-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "4.6324076652526855",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "2",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#2 of 203 Restaurants in Kigali",
        "distance": "0.1486111583276786",
        "distance_string": "0.1 km",
        "bearing": "northwest",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Closed Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$6 - $30",
        "description": "Savor a taste of Italy in Kigali. Cucina offers flavorful, authentic dishes from mouthwatering pizzas to savory risottos to classic pastas. Complement your meal with a glass of wine from our international selection and be sure to save room for dessert!",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d12688822-Reviews-Cucina_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d12688822-Cucina_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 222 111 111",
        "website": "http://www.facebook.com/CucinaKigali/",
        "email": "mhrs.kglmc.ays@marriott.com",
        "address_obj": {
            "street1": "KN 3 Avenue",
            "street2": null,
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "KN 3 Avenue, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 720,
                        "close_time": 900
                    },
                    {
                        "open_time": 1020,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 900
                    },
                    {
                        "open_time": 1020,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 900
                    },
                    {
                        "open_time": 1020,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 900
                    },
                    {
                        "open_time": 1020,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 900
                    },
                    {
                        "open_time": 1020,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 900
                    },
                    {
                        "open_time": 1020,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 900
                    },
                    {
                        "open_time": 1020,
                        "close_time": 1380
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "4617",
                "name": "Italian"
            },
            {
                "key": "10641",
                "name": "Pizza"
            },
            {
                "key": "10649",
                "name": "Mediterranean"
            },
            {
                "key": "10654",
                "name": "European"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "14106473",
        "name": "Fusion Restaurant",
        "latitude": "-1.947684",
        "longitude": "30.065271",
        "num_reviews": "149",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/1c/90/0d/e1/organic-gardens-outdoor.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/1c/90/0d/e1/organic-gardens-outdoor.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1080",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/1c/90/0d/e1/organic-gardens-outdoor.jpg",
                    "height": "720"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/1c/90/0d/e1/organic-gardens-outdoor.jpg",
                    "height": "683"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/1c/90/0d/e1/organic-gardens-outdoor.jpg",
                    "height": "367"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2021-01-23T02:13:04-0500",
            "caption": "Organic gardens, outdoor seating",
            "id": "479202785",
            "helpful_votes": "1",
            "published_date": "2021-01-23T02:13:04-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2021",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2021"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "4.503740310668945",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "3",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#3 of 203 Restaurants in Kigali",
        "distance": "0.7567118465793047",
        "distance_string": "0.8 km",
        "bearing": "northeast",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$$$",
        "price": "$25 - $75",
        "description": "Fusion Restaurant is located at The Retreat, the new luxury boutique hotel in Kigali featuring farm-to-table international fusion cuisine, top-notch service, and magnificent poolside seating. From the owners of Heaven, Fusion provides Kigali visitors with a fresh new innovative menu, creative cocktails and hand-picked wines from South Africa!",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d14106473-Reviews-Fusion_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d14106473-Fusion_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 788 486 581",
        "website": "http://www.theretreatrwanda.com",
        "email": "restaurant@heavenrwanda.com",
        "address_obj": {
            "street1": "No 5 KN 29 Kiyovu",
            "street2": null,
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "No 5 KN 29 Kiyovu, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10632",
                "name": "African"
            },
            {
                "key": "10648",
                "name": "International"
            },
            {
                "key": "10671",
                "name": "Fusion"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "1011122",
        "name": "Khana Khazana",
        "latitude": "-1.947285",
        "longitude": "30.066023",
        "num_reviews": "678",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/0b/98/bb/khana-khazana-kiyovu.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/0b/98/bb/khana-khazana-kiyovu.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1008",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/16/0b/98/bb/khana-khazana-kiyovu.jpg",
                    "height": "490"
                },
                "large": {
                    "width": "1008",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/16/0b/98/bb/khana-khazana-kiyovu.jpg",
                    "height": "490"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/0b/98/bb/khana-khazana-kiyovu.jpg",
                    "height": "267"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2019-01-10T14:07:57-0500",
            "caption": "KHANA KHAZANA KIYOVU BAR",
            "id": "369858747",
            "helpful_votes": "4",
            "published_date": "2019-01-10T14:07:57-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2017",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2017"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2016",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2016"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2015",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2015"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2014",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2014"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2013",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2013_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2013"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2012",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2012_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2012"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2011",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2011_en_US-0-5.png"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2011"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "4.430956840515137",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "4",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#4 of 203 Restaurants in Kigali",
        "distance": "0.8364508001113509",
        "distance_string": "0.8 km",
        "bearing": "northeast",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Closed Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$10 - $15",
        "description": "1} Khana Khazana , The authentic Indian restaurant, An easy place to locate on 9,KN 31st, Kiyovu the third branch on your left after BNR , LUNCH-12:00 PM TO 3:30 PM- DINNER-6:00PM TO 10:30 PM 2) Khana khazana Villas & Boutique Hotel , locate on KG 9, Ave, Near (RDB ) RWANDA DEVELOPMENT BOARD, and perfect distance from the center of town to feel the escape necessary after a busy week at the office , provides just the right variant from the hustle and bustle of the center town. Khazana has the great Ambiance,surrounds garden, offer you open air dining with extremely attentive service contributed to brilliant dining experience. At a very reasonable price,The imagination of our chefs will cook for you with delicious dishes, A meal at Khazana really will leave your taste buds tingling for all the right reasons and seasons.our popular dish in starter subzi taka tin,tandoori chicken, hariyali fish, in main course chicken tikka masala,butter chicken, mutton nihari, palak paneer, nan etc",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d1011122-Reviews-Khana_Khazana-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d1011122-Khana_Khazana-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 788 499 600",
        "website": "http://www.khanakhazana.rw",
        "email": "khazanarwanda@yahoo.com",
        "address_obj": {
            "street1": "KN 31st, Kiyovu branch 1 and",
            "street2": "Kg 9 Avenue, Near Branch 2",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": "6352"
        },
        "address": "KN 31st, Kiyovu branch 1 and Kg 9 Avenue, Near Branch 2, Kigali 6352 Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 690,
                        "close_time": 1110
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1110
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1110
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1110
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1110
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1110
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1110
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10346",
                "name": "Indian"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10751",
                "name": "Halal"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10751",
                "name": "Halal"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "293829",
        "ad_position": "inline1",
        "ad_size": "8X8",
        "doubleclick_zone": "af.rwanda",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "detail": "0",
        "page_type": "restaurants",
        "mob_ptype": "app_restaurants"
    },
    {
        "location_id": "2667996",
        "name": "Repub Lounge",
        "latitude": "-1.952294",
        "longitude": "30.081387",
        "num_reviews": "399",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/0a/d8/20/2c/karibuni.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0a/d8/20/2c/karibuni.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2160",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0a/d8/20/2c/karibuni.jpg",
                    "height": "1440"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/0a/d8/20/2c/karibuni.jpg",
                    "height": "682"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0a/d8/20/2c/karibuni.jpg",
                    "height": "367"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2016-04-08T09:36:46-0400",
            "caption": "Karibuni!",
            "id": "181936172",
            "helpful_votes": "2",
            "published_date": "2016-04-08T09:37:07-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2017",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2017"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2016",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2016"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2015",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2015"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2014",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2014"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "4.4061808586120605",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "5",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#5 of 203 Restaurants in Kigali",
        "distance": "2.1481553827445325",
        "distance_string": "2.1 km",
        "bearing": "east",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Closed Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$15 - $25",
        "description": "Repub Lounge is a two-story restaurant and lounge boasting beautiful views, relaxed ambience, African cuisine, and live music. Ideal for large groups, date nights, and cocktail events. Repub Lounge: a must in Kigali.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d2667996-Reviews-Repub_Lounge-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d2667996-Repub_Lounge-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 788 388 333",
        "website": "http://republounge.com",
        "email": "info@republounge.com",
        "address_obj": {
            "street1": "# 16 KG 674 St.",
            "street2": "Kimihurura",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": ""
        },
        "address": "# 16 KG 674 St. Kimihurura, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [],
                [
                    {
                        "open_time": 720,
                        "close_time": 1440
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1440
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1440
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1440
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1440
                    }
                ],
                [
                    {
                        "open_time": 1080,
                        "close_time": 1440
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10632",
                "name": "African"
            },
            {
                "key": "10640",
                "name": "Bar"
            },
            {
                "key": "10668",
                "name": "Grill"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "1102768",
        "name": "Heaven Restaurant & Boutique Hotel",
        "latitude": "-1.946736",
        "longitude": "30.065287",
        "num_reviews": "1108",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/c2/15/7a/the-team.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/c2/15/7a/the-team.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/c2/15/7a/the-team.jpg",
                    "height": "630"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/1a/c2/15/7a/the-team.jpg",
                    "height": "504"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/c2/15/7a/the-team.jpg",
                    "height": "271"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2020-01-31T02:52:26-0500",
            "caption": "The team",
            "id": "448927098",
            "helpful_votes": "0",
            "published_date": "2020-01-31T02:52:26-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2021",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2021"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2017",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2017"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2015",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2015"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2014",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2014"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2013",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2013_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2013"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2012",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2012_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2012"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2011",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2011_en_US-0-5.png"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2011"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "4.394278526306152",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "6",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#6 of 203 Restaurants in Kigali",
        "distance": "0.8523707285533284",
        "distance_string": "0.9 km",
        "bearing": "northeast",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$$$",
        "price": "$15 - $60",
        "description": "Heaven Restaurant & Boutique Hotel is an American-owned, private, serene property opened in May of 2008 in the lovely neighborhood of Kiyovu. Started as a social enterprise to improve service levels in the hospitality sector and create employment, Heaven is consistently ranked one of the country's top restaurants with a spectacular ambience on a custom-built outdoor terrace overlooking the entire city. Since our opening, we have trained over 1,500 Rwandans. Heaven Boutique Hotel has 30 beautifully appointed hotel rooms with a salt water heated swimming pool, an open air state-of-the-art gym, ensuite private bathrooms, local artwork, free wifi, unlimited coffee/tea/purified water, 24 hour security, just steps from downtown Kigali. In addition to 30 rooms currently in operation, our 20 room luxury hotel called The Retreat is located just next door! The Retreat is a new property with 20 luxury rooms all with peaked ceilings and private outdoor terraces, a gym, spa and swimming pool!",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d1102768-Reviews-Heaven_Restaurant_Boutique_Hotel-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d1102768-Heaven_Restaurant_Boutique_Hotel-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 788 486 581",
        "website": "http://www.heavenrwanda.com/",
        "email": "restaurant@heavenrwanda.com",
        "address_obj": {
            "street1": "29 No. 7, Street KN",
            "street2": "Kiyovu",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": ""
        },
        "address": "29 No. 7, Street KN Kiyovu, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 600,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 600,
                        "close_time": 1350
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10648",
                "name": "International"
            },
            {
                "key": "10671",
                "name": "Fusion"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "6751125",
        "name": "Brachetto Restaurant",
        "latitude": "-1.941514",
        "longitude": "30.081657",
        "num_reviews": "257",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/0e/d9/96/54/dining-terrace-room.jpg",
                    "height": "141"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/d9/96/54/dining-terrace-room.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "960",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/d9/96/54/dining-terrace-room.jpg",
                    "height": "540"
                },
                "large": {
                    "width": "960",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/d9/96/54/dining-terrace-room.jpg",
                    "height": "540"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/d9/96/54/dining-terrace-room.jpg",
                    "height": "309"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-04-02T04:55:37-0400",
            "caption": "Dining terrace room ",
            "id": "249140820",
            "helpful_votes": "4",
            "published_date": "2017-04-02T04:55:37-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2017",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2017"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2016",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2016"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "4.312654972076416",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "8",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#7 of 203 Restaurants in Kigali",
        "distance": "2.561824631096822",
        "distance_string": "2.6 km",
        "bearing": "northeast",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Opens in 21 min",
        "is_long_closed": false,
        "price_level": "$$$$",
        "price": "$20 - $75",
        "description": "Brachetto Restaurant was launched in March 2014 in an effort to bring an authentic taste of the Mediterranean to Rwanda, using only the finest, freshest culinary ingredients that Rwanda has to offer. We serve modern Italian cuisine with an African twist in a cozy, classy atmosphere alongside an amazing list of premium cocktails and an unrivaled wine selection from Italy, France and South Africa. We are located in a quiet part of Kigali, in Kacyiru neighborhood where traffic is slow and external commotion is absent--only soft music will accompany you on this unique dining experience. Consequently, we are accustomed to hosting clients who prefer a peaceful, tranquil atmosphere. Our staff have remained with us from the very beginning and as a result, know just how to cater to the needs of Rwandan and International clientele with a taste for fine dining. Welcome to Brachetto and thank you for joining us!",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d6751125-Reviews-Brachetto_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d6751125-Brachetto_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 786 406 524",
        "website": "http://www.facebook.com/pages/Brachetto-Restaurant-Tapas-Bar/1410485739227980",
        "email": "brachettorwanda2@gmail.com",
        "address_obj": {
            "street1": "N 50 Kg 5 Street",
            "street2": "Near US Embassy in Kacyiru",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": "5033"
        },
        "address": "N 50 Kg 5 Street Near US Embassy in Kacyiru, Kigali 5033 Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 690,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 840
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1260
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "4617",
                "name": "Italian"
            },
            {
                "key": "10649",
                "name": "Mediterranean"
            },
            {
                "key": "10654",
                "name": "European"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "7816152",
        "name": "Poivre Noir",
        "latitude": "-1.950079",
        "longitude": "30.08109",
        "num_reviews": "143",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/0d/52/0e/58/sweet-potatoes-bliny.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0d/52/0e/58/sweet-potatoes-bliny.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "852",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0d/52/0e/58/sweet-potatoes-bliny.jpg",
                    "height": "1280"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-p/0d/52/0e/58/sweet-potatoes-bliny.jpg",
                    "height": "826"
                },
                "medium": {
                    "width": "300",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/52/0e/58/sweet-potatoes-bliny.jpg",
                    "height": "450"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2016-10-16T10:56:06-0400",
            "caption": "Sweet potatoes bliny salmon tartare and avocado, Oct 2016",
            "id": "223481432",
            "helpful_votes": "0",
            "published_date": "2016-10-16T10:56:06-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2017",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2017"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "4.239516735076904",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "9",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#8 of 203 Restaurants in Kigali",
        "distance": "2.147881797289831",
        "distance_string": "2.1 km",
        "bearing": "east",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Closed Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$7 - $15",
        "description": "",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d7816152-Reviews-Poivre_Noir-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d7816152-Poivre_Noir-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 735 823 282",
        "website": "http://www.poivrenoirkigali.com",
        "email": "poivrenoirkigali@gmail.com",
        "address_obj": {
            "street1": "2 KG 670 Number",
            "street2": "Kimihurura",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": "00000"
        },
        "address": "2 KG 670 Number Kimihurura, Kigali 00000 Rwanda",
        "hours": {
            "week_ranges": [
                [],
                [
                    {
                        "open_time": 720,
                        "close_time": 840
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1290
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 840
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1290
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 840
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1290
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 840
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1290
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 840
                    },
                    {
                        "open_time": 1080,
                        "close_time": 1290
                    }
                ],
                [
                    {
                        "open_time": 1080,
                        "close_time": 1290
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "5086",
                "name": "French"
            },
            {
                "key": "10617",
                "name": "Belgian"
            },
            {
                "key": "10648",
                "name": "International"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "12105727",
        "name": "Iriba Bar and Terrace",
        "latitude": "-1.953897",
        "longitude": "30.062412",
        "num_reviews": "109",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/0e/5b/f1/26/iriba-bar.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/5b/f1/26/iriba-bar.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1417",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/5b/f1/26/iriba-bar.jpg",
                    "height": "946"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/0e/5b/f1/26/iriba-bar.jpg",
                    "height": "684"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/5b/f1/26/iriba-bar.jpg",
                    "height": "367"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-02-06T10:28:41-0500",
            "caption": "Iriba bar",
            "id": "240906534",
            "helpful_votes": "0",
            "published_date": "2017-02-06T10:28:41-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "4.145320415496826",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "10",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#9 of 203 Restaurants in Kigali",
        "distance": "0.03784639539153525",
        "distance_string": "37 m",
        "bearing": "southeast",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$3 - $15",
        "description": "With specialty coffee and convenient to-go snacks, as well as delicious lunch offerings and unfailingly friendly service, Iriba Bar & Terrace provides a contemporary social hub for both hotel guests and Kigali residents.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d12105727-Reviews-Iriba_Bar_and_Terrace-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d12105727-Iriba_Bar_and_Terrace-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "cafe",
                "name": "Café"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 222 111 111",
        "website": "http://www.marriott.com/hotels/travel/kglmc-kigali-marriott-hotel/",
        "email": "mhrs.kglmc.ays@marriott.com",
        "address_obj": {
            "street1": "KN 3 Avenue",
            "street2": "Nyarugenge District",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "KN 3 Avenue Nyarugenge District, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 420,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1500
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1560
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1560
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10640",
                "name": "Bar"
            },
            {
                "key": "10682",
                "name": "Wine Bar"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "4600174",
        "name": "L'epicurien",
        "latitude": "-1.953908",
        "longitude": "30.080978",
        "num_reviews": "157",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/11/1f/cf/47/nouvelle-decoration-soiree.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/11/1f/cf/47/nouvelle-decoration-soiree.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2000",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/11/1f/cf/47/nouvelle-decoration-soiree.jpg",
                    "height": "1333"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/11/1f/cf/47/nouvelle-decoration-soiree.jpg",
                    "height": "682"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/11/1f/cf/47/nouvelle-decoration-soiree.jpg",
                    "height": "367"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-10-30T06:07:50-0400",
            "caption": "Nouvelle décoration. Soirée romantique ou entre amis",
            "id": "287297351",
            "helpful_votes": "3",
            "published_date": "2017-10-30T06:07:50-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2017",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2017"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2016",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2016"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2015",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2015"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.941710948944092",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "14",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#12 of 203 Restaurants in Kigali",
        "distance": "2.0970528189963944",
        "distance_string": "2.1 km",
        "bearing": "east",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Closed Now",
        "is_long_closed": false,
        "price_level": "$$$$",
        "description": "",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d4600174-Reviews-L_epicurien-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d4600174-L_epicurien-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 789 175 868",
        "website": "http://www.epicurien-kigali.com",
        "address_obj": {
            "street1": "56 Rue Umutekano, Kimihurura",
            "street2": "",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "56 Rue Umutekano, Kimihurura, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 690,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1080
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1080
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "5086",
                "name": "French"
            },
            {
                "key": "10654",
                "name": "European"
            },
            {
                "key": "10683",
                "name": "Gastropub"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "293829",
        "ad_position": "inline2",
        "ad_size": "8X8",
        "doubleclick_zone": "af.rwanda",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "detail": "0",
        "page_type": "restaurants",
        "mob_ptype": "app_restaurants"
    },
    {
        "location_id": "15666049",
        "name": "Lavana",
        "latitude": "-1.959851",
        "longitude": "30.083511",
        "num_reviews": "57",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/16/c4/4b/bb/blue-mushroom-pizza-mushrooms.jpg",
                    "height": "141"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/c4/4b/bb/blue-mushroom-pizza-mushrooms.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1180",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/16/c4/4b/bb/blue-mushroom-pizza-mushrooms.jpg",
                    "height": "665"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/16/c4/4b/bb/blue-mushroom-pizza-mushrooms.jpg",
                    "height": "577"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/c4/4b/bb/blue-mushroom-pizza-mushrooms.jpg",
                    "height": "310"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2019-03-12T12:39:47-0400",
            "caption": "Blue Mushroom Pizza. Mushrooms, caramelized onion, blue cheese, white sauce, truffle oil.",
            "id": "381963195",
            "helpful_votes": "1",
            "published_date": "2019-03-12T12:39:47-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2021",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2021"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.9053401947021484",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "15",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#13 of 203 Restaurants in Kigali",
        "distance": "2.474830949501449",
        "distance_string": "2.5 km",
        "bearing": "east",
        "rating": "5.0",
        "is_closed": false,
        "open_now_text": "Closed Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$5 - $18",
        "description": "Artisan-style pizza cooked in our beautiful wood burning oven. Menu also includes eclectic Street Food from around the globe as well as a the only Mexican Food in Kigali. Taco Tuesday & A Movie on Rwanda's biggest HD Screen in the dining room theater. Watch NFL, NBA, Football (all leagues), Rugby, and MLB in our lounge or on the big screen in the dining theater. Live Music every Friday Night. Spoken Word Night the last Thursday of the month. Private Event and Meeting Space. Mondays are closed to the public but open to service a different children's charity.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d15666049-Reviews-Lavana-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d15666049-Lavana-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 782 062 653",
        "website": "http://www.lavanarwanda.com",
        "email": "info@lavanarwanda.com",
        "address_obj": {
            "street1": "No. 68 KG 28 Ave",
            "street2": "",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "No. 68 KG 28 Ave, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 600,
                        "close_time": 1440
                    }
                ],
                [],
                [
                    {
                        "open_time": 720,
                        "close_time": 1440
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1440
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1440
                    }
                ],
                [
                    {
                        "open_time": 600,
                        "close_time": 1440
                    }
                ],
                [
                    {
                        "open_time": 600,
                        "close_time": 1440
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10632",
                "name": "African"
            },
            {
                "key": "10641",
                "name": "Pizza"
            },
            {
                "key": "10640",
                "name": "Bar"
            },
            {
                "key": "5110",
                "name": "Mexican"
            },
            {
                "key": "10671",
                "name": "Fusion"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "1910298",
        "name": "New Cactus",
        "latitude": "-1.955769",
        "longitude": "30.06553",
        "num_reviews": "208",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/01/af/ec/27/new-cactus.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/01/af/ec/27/new-cactus.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "4000",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/01/af/ec/27/new-cactus.jpg",
                    "height": "3000"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/af/ec/27/new-cactus.jpg",
                    "height": "412"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/01/af/ec/27/new-cactus.jpg",
                    "height": "187"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2010-10-17T13:17:09-0400",
            "caption": "New Cactus",
            "id": "28306471",
            "helpful_votes": "3",
            "published_date": "2010-10-18T18:20:56-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2017",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2017"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2015",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2015"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2014",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2014"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2013",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2013_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2013"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.878542184829712",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "17",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#14 of 203 Restaurants in Kigali",
        "distance": "0.4424601683549477",
        "distance_string": "0.4 km",
        "bearing": "southeast",
        "rating": "4.0",
        "is_closed": false,
        "open_now_text": "Closed Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "description": "Tel, Info: 572 572",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d1910298-Reviews-New_Cactus-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d1910298-New_Cactus-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 788 678 798",
        "website": "http://www.facebook.com/New-Cactus-384697928373941/",
        "email": "new.cactus@yahoo.fr",
        "address_obj": {
            "street1": "Rue Depute Kayuku Kiyovu",
            "street2": "",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": ""
        },
        "address": "Rue Depute Kayuku Kiyovu, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 720,
                        "close_time": 1335
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1335
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1335
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1335
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1335
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1335
                    }
                ],
                [
                    {
                        "open_time": 720,
                        "close_time": 1335
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10654",
                "name": "European"
            },
            {
                "key": "4617",
                "name": "Italian"
            },
            {
                "key": "10641",
                "name": "Pizza"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "12105723",
        "name": "Soko Restaurant",
        "latitude": "-1.953757",
        "longitude": "30.062113",
        "num_reviews": "74",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/f7/a7/dc/pastries-desserts-and.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/f7/a7/dc/pastries-desserts-and.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2000",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/f7/a7/dc/pastries-desserts-and.jpg",
                    "height": "1335"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/0f/f7/a7/dc/pastries-desserts-and.jpg",
                    "height": "683"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/f7/a7/dc/pastries-desserts-and.jpg",
                    "height": "367"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-07-21T07:25:03-0400",
            "caption": "Pastries, desserts, and other sweet items at Soko's buffet",
            "id": "267888604",
            "helpful_votes": "5",
            "published_date": "2017-07-21T07:25:03-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.818256139755249",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "18",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#15 of 203 Restaurants in Kigali",
        "distance": "0.0051286610411404405",
        "distance_string": "5 m",
        "bearing": "south",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$19 - $40",
        "description": "This vibrant restaurant features all-day dining with live \"cooking theatres\" in a bright, airy atrium style environment. Both buffet and a la carte dishes are available. Be sure to dine out on the terrace!",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d12105723-Reviews-Soko_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d12105723-Soko_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 222 111 111",
        "website": "http://www.marriott.com/hotels/travel/kglmc-kigali-marriott-hotel/",
        "email": "mhrs.kglmc.ays@marriott.com",
        "address_obj": {
            "street1": "KN 3 Avenue",
            "street2": "Nyarugenge District",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "KN 3 Avenue Nyarugenge District, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 390,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 390,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 390,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 390,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 390,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 390,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 390,
                        "close_time": 1380
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10648",
                "name": "International"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "1536452",
        "name": "Shokola",
        "latitude": "-1.934633",
        "longitude": "30.078796",
        "num_reviews": "171",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/11/66/15/b5/shokola-at-kigali-public.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/11/66/15/b5/shokola-at-kigali-public.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2000",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/11/66/15/b5/shokola-at-kigali-public.jpg",
                    "height": "1286"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/11/66/15/b5/shokola-at-kigali-public.jpg",
                    "height": "658"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/11/66/15/b5/shokola-at-kigali-public.jpg",
                    "height": "354"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-11-29T13:38:12-0500",
            "caption": "Shokola at Kigali Public Library Rooftop, Kacyiru",
            "id": "291902901",
            "helpful_votes": "4",
            "published_date": "2017-11-29T13:38:12-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2017",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2017"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2016",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2016"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2015",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2015"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2013",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2013_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2013"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2011",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2011_en_US-0-5.png"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2011"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.7928307056427",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "19",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#16 of 203 Restaurants in Kigali",
        "distance": "2.8191281961680392",
        "distance_string": "2.8 km",
        "bearing": "northeast",
        "rating": "4.0",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$1",
        "description": "More than just a coffee shop",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d1536452-Reviews-Shokola-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d1536452-Shokola-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 788 350 530",
        "website": "http://www.facebook.com/ShokolaCafe/",
        "email": "shokola.cafe@gmail.com",
        "address_obj": {
            "street1": "Kacyiru: Rooftop, Kigali Public Library \\\\ Kimihurura Opp",
            "street2": "Kacyiru",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": ""
        },
        "address": "Kacyiru: Rooftop, Kigali Public Library \\\\ Kimihurura Opp Kacyiru, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 450,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 450,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 450,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 450,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 450,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 450,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 450,
                        "close_time": 1260
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10642",
                "name": "Cafe"
            },
            {
                "key": "10648",
                "name": "International"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "1718878",
        "name": "Zaaffran Restaurant",
        "latitude": "-1.94741",
        "longitude": "30.06871",
        "num_reviews": "118",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/07/94/7e/00/mutton-vindaloo.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/07/94/7e/00/mutton-vindaloo.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "640",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/07/94/7e/00/mutton-vindaloo.jpg",
                    "height": "480"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/07/94/7e/00/mutton-vindaloo.jpg",
                    "height": "412"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/07/94/7e/00/mutton-vindaloo.jpg",
                    "height": "187"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2015-03-25T16:25:56-0400",
            "caption": "Mutton Vindaloo",
            "id": "127172096",
            "helpful_votes": "1",
            "published_date": "2015-03-31T07:22:37-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2017",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2017"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2015",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2015"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.6410510540008545",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "25",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#21 of 203 Restaurants in Kigali",
        "distance": "1.0141186916547056",
        "distance_string": "1 km",
        "bearing": "northeast",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Closed Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$15 - $25",
        "description": "Welcome to Zaaffran for mouthwatering cuisine...lovingly prepared with Leapingly fresh herbs and spices.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d1718878-Reviews-Zaaffran_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d1718878-Zaaffran_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 783 042 504",
        "email": "zaaffran.rwanda@yahoo.com",
        "address_obj": {
            "street1": "Rue de l'Akagera",
            "street2": "Kiyovu, near Le Bonne Source Market",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": ""
        },
        "address": "Rue de l'Akagera Kiyovu, near Le Bonne Source Market, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 690,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1350
                    }
                ],
                [
                    {
                        "open_time": 690,
                        "close_time": 1350
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10346",
                "name": "Indian"
            },
            {
                "key": "11744",
                "name": "Arabic"
            },
            {
                "key": "10659",
                "name": "Asian"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "11978329",
        "name": "Java House Kigali Heights",
        "latitude": "-1.952867",
        "longitude": "30.092684",
        "num_reviews": "84",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/0f/97/b9/d0/java-house.jpg",
                    "height": "141"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/97/b9/d0/java-house.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/0f/97/b9/d0/java-house.jpg",
                    "height": "576"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/97/b9/d0/java-house.jpg",
                    "height": "576"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/97/b9/d0/java-house.jpg",
                    "height": "309"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-06-16T15:48:27-0400",
            "caption": "Java House",
            "id": "261601744",
            "helpful_votes": "2",
            "published_date": "2017-06-16T15:48:27-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.580183506011963",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "28",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#23 of 203 Restaurants in Kigali",
        "distance": "3.4002406571014028",
        "distance_string": "3.4 km",
        "bearing": "east",
        "rating": "4.0",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$3,000 - $9,800",
        "description": "",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d11978329-Reviews-Java_House_Kigali_Heights-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d11978329-Java_House_Kigali_Heights-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "cafe",
                "name": "Café"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 788 381 132",
        "website": "http://javahouseafrica.com/",
        "email": "guest.relations@javahouseafrica.com",
        "address_obj": {
            "street1": "Kigali Heights",
            "street2": "KG 7 Ave",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "Kigali Heights KG 7 Ave, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 390,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 390,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 390,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 390,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10679",
                "name": "Healthy"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "293829",
        "ad_position": "inline3",
        "ad_size": "8X8",
        "doubleclick_zone": "af.rwanda",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "detail": "0",
        "page_type": "restaurants",
        "mob_ptype": "app_restaurants"
    },
    {
        "location_id": "1498890",
        "name": "Lalibela Ethiopian Restaurant",
        "latitude": "-1.94594",
        "longitude": "30.07929",
        "num_reviews": "120",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/09/73/92/f9/lalibela-ethiopian-restaurant.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/09/73/92/f9/lalibela-ethiopian-restaurant.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1600",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/09/73/92/f9/lalibela-ethiopian-restaurant.jpg",
                    "height": "1200"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/09/73/92/f9/lalibela-ethiopian-restaurant.jpg",
                    "height": "412"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/09/73/92/f9/lalibela-ethiopian-restaurant.jpg",
                    "height": "188"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2015-11-07T12:22:34-0500",
            "caption": "Presentación Plato",
            "id": "158569209",
            "helpful_votes": "0",
            "published_date": "2015-11-07T12:22:34-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2015",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2015"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2014",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2014"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2013",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2013_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2013"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.526606798171997",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "29",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#24 of 203 Restaurants in Kigali",
        "distance": "2.096037906159917",
        "distance_string": "2.1 km",
        "bearing": "northeast",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "description": "",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d1498890-Reviews-Lalibela_Ethiopian_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d1498890-Lalibela_Ethiopian_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 788 505 293",
        "website": "http://lalibelaethiopianrestaurantkigali.com",
        "address_obj": {
            "street1": "Avenue Lac Muhazi - Kimihurura",
            "street2": "Remera",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": "250"
        },
        "address": "Avenue Lac Muhazi - Kimihurura Remera, Kigali 250 Rwanda",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10632",
                "name": "African"
            },
            {
                "key": "10785",
                "name": "Ethiopian"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "13562070",
        "name": "Now Now Rolex",
        "latitude": "-1.951144",
        "longitude": "30.084496",
        "num_reviews": "29",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/77/53/51/nighttime-now-now.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/77/53/51/nighttime-now-now.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/77/53/51/nighttime-now-now.jpg",
                    "height": "853"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/16/77/53/51/nighttime-now-now.jpg",
                    "height": "683"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/77/53/51/nighttime-now-now.jpg",
                    "height": "367"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2019-02-14T16:41:51-0500",
            "caption": "Nighttime Now Now",
            "id": "376918865",
            "helpful_votes": "1",
            "published_date": "2019-02-14T16:41:51-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.525230646133423",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "30",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#25 of 203 Restaurants in Kigali",
        "distance": "2.50452958608845",
        "distance_string": "2.5 km",
        "bearing": "east",
        "rating": "4.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "price": "$2,000 - $5,000",
        "description": "Ugandan street food with international flavors, plus imported beers from Belgium & Mexico. Try the classic Ugandan rolex - a chapati wrap with omelette and fresh vegetables - or one of the international twists: French (brie, caramelized onion), Mexican (chili con carne, salsa, guacamole), Rwandan (filet steak, beans, kachumbari, chips), and more! Finish with a Tripel Karmeliet, Duvel, or Corona",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d13562070-Reviews-Now_Now_Rolex-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d13562070-Now_Now_Rolex-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "fast_food",
                "name": "Fast food"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 780 458 158",
        "website": "https://www.facebook.com/NowNowRolex/",
        "email": "rolexnownow@gmail.com",
        "address_obj": {
            "street1": "2 KG2 Ave",
            "street2": null,
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "2 KG2 Ave, Kigali Rwanda",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10632",
                "name": "African"
            },
            {
                "key": "10686",
                "name": "Street Food"
            },
            {
                "key": "10646",
                "name": "Fast Food"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "10838128",
        "name": "Bamboo Rooftop Restaurant",
        "latitude": "-1.943339",
        "longitude": "30.058725",
        "num_reviews": "110",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/0d/08/ce/3b/caption.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0d/08/ce/3b/caption.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1632",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0d/08/ce/3b/caption.jpg",
                    "height": "1224"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/08/ce/3b/caption.jpg",
                    "height": "412"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/0d/08/ce/3b/caption.jpg",
                    "height": "188"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2016-09-20T17:45:08-0400",
            "caption": "餐厅美景",
            "id": "218680891",
            "helpful_votes": "1",
            "published_date": "2016-09-20T17:45:08-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2020",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2020"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2019",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2019"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.4975411891937256",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "32",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#27 of 203 Restaurants in Kigali",
        "distance": "1.2149572557074089",
        "distance_string": "1.2 km",
        "bearing": "north",
        "rating": "4.0",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$5 - $20",
        "description": "",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d10838128-Reviews-Bamboo_Rooftop_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d10838128-Bamboo_Rooftop_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 252 577 077",
        "website": "http://www.2000hotel.com",
        "email": "reservation@2000hotel.com",
        "address_obj": {
            "street1": "5th Floor 2000 1,Kigali Building,KN82 St",
            "street2": "2000 Building",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "5th Floor 2000 1,Kigali Building,KN82 St 2000 Building, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1380
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "5379",
                "name": "Chinese"
            },
            {
                "key": "10659",
                "name": "Asian"
            },
            {
                "key": "10679",
                "name": "Healthy"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "15848710",
        "name": "Soy Asian Table",
        "latitude": "-1.947371",
        "longitude": "30.078405",
        "num_reviews": "36",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/50/c8/08/braised-beef-brisket.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/50/c8/08/braised-beef-brisket.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1080",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/16/50/c8/08/braised-beef-brisket.jpg",
                    "height": "1068"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/16/50/c8/08/braised-beef-brisket.jpg",
                    "height": "1013"
                },
                "medium": {
                    "width": "455",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/50/c8/08/braised-beef-brisket.jpg",
                    "height": "450"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2019-02-01T14:22:34-0500",
            "caption": "Braised Beef Brisket",
            "id": "374392840",
            "helpful_votes": "0",
            "published_date": "2019-02-01T14:22:34-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.4915480613708496",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "33",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#28 of 203 Restaurants in Kigali",
        "distance": "1.943449075250293",
        "distance_string": "1.9 km",
        "bearing": "east",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Opens in 21 min",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$10",
        "description": "Kigali's finest South East Asian Cuisine. We offer a range of signature cocktails delicately paired with our homemade dim sums. Located in the heart of the vibrant city of Kigali with amazing city views from our Bar.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d15848710-Reviews-Soy_Asian_Table-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d15848710-Soy_Asian_Table-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 789 099 859",
        "website": "http://www.soyasiantablekigali.squarespace.com",
        "email": "melanie@soyasiantable.com",
        "address_obj": {
            "street1": "# 37 KN 14 Ave",
            "street2": "Kimihurura",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "# 37 KN 14 Ave Kimihurura, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 600,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 660,
                        "close_time": 1380
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10659",
                "name": "Asian"
            },
            {
                "key": "5379",
                "name": "Chinese"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "1011120",
        "name": "Royal Papyrus Restaurant",
        "latitude": "-1.952494",
        "longitude": "30.081362",
        "num_reviews": "155",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/58/25/bd/royal-papyrus-restaurant.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/58/25/bd/royal-papyrus-restaurant.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/58/25/bd/royal-papyrus-restaurant.jpg",
                    "height": "848"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/21/58/25/bd/royal-papyrus-restaurant.jpg",
                    "height": "678"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/58/25/bd/royal-papyrus-restaurant.jpg",
                    "height": "364"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2021-11-06T09:50:47-0400",
            "caption": "Royal Papyrus Restaurant",
            "id": "559424957",
            "helpful_votes": "1",
            "published_date": "2021-11-06T09:50:47-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            },
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2017",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2017"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.468017578125",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "36",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#30 of 203 Restaurants in Kigali",
        "distance": "2.1438809354694843",
        "distance_string": "2.1 km",
        "bearing": "east",
        "rating": "4.0",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "description": "An Oriental and Italian restaurant providing services ranging from bar, cocktails, conferences, to catering.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d1011120-Reviews-Royal_Papyrus_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d1011120-Royal_Papyrus_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 788 720 260",
        "website": "http://papyrusrestaurant.com/",
        "email": "info@papyrusrestaurant.com",
        "address_obj": {
            "street1": "674 St Kg",
            "street2": "Papyrus Building, Kimihurura",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "674 St Kg Papyrus Building, Kimihurura, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [],
                [
                    {
                        "open_time": 540,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 1260
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10659",
                "name": "Asian"
            },
            {
                "key": "10651",
                "name": "Barbecue"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "4574269",
        "name": "The Bistro",
        "latitude": "-1.948946",
        "longitude": "30.068974",
        "num_reviews": "97",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/05/2d/7e/3e/the-bistro.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/05/2d/7e/3e/the-bistro.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "640",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/05/2d/7e/3e/the-bistro.jpg",
                    "height": "480"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/05/2d/7e/3e/the-bistro.jpg",
                    "height": "412"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/05/2d/7e/3e/the-bistro.jpg",
                    "height": "187"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2013-12-27T01:53:16-0500",
            "caption": "Dinning Arrangement",
            "id": "86867518",
            "helpful_votes": "0",
            "published_date": "2013-12-27T01:53:16-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2016",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2016"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.4439642429351807",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "38",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#32 of 203 Restaurants in Kigali",
        "distance": "0.928203368045998",
        "distance_string": "0.9 km",
        "bearing": "northeast",
        "rating": "4.0",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "description": "We are a rooftop restaurant with a beautiful view located in Urban by CityBlue hotel. We serve continental food and our known for our high quality steaks, burgers and other mouth watering dishes",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d4574269-Reviews-The_Bistro-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d4574269-The_Bistro-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 786 999 999",
        "website": "https://www.citybluehotels.com/restaurants/the-bistro/",
        "email": "urban.kigali@citybluehotels.com",
        "address_obj": {
            "street1": "51 St Kn",
            "street2": null,
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "51 St Kn, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 360,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 360,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 360,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 360,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 360,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 360,
                        "close_time": 1380
                    }
                ],
                [
                    {
                        "open_time": 360,
                        "close_time": 1380
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10654",
                "name": "European"
            },
            {
                "key": "10345",
                "name": "Steakhouse"
            },
            {
                "key": "10640",
                "name": "Bar"
            },
            {
                "key": "10648",
                "name": "International"
            },
            {
                "key": "10670",
                "name": "Pub"
            },
            {
                "key": "10682",
                "name": "Wine Bar"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "1910907",
        "name": "Chez Robert",
        "latitude": "-1.947022",
        "longitude": "30.063335",
        "num_reviews": "125",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/01/af/ed/39/steak-with-pommes-frites.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/01/af/ed/39/steak-with-pommes-frites.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/af/ed/39/steak-with-pommes-frites.jpg",
                    "height": "412"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/af/ed/39/steak-with-pommes-frites.jpg",
                    "height": "412"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/01/af/ed/39/steak-with-pommes-frites.jpg",
                    "height": "187"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2010-10-17T13:45:43-0400",
            "caption": "Steak with Pommes Frites",
            "id": "28306745",
            "helpful_votes": "1",
            "published_date": "2010-10-21T10:56:36-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2014",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2014"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.3940184116363525",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "41",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#34 of 203 Restaurants in Kigali",
        "distance": "0.7567229633031247",
        "distance_string": "0.8 km",
        "bearing": "north",
        "rating": "3.5",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "description": "",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d1910907-Reviews-Chez_Robert-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d1910907-Chez_Robert-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "Ave de la Republique City Centre",
            "street2": "",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": ""
        },
        "address": "Ave de la Republique City Centre, Kigali Rwanda",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10632",
                "name": "African"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "13509708",
        "name": "Borneo Indonesian Resturant",
        "latitude": "-1.95227",
        "longitude": "30.08615",
        "num_reviews": "20",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/19/e1/f5/a9/satay-ayam-with-yummi.jpg",
                    "height": "141"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/19/e1/f5/a9/satay-ayam-with-yummi.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "960",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/19/e1/f5/a9/satay-ayam-with-yummi.jpg",
                    "height": "540"
                },
                "large": {
                    "width": "960",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/19/e1/f5/a9/satay-ayam-with-yummi.jpg",
                    "height": "540"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/19/e1/f5/a9/satay-ayam-with-yummi.jpg",
                    "height": "309"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2019-10-31T16:08:39-0400",
            "caption": "satay ayam with yummi peanuts souase",
            "id": "434238889",
            "helpful_votes": "0",
            "published_date": "2019-10-31T16:08:39-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.391115427017212",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "42",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#35 of 203 Restaurants in Kigali",
        "distance": "2.6769153336748617",
        "distance_string": "2.7 km",
        "bearing": "east",
        "rating": "5.0",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$",
        "description": "Restaurant Mobile food & beverages services at kacyiru Kigali city. That was born out of a dream and passion, established since July 05, 2017 at Kigali especially for Indonesian, Chinese and Indian culinary. With our skills and Rich experience of over 10 years in the field of hospitality industry, in our products we also offer efficient, reliable , delivery and catering services. All our products are cooked using only the freshets and finest ingredients, with taste and elegance, providing and excellent eating experience.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d13509708-Reviews-Borneo_Indonesian_Resturant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d13509708-Borneo_Indonesian_Resturant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 785 775 703",
        "website": "https://www.facebook.com/borneocoffeeresto/",
        "email": "borneo.limited@yahoo.com",
        "address_obj": {
            "street1": "18 KG 4 Ave",
            "street2": null,
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "18 KG 4 Ave, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 0,
                        "close_time": 1320
                    }
                ],
                [],
                [
                    {
                        "open_time": 600,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 600,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 600,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 600,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 0,
                        "close_time": 1320
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10659",
                "name": "Asian"
            },
            {
                "key": "10690",
                "name": "Indonesian"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "10326647",
        "name": "Camellia Restaurant",
        "latitude": "-1.949451",
        "longitude": "30.060106",
        "num_reviews": "42",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/10/53/0e/b3/fish-fillet-with-rice.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/10/53/0e/b3/fish-fillet-with-rice.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1080",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/10/53/0e/b3/fish-fillet-with-rice.jpg",
                    "height": "733"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/10/53/0e/b3/fish-fillet-with-rice.jpg",
                    "height": "695"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/10/53/0e/b3/fish-fillet-with-rice.jpg",
                    "height": "373"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-08-18T08:50:51-0400",
            "caption": "Fish fillet with rice and fries and veggie salad",
            "id": "273878707",
            "helpful_votes": "6",
            "published_date": "2017-08-18T08:50:51-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.388946533203125",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "43",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#36 of 203 Restaurants in Kigali",
        "distance": "0.524854811504334",
        "distance_string": "0.5 km",
        "bearing": "northwest",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "description": "",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d10326647-Reviews-Camellia_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d10326647-Camellia_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 780 007 773",
        "address_obj": {
            "street1": "16 KN 3 Avenue",
            "street2": null,
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "16 KN 3 Avenue, Kigali Rwanda",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "13332335",
        "name": "CasaKeza",
        "latitude": "-1.937625",
        "longitude": "30.088545",
        "num_reviews": "22",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/19/5a/10/14/garden-at-casa-keza.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/19/5a/10/14/garden-at-casa-keza.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/5a/10/14/garden-at-casa-keza.jpg",
                    "height": "960"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/19/5a/10/14/garden-at-casa-keza.jpg",
                    "height": "413"
                },
                "medium": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/19/5a/10/14/garden-at-casa-keza.jpg",
                    "height": "188"
                }
            },
            "is_blessed": false,
            "uploaded_date": "2019-09-22T12:54:32-0400",
            "caption": "Garden at Casa Keza",
            "id": "425332756",
            "helpful_votes": "0",
            "published_date": "2019-09-22T12:54:32-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.357271432876587",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "46",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#38 of 203 Restaurants in Kigali",
        "distance": "3.441092102034143",
        "distance_string": "3.4 km",
        "bearing": "northeast",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Closed Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "description": "",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d13332335-Reviews-CasaKeza-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d13332335-CasaKeza-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 788 382 581",
        "website": "http://web.facebook.com/casakeza/",
        "email": "hello@casakeza.com",
        "address_obj": {
            "street1": "4 KG573 number",
            "street2": null,
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "4 KG573 number, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 480,
                        "close_time": 600
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 600
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 600
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 600
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 600
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 600
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 600
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10649",
                "name": "Mediterranean"
            },
            {
                "key": "10640",
                "name": "Bar"
            },
            {
                "key": "10655",
                "name": "Spanish"
            },
            {
                "key": "10670",
                "name": "Pub"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "11760499",
        "name": "KISEKI Authentic Japanese Restaurant",
        "latitude": "-1.954243",
        "longitude": "30.081507",
        "num_reviews": "58",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/0e/f3/12/52/the-restaurant-outside.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/f3/12/52/the-restaurant-outside.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "2000",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/f3/12/52/the-restaurant-outside.jpg",
                    "height": "1333"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/0e/f3/12/52/the-restaurant-outside.jpg",
                    "height": "682"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/f3/12/52/the-restaurant-outside.jpg",
                    "height": "367"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-04-12T13:25:24-0400",
            "caption": "The Restaurant (outside evening)",
            "id": "250810962",
            "helpful_votes": "0",
            "published_date": "2017-04-12T13:25:24-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [
            {
                "award_type": "CERTIFICATE_OF_EXCELLENCE",
                "year": "2018",
                "images": {
                    "small": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    "large": "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg"
                },
                "categories": [],
                "display_name": "Certificate of Excellence 2018"
            }
        ],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.356151819229126",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "47",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#39 of 203 Restaurants in Kigali",
        "distance": "2.1565140996716003",
        "distance_string": "2.2 km",
        "bearing": "east",
        "rating": "4.0",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$5 - $30",
        "description": "Our signature is \"Japanese and Rwandan Lunch 5,000rwf buffet\". All you can eat as much as you need. Vegetable sushi, tempura, teppanyaki, fried rice, okonomiyaki, fried noodle, fried vegetable, soup, ramen, salad, rwandan vegetalian food, dish of the day... For a la carte menu, we have one of the best GYOZA in Africa! All food 2500rwf/5000rwf. We have Japanese chef , Japanese manager, family, staff...",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d11760499-Reviews-KISEKI_Authentic_Japanese_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d11760499-KISEKI_Authentic_Japanese_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 781 403 829",
        "website": "http://www.kisekirwanda.com",
        "email": "info@kisekirwanda.com",
        "address_obj": {
            "street1": "No 2 KG680 Kimihurura",
            "street2": "Across the street from Mamba Club",
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "No 2 KG680 Kimihurura Across the street from Mamba Club, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [],
                [
                    {
                        "open_time": 540,
                        "close_time": 900
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 900
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 900
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 900
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 900
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 900
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "5473",
                "name": "Japanese"
            },
            {
                "key": "10653",
                "name": "Sushi"
            },
            {
                "key": "10659",
                "name": "Asian"
            },
            {
                "key": "10643",
                "name": "Seafood"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            },
            {
                "key": "10697",
                "name": "Vegan Options"
            },
            {
                "key": "10992",
                "name": "Gluten Free Options"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "3422165",
        "name": "Sundowner",
        "latitude": "-1.950906",
        "longitude": "30.083956",
        "num_reviews": "38",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/10/8d/ad/fb/sundowner.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/10/8d/ad/fb/sundowner.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "3024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/10/8d/ad/fb/sundowner.jpg",
                    "height": "5376"
                },
                "large": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-p/10/8d/ad/fb/sundowner.jpg",
                    "height": "978"
                },
                "medium": {
                    "width": "253",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/10/8d/ad/fb/sundowner.jpg",
                    "height": "450"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2017-09-05T12:18:17-0400",
            "caption": "Sundowner",
            "id": "277720571",
            "helpful_votes": "0",
            "published_date": "2017-09-05T12:18:17-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.3372533321380615",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "49",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#40 of 203 Restaurants in Kigali",
        "distance": "2.448130064839441",
        "distance_string": "2.4 km",
        "bearing": "east",
        "rating": "4.0",
        "is_closed": false,
        "is_long_closed": false,
        "price_level": "$",
        "description": "",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d3422165-Reviews-Sundowner-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d3422165-Sundowner-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "address_obj": {
            "street1": "Kimihururu",
            "street2": null,
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "Kimihururu, Kigali Rwanda",
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10632",
                "name": "African"
            },
            {
                "key": "10641",
                "name": "Pizza"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "11776",
                "name": "Bars & Pubs"
            },
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "15189476",
        "name": "Terra Restaurant & Grill",
        "latitude": "-1.939459",
        "longitude": "30.09065",
        "num_reviews": "16",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "150",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-l/14/f6/da/3c/garden-with-shade.jpg",
                    "height": "150"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/14/f6/da/3c/garden-with-shade.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1280",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/f6/da/3c/garden-with-shade.jpg",
                    "height": "850"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/14/f6/da/3c/garden-with-shade.jpg",
                    "height": "680"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/14/f6/da/3c/garden-with-shade.jpg",
                    "height": "365"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2018-10-07T07:31:09-0400",
            "caption": "Garden with shade",
            "id": "351722044",
            "helpful_votes": "0",
            "published_date": "2018-10-07T07:31:09-0400",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.30491304397583",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "52",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#42 of 203 Restaurants in Kigali",
        "distance": "3.5472899305605963",
        "distance_string": "3.5 km",
        "bearing": "northeast",
        "rating": "4.5",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$7 - $700",
        "description": "At Terra Restaurant & Grill we combine our passion for the The great test of Lebanese and Middle Eastern Cuisine, high quality Italian illy® coffee and a cozy, familiar atmosphere. We offer a variety of authentic Lebanese dishes, freshly made by our chef, which bring numerous Arabic ingredients, flavours and spices to our beautiful location in the heart of Kigali. You should also not miss out on our fresh smoothies and juices made with local fruit or a good cup of Italian illy® coffee. In fact, we are the first ones to serve this famous Italian brand here in Rwanda. Along with all our delicious treats you can enjoy the view over the lush hills of Kigali and the nearby golf course in our spacious green garden. At night, a cozy fireplace lights up our garden and we invite our customers to join us in the long, warm Kigali nights at Terra Restaurant & Grill. We are looking forward to serving to you at our terrace at Terra Restaurant & Grill.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d15189476-Reviews-Terra_Restaurant_Grill-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d15189476-Terra_Restaurant_Grill-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 787 712 302",
        "website": "http://www.facebook.com/TerraCaffeRwanda",
        "email": "teerracaffe@gmail.com",
        "address_obj": {
            "street1": "548 St N44 Kg",
            "street2": null,
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": null
        },
        "address": "548 St N44 Kg, Kigali Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 540,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 480,
                        "close_time": 1260
                    }
                ],
                [
                    {
                        "open_time": 540,
                        "close_time": 1320
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10626",
                "name": "Lebanese"
            },
            {
                "key": "10687",
                "name": "Middle Eastern"
            },
            {
                "key": "4617",
                "name": "Italian"
            },
            {
                "key": "10641",
                "name": "Pizza"
            },
            {
                "key": "10649",
                "name": "Mediterranean"
            },
            {
                "key": "11744",
                "name": "Arabic"
            }
        ],
        "dietary_restrictions": [],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    },
    {
        "location_id": "12495066",
        "name": "German Butchery (Shop and Restaurant)",
        "latitude": "-1.952054",
        "longitude": "30.057861",
        "num_reviews": "28",
        "timezone": "Africa/Kigali",
        "location_string": "Kigali, Kigali Province",
        "photo": {
            "images": {
                "small": {
                    "width": "250",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-f/12/19/1b/d8/german-weizen-wheat-beer.jpg",
                    "height": "141"
                },
                "thumbnail": {
                    "width": "50",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-t/12/19/1b/d8/german-weizen-wheat-beer.jpg",
                    "height": "50"
                },
                "original": {
                    "width": "1440",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-o/12/19/1b/d8/german-weizen-wheat-beer.jpg",
                    "height": "810"
                },
                "large": {
                    "width": "1024",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-w/12/19/1b/d8/german-weizen-wheat-beer.jpg",
                    "height": "576"
                },
                "medium": {
                    "width": "550",
                    "url": "https://media-cdn.tripadvisor.com/media/photo-s/12/19/1b/d8/german-weizen-wheat-beer.jpg",
                    "height": "309"
                }
            },
            "is_blessed": true,
            "uploaded_date": "2018-02-19T03:32:32-0500",
            "caption": "German Weizen (Wheat Beer) in the sun! ",
            "id": "303635416",
            "helpful_votes": "0",
            "published_date": "2018-02-19T03:32:32-0500",
            "user": {
                "user_id": null,
                "member_id": "0",
                "type": "user"
            }
        },
        "awards": [],
        "doubleclick_zone": "af.rwanda",
        "preferred_map_engine": "default",
        "raw_ranking": "3.2904579639434814",
        "ranking_geo": "Kigali",
        "ranking_geo_id": "293829",
        "ranking_position": "54",
        "ranking_denominator": "195",
        "ranking_category": "restaurant",
        "ranking": "#44 of 203 Restaurants in Kigali",
        "distance": "0.5090415726503561",
        "distance_string": "0.5 km",
        "bearing": "west",
        "rating": "4.0",
        "is_closed": false,
        "open_now_text": "Open Now",
        "is_long_closed": false,
        "price_level": "$$ - $$$",
        "price": "$2 - $8",
        "description": "High quality butchery, shop and restaurant: Authentic German and international food at fair prices in Kigali, Rwanda.",
        "web_url": "https://www.tripadvisor.com/Restaurant_Review-g293829-d12495066-Reviews-German_Butchery_Shop_and_Restaurant-Kigali_Kigali_Province.html",
        "write_review": "https://www.tripadvisor.com/UserReview-g293829-d12495066-German_Butchery_Shop_and_Restaurant-Kigali_Kigali_Province.html",
        "ancestors": [
            {
                "subcategory": [
                    {
                        "key": "city",
                        "name": "City"
                    }
                ],
                "name": "Kigali",
                "abbrv": null,
                "location_id": "293829"
            },
            {
                "subcategory": [
                    {
                        "key": "district",
                        "name": "District"
                    }
                ],
                "name": "Kigali Province",
                "abbrv": null,
                "location_id": "3685406"
            },
            {
                "subcategory": [
                    {
                        "key": "country",
                        "name": "Country"
                    }
                ],
                "name": "Rwanda",
                "abbrv": null,
                "location_id": "293828"
            }
        ],
        "category": {
            "key": "restaurant",
            "name": "Restaurant"
        },
        "subcategory": [
            {
                "key": "sit_down",
                "name": "Sit down"
            }
        ],
        "parent_display_name": "Kigali",
        "is_jfy_enabled": false,
        "nearest_metro_station": [],
        "phone": "+250 783 654 454",
        "website": "http://www.facebook.com/GermanButcheryKigali/",
        "email": "rolandk43@yahoo.de",
        "address_obj": {
            "street1": "61 St Kn",
            "street2": null,
            "city": "Kigali",
            "state": null,
            "country": "Rwanda",
            "postalcode": "4465"
        },
        "address": "61 St Kn, Kigali 4465 Rwanda",
        "hours": {
            "week_ranges": [
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ],
                [
                    {
                        "open_time": 420,
                        "close_time": 1320
                    }
                ]
            ],
            "timezone": "Africa/Kigali"
        },
        "is_candidate_for_contact_info_suppression": false,
        "cuisine": [
            {
                "key": "10347",
                "name": "German"
            },
            {
                "key": "10648",
                "name": "International"
            },
            {
                "key": "10654",
                "name": "European"
            },
            {
                "key": "10632",
                "name": "African"
            },
            {
                "key": "10746",
                "name": "Central European"
            },
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            }
        ],
        "dietary_restrictions": [
            {
                "key": "10665",
                "name": "Vegetarian Friendly"
            }
        ],
        "establishment_types": [
            {
                "key": "10591",
                "name": "Restaurants"
            }
        ]
    }
];
