import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestroCard = (props) => {
  const { resList: { info: { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla: { deliveryTime } } = {} } } = props;
  console.log(resList);

  return (
    <div className="restro-card">
      <img
        className="restro-image"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>Star ⭐ {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    "info": {
      "id": "725082",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/465721bd-24d0-477a-9bfc-6277a45addfa_725082.JPG",
      "locality": "Kankarbagh",
      "areaName": "Kankarbagh",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.8,
      "parentId": "721",
      "avgRatingString": "4.3",
      "totalRatingsString": "4.0K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-03 04:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "243"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/patna/pizza-hut-kankarbagh-rest725082",
      "type": "WEBLINK"
    }

  },
  {
    "info": {
      "id": "9864",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b7102986df5ca7f015be0eab6dd6512",
      "locality": "Kurla West",
      "areaName": "Phoenix Market City",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "7.0K+",
      "sla": {
        "deliveryTime": 61,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "60-70 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-05 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.4",
          "ratingCount": "3.0K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/pizza-hut-kurla-west-phoenix-market-city-rest9864",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "32399",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/17fb1e67-86ac-4746-8853-27d9331db49f_32399.JPG",
      "locality": "Kalina Artista",
      "areaName": "Santacruz East",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "630",
      "avgRatingString": "4.5",
      "totalRatingsString": "41K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-05 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/mcdonalds-kalina-artista-santacruz-east-rest32399",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "78036",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8021373a-e4e9-4780-b502-59d621ee2c7b_78036.jpg",
      "locality": "Central Plaza, Kalina",
      "areaName": "Santacruz East",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "40K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-06 05:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/burger-king-central-plaza-kalina-santacruz-east-rest78036",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "202836",
      "name": "Hangout Cakes & More",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/2/74798b5a-605c-4ea4-8749-e89a41eb5258_202836.JPG",
      "locality": "CST Road",
      "areaName": "Santacruz East",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Cakes & Pastries",
        "Desserts",
        "Bakery"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "4508",
      "avgRatingString": "4.4",
      "totalRatingsString": "3.3K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-05 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹29"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/hangout-cakes-and-more-cst-road-santacruz-east-rest202836",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "535962",
      "name": "Slyce Pizza",
      "cloudinaryImageId": "4c899e0501bef7e4c6acd1fa7cc2c82b",
      "locality": "Trade Center Building",
      "areaName": "Bandra Kurla Complex",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "parentId": "321813",
      "avgRatingString": "4.1",
      "totalRatingsString": "2.1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-06 04:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/slyce-pizza-trade-center-building-bandra-kurla-complex-rest535962",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "673363",
      "name": "Bombay Sweet Shop",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/3/37c5c511-73da-4ad0-a702-65bebe95d4bc_673363.JPG",
      "locality": "Vidyanagari Marg",
      "areaName": "Scruz Bandra East",
      "costForTwo": "₹700 for two",
      "cuisines": [
        "Sweets",
        "Desserts",
        "Snacks"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "48883",
      "avgRatingString": "4.7",
      "totalRatingsString": "759",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-05 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹57"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/bombay-sweet-shop-vidyanagari-marg-scruz-bandra-east-rest673363",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "11239",
      "name": "Thambbi",
      "cloudinaryImageId": "t6av3q7weumzdozcmowp",
      "locality": "Kurla West",
      "areaName": "Kurla West",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "South Indian",
        "Punjabi",
        "Snacks",
        "Thalis"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "2527",
      "avgRatingString": "4.6",
      "totalRatingsString": "24K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-05 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹89"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "3.2K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/thambbi-kurla-west-rest11239",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "100139",
      "name": "Sweet Bengal",
      "cloudinaryImageId": "wjjghcbr95nkiirq2zg5",
      "locality": "Kurla West",
      "areaName": "Kurla West",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Sweets",
        "Indian",
        "Snacks",
        "Desserts"
      ],
      "avgRating": 4.8,
      "veg": true,
      "parentId": "1250",
      "avgRatingString": "4.8",
      "totalRatingsString": "1.6K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-05 19:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹39"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.7",
          "ratingCount": "33"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/sweet-bengal-kurla-west-rest100139",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "376244",
      "name": "Good Flippin' Burgers",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/9188584c-a779-4d87-bdab-7714c61285a7_376244.jpg",
      "locality": "Bandra Kurla Complex",
      "areaName": "Santacruz East",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Burgers",
        "American",
        "Fast Food",
        "Beverages"
      ],
      "avgRating": 4.6,
      "parentId": "11748",
      "avgRatingString": "4.6",
      "totalRatingsString": "3.7K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-06 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹195"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.7",
          "ratingCount": "232"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/good-flippin-burgers-bandra-kurla-complex-santacruz-east-rest376244",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "395334",
      "name": "McDonald's Gourmet Burger Collection",
      "cloudinaryImageId": "txirbmikcfw5yijtcfs5",
      "locality": "Kalina Artista",
      "areaName": "Scruz Bandra East",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.1,
      "parentId": "10761",
      "avgRatingString": "4.1",
      "totalRatingsString": "366",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-05 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/mcdonalds-gourmet-burger-collection-kalina-artista-scruz-bandra-east-rest395334",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "639509",
      "name": "Dum Safar Biryani",
      "cloudinaryImageId": "kbkr6vrtwjes0squcoqf",
      "locality": "Bandra Kurla Complex",
      "areaName": "Scruz Bandra East",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Kebabs",
        "North Indian",
        "Barbecue"
      ],
      "avgRating": 3.9,
      "parentId": "351013",
      "avgRatingString": "3.9",
      "totalRatingsString": "1.0K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-05 23:30:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹89"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/dum-safar-biryani-bandra-kurla-complex-scruz-bandra-east-rest639509",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "391816",
      "name": "Louis Burger",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/20/24b19dd3-c09d-4d3a-bff0-aa01684358b5_391816.JPG",
      "locality": "Trade Centre",
      "areaName": "Santacruz Bandra east",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Burgers",
        "American",
        "Fast Food"
      ],
      "avgRating": 4.3,
      "parentId": "22485",
      "avgRatingString": "4.3",
      "totalRatingsString": "5.3K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-06 04:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/louis-burger-trade-centre-santacruz-bandra-east-rest391816",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "681665",
      "name": "LeanCrust Pizza- ThinCrust Experts",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/8a64c9be-7a6b-4870-a69a-be53f8c9d0a2_681665.jpg",
      "locality": "Gaurav Industrial Estate",
      "areaName": "Kurla West",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "11216",
      "avgRatingString": "4.3",
      "totalRatingsString": "231",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-06 02:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/leancrust-pizza-thincrust-experts-gaurav-industrial-estate-kurla-west-rest681665",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "692689",
      "name": "WeFit - Protein Bowls, Salads & Sandwiches",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/17502345-35fd-4c60-a2d8-7cb4453c5213_692689.jpg",
      "locality": "Kurla",
      "areaName": "Malad West",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Keto",
        "Snacks"
      ],
      "avgRating": 4.7,
      "parentId": "355285",
      "avgRatingString": "4.7",
      "totalRatingsString": "343",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-06 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "High%20Protein/rx%20tag%205.png",
            "description": "High Protein"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "High Protein",
                  "imageId": "High%20Protein/rx%20tag%205.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/wefit-protein-bowls-salads-and-sandwiches-kurla-malad-west-rest692689",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "699105",
      "name": "Harvest Salad Co",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/12/fb6a2ba2-11f0-4ce0-924f-9df51d7a6ddd_699105.JPG",
      "locality": "Kalina CST Road",
      "areaName": "Scruz Bandra East",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Salads",
        "Healthy Food",
        "Snacks"
      ],
      "avgRating": 4.6,
      "parentId": "301047",
      "avgRatingString": "4.6",
      "totalRatingsString": "2.9K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-06 03:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "High%20Protein/rx%20tag%205.png",
            "description": "High Protein"
          },
          {
            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "High Protein",
                  "imageId": "High%20Protein/rx%20tag%205.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/mumbai/harvest-salad-co-kalina-cst-road-scruz-bandra-east-rest699105",
      "type": "WEBLINK"
    },
    "info": {
      "id": "656392",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
      "locality": "1st Block",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "sandwich",
        "Salads",
        "wrap",
        "Healthy Food"
      ],
      "avgRating": 4.3,
      "parentId": "2",
      "avgRatingString": "4.3",
      "totalRatingsString": "4.7K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-01-06 03:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹200 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-13fbf87e-8526-4373-abf1-2c08193f183a"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
      "type": "WEBLINK"
    },
   

  }
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurants..." />
        <button>Search</button>
      </div>

      <div className="restaurant-container">
        {resList.map((restaurant, index) => (
  <RestroCard key={index} resList={restaurant} />
))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default App;








// import React from "react";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
//           alt="Logo"
//         />
//       </div>
//       <div className="nav-container">
//         <ul className="nav-items">
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
// const RestroCard = (props) => {
//   const { resList: { info: { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla: { deliveryTime } } = {} } } = props;
//   console.log(resList);

//   return (
//     <div className="restro-card">
//       <img
//         className="restro-image"
//         src={CDN_URL + cloudinaryImageId}
//         alt="Restaurant"
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines.join(",")}</h4>
//       <h4>{avgRating}</h4>
//       <h4>{costForTwo}</h4>
//       <h4>{deliveryTime} minutes</h4>
//     </div>
//   );
// };

// const resList = [
//   {
//     "info": {
//       "id": "725082",
//       "name": "Pizza Hut",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/465721bd-24d0-477a-9bfc-6277a45addfa_725082.JPG",
//       "locality": "Kankarbagh",
//       "areaName": "Kankarbagh",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Pizzas"
//       ],
//       "avgRating": 3.8,
//       "parentId": "721",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "4.0K+",
//       "sla": {
//         "deliveryTime": 35,
//         "lastMileTravel": 2.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "2.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-03 04:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "android/static-assets/icons/big_rx.png",
//             "description": "bolt!"
//           },
//           {
//             "imageId": "Rxawards/_CATEGORY-Pizza.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "bolt!",
//                   "imageId": "android/static-assets/icons/big_rx.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {

//           },
//           "textExtendedBadges": {

//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹59"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {

//           },
//           "video": {

//           }
//         }
//       },
//       "reviewsSummary": {

//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {

//       },
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.3",
//           "ratingCount": "243"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/patna/pizza-hut-kankarbagh-rest725082",
//       "type": "WEBLINK"
//     }

//   },
//   {
//     "info": {
//       "id": "9864",
//       "name": "Pizza Hut",
//       "cloudinaryImageId": "2b7102986df5ca7f015be0eab6dd6512",
//       "locality": "Kurla West",
//       "areaName": "Phoenix Market City",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Pizzas"
//       ],
//       "avgRating": 4,
//       "parentId": "721",
//       "avgRatingString": "4.0",
//       "totalRatingsString": "7.0K+",
//       "sla": {
//         "deliveryTime": 61,
//         "lastMileTravel": 3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "60-70 mins",
//         "lastMileTravelString": "3.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 23:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Pizza.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹99"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.4",
//           "ratingCount": "3.0K+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/pizza-hut-kurla-west-phoenix-market-city-rest9864",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "32399",
//       "name": "McDonald's",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/17fb1e67-86ac-4746-8853-27d9331db49f_32399.JPG",
//       "locality": "Kalina Artista",
//       "areaName": "Santacruz East",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Beverages",
//         "Cafe",
//         "Desserts"
//       ],
//       "avgRating": 4.5,
//       "parentId": "630",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "41K+",
//       "sla": {
//         "deliveryTime": 32,
//         "lastMileTravel": 2.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "2.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 23:59:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Burger.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Burger.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹99"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/mcdonalds-kalina-artista-santacruz-east-rest32399",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "78036",
//       "name": "Burger King",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8021373a-e4e9-4780-b502-59d621ee2c7b_78036.jpg",
//       "locality": "Central Plaza, Kalina",
//       "areaName": "Santacruz East",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Burgers",
//         "American"
//       ],
//       "avgRating": 4.3,
//       "parentId": "166",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "40K+",
//       "sla": {
//         "deliveryTime": 28,
//         "lastMileTravel": 2.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "25-30 mins",
//         "lastMileTravelString": "2.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-06 05:00:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹59"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/burger-king-central-plaza-kalina-santacruz-east-rest78036",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "202836",
//       "name": "Hangout Cakes & More",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/2/74798b5a-605c-4ea4-8749-e89a41eb5258_202836.JPG",
//       "locality": "CST Road",
//       "areaName": "Santacruz East",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "Cakes & Pastries",
//         "Desserts",
//         "Bakery"
//       ],
//       "avgRating": 4.4,
//       "veg": true,
//       "parentId": "4508",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "3.3K+",
//       "sla": {
//         "deliveryTime": 27,
//         "lastMileTravel": 2.4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "25-30 mins",
//         "lastMileTravelString": "2.4 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 23:59:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹29"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/hangout-cakes-and-more-cst-road-santacruz-east-rest202836",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "535962",
//       "name": "Slyce Pizza",
//       "cloudinaryImageId": "4c899e0501bef7e4c6acd1fa7cc2c82b",
//       "locality": "Trade Center Building",
//       "areaName": "Bandra Kurla Complex",
//       "costForTwo": "₹600 for two",
//       "cuisines": [
//         "Pizzas",
//         "Italian",
//         "Fast Food"
//       ],
//       "avgRating": 4.1,
//       "parentId": "321813",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "2.1K+",
//       "sla": {
//         "deliveryTime": 33,
//         "lastMileTravel": 2.2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "2.2 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-06 04:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Gourmet",
//                   "imageId": "newg.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/slyce-pizza-trade-center-building-bandra-kurla-complex-rest535962",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "673363",
//       "name": "Bombay Sweet Shop",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/3/37c5c511-73da-4ad0-a702-65bebe95d4bc_673363.JPG",
//       "locality": "Vidyanagari Marg",
//       "areaName": "Scruz Bandra East",
//       "costForTwo": "₹700 for two",
//       "cuisines": [
//         "Sweets",
//         "Desserts",
//         "Snacks"
//       ],
//       "avgRating": 4.7,
//       "veg": true,
//       "parentId": "48883",
//       "avgRatingString": "4.7",
//       "totalRatingsString": "759",
//       "sla": {
//         "deliveryTime": 29,
//         "lastMileTravel": 2.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "25-30 mins",
//         "lastMileTravelString": "2.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 23:30:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           },
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Gourmet",
//                   "imageId": "newg.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹57"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/bombay-sweet-shop-vidyanagari-marg-scruz-bandra-east-rest673363",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "11239",
//       "name": "Thambbi",
//       "cloudinaryImageId": "t6av3q7weumzdozcmowp",
//       "locality": "Kurla West",
//       "areaName": "Kurla West",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "South Indian",
//         "Punjabi",
//         "Snacks",
//         "Thalis"
//       ],
//       "avgRating": 4.6,
//       "veg": true,
//       "parentId": "2527",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "24K+",
//       "sla": {
//         "deliveryTime": 36,
//         "lastMileTravel": 1.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "35-40 mins",
//         "lastMileTravelString": "1.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 23:00:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹89"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.1",
//           "ratingCount": "3.2K+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/thambbi-kurla-west-rest11239",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "100139",
//       "name": "Sweet Bengal",
//       "cloudinaryImageId": "wjjghcbr95nkiirq2zg5",
//       "locality": "Kurla West",
//       "areaName": "Kurla West",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "Sweets",
//         "Indian",
//         "Snacks",
//         "Desserts"
//       ],
//       "avgRating": 4.8,
//       "veg": true,
//       "parentId": "1250",
//       "avgRatingString": "4.8",
//       "totalRatingsString": "1.6K+",
//       "sla": {
//         "deliveryTime": 33,
//         "lastMileTravel": 1.5,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "1.5 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 19:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹39"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.7",
//           "ratingCount": "33"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/sweet-bengal-kurla-west-rest100139",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "376244",
//       "name": "Good Flippin' Burgers",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/9188584c-a779-4d87-bdab-7714c61285a7_376244.jpg",
//       "locality": "Bandra Kurla Complex",
//       "areaName": "Santacruz East",
//       "costForTwo": "₹600 for two",
//       "cuisines": [
//         "Burgers",
//         "American",
//         "Fast Food",
//         "Beverages"
//       ],
//       "avgRating": 4.6,
//       "parentId": "11748",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "3.7K+",
//       "sla": {
//         "deliveryTime": 35,
//         "lastMileTravel": 2.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "35-40 mins",
//         "lastMileTravelString": "2.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-06 05:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
//             "description": "Delivery!"
//           },
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "Gourmet",
//                   "imageId": "newg.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹195"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.7",
//           "ratingCount": "232"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/good-flippin-burgers-bandra-kurla-complex-santacruz-east-rest376244",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "395334",
//       "name": "McDonald's Gourmet Burger Collection",
//       "cloudinaryImageId": "txirbmikcfw5yijtcfs5",
//       "locality": "Kalina Artista",
//       "areaName": "Scruz Bandra East",
//       "costForTwo": "₹600 for two",
//       "cuisines": [
//         "Burgers",
//         "Beverages",
//         "Cafe",
//         "Desserts"
//       ],
//       "avgRating": 4.1,
//       "parentId": "10761",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "366",
//       "sla": {
//         "deliveryTime": 36,
//         "lastMileTravel": 2.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "35-40 mins",
//         "lastMileTravelString": "2.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 23:59:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {},
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/mcdonalds-gourmet-burger-collection-kalina-artista-scruz-bandra-east-rest395334",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "639509",
//       "name": "Dum Safar Biryani",
//       "cloudinaryImageId": "kbkr6vrtwjes0squcoqf",
//       "locality": "Bandra Kurla Complex",
//       "areaName": "Scruz Bandra East",
//       "costForTwo": "₹500 for two",
//       "cuisines": [
//         "Biryani",
//         "Kebabs",
//         "North Indian",
//         "Barbecue"
//       ],
//       "avgRating": 3.9,
//       "parentId": "351013",
//       "avgRatingString": "3.9",
//       "totalRatingsString": "1.0K+",
//       "sla": {
//         "deliveryTime": 35,
//         "lastMileTravel": 2.2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "35-40 mins",
//         "lastMileTravelString": "2.2 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 23:30:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹89"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/dum-safar-biryani-bandra-kurla-complex-scruz-bandra-east-rest639509",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "391816",
//       "name": "Louis Burger",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/20/24b19dd3-c09d-4d3a-bff0-aa01684358b5_391816.JPG",
//       "locality": "Trade Centre",
//       "areaName": "Santacruz Bandra east",
//       "costForTwo": "₹600 for two",
//       "cuisines": [
//         "Burgers",
//         "American",
//         "Fast Food"
//       ],
//       "avgRating": 4.3,
//       "parentId": "22485",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "5.3K+",
//       "sla": {
//         "deliveryTime": 34,
//         "lastMileTravel": 2.2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "2.2 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-06 04:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Gourmet",
//                   "imageId": "newg.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/louis-burger-trade-centre-santacruz-bandra-east-rest391816",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "681665",
//       "name": "LeanCrust Pizza- ThinCrust Experts",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/8a64c9be-7a6b-4870-a69a-be53f8c9d0a2_681665.jpg",
//       "locality": "Gaurav Industrial Estate",
//       "areaName": "Kurla West",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Pizzas",
//         "Italian",
//         "Desserts"
//       ],
//       "avgRating": 4.3,
//       "parentId": "11216",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "231",
//       "sla": {
//         "deliveryTime": 25,
//         "lastMileTravel": 3.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-30 mins",
//         "lastMileTravelString": "3.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-06 02:00:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹99"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/leancrust-pizza-thincrust-experts-gaurav-industrial-estate-kurla-west-rest681665",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "692689",
//       "name": "WeFit - Protein Bowls, Salads & Sandwiches",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/17502345-35fd-4c60-a2d8-7cb4453c5213_692689.jpg",
//       "locality": "Kurla",
//       "areaName": "Malad West",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Healthy Food",
//         "Salads",
//         "Keto",
//         "Snacks"
//       ],
//       "avgRating": 4.7,
//       "parentId": "355285",
//       "avgRatingString": "4.7",
//       "totalRatingsString": "343",
//       "sla": {
//         "deliveryTime": 25,
//         "lastMileTravel": 3.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20-30 mins",
//         "lastMileTravelString": "3.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-06 02:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "High%20Protein/rx%20tag%205.png",
//             "description": "High Protein"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "High Protein",
//                   "imageId": "High%20Protein/rx%20tag%205.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/wefit-protein-bowls-salads-and-sandwiches-kurla-malad-west-rest692689",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "28721",
//       "name": "Oven Story Pizza",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/62cada56-2bbe-44a1-9172-d07af4c77d33_28721.jpg",
//       "locality": "Kalina",
//       "areaName": "Santacruz East",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Pizzas",
//         "Pastas",
//         "Italian",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 4.3,
//       "parentId": "3534",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "6.7K+",
//       "sla": {
//         "deliveryTime": 17,
//         "lastMileTravel": 2.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "2.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 23:59:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹99"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/oven-story-pizza-kalina-santacruz-east-rest28721",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "575041",
//       "name": "Veg Darbar by Behrouz Biryani",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/325900a1-50d1-4ebe-936f-5d58fa1bd249_575041.JPG",
//       "locality": "Kalina",
//       "areaName": "Santacruz East",
//       "costForTwo": "₹700 for two",
//       "cuisines": [
//         "Biryani",
//         "North Indian",
//         "Kebabs",
//         "Mughlai",
//         "Beverages",
//         "Desserts"
//       ],
//       "avgRating": 3.9,
//       "veg": true,
//       "parentId": "344904",
//       "avgRatingString": "3.9",
//       "totalRatingsString": "52",
//       "sla": {
//         "deliveryTime": 36,
//         "lastMileTravel": 2.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "35-40 mins",
//         "lastMileTravelString": "2.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 23:59:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹289"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/veg-darbar-by-behrouz-biryani-kalina-santacruz-east-rest575041",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "801202",
//       "name": "Makhani Darbar",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/55abfd2e-6346-4009-9768-28f246d92c26_801202.JPG",
//       "locality": "BKC FC",
//       "areaName": "Kalina",
//       "costForTwo": "₹500 for two",
//       "cuisines": [
//         "Biryani",
//         "North Indian",
//         "Kebabs",
//         "Mughlai",
//         "Beverages",
//         "Desserts"
//       ],
//       "avgRating": 4.3,
//       "parentId": "478595",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "62",
//       "sla": {
//         "deliveryTime": 36,
//         "lastMileTravel": 2.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "35-40 mins",
//         "lastMileTravelString": "2.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-05 23:59:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹149"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/makhani-darbar-bkc-fc-kalina-rest801202",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "699105",
//       "name": "Harvest Salad Co",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/12/fb6a2ba2-11f0-4ce0-924f-9df51d7a6ddd_699105.JPG",
//       "locality": "Kalina CST Road",
//       "areaName": "Scruz Bandra East",
//       "costForTwo": "₹500 for two",
//       "cuisines": [
//         "Salads",
//         "Healthy Food",
//         "Snacks"
//       ],
//       "avgRating": 4.6,
//       "parentId": "301047",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "2.9K+",
//       "sla": {
//         "deliveryTime": 32,
//         "lastMileTravel": 2.6,
//         "serviceability": "SERVICEABLE",
//         "slaString": "30-35 mins",
//         "lastMileTravelString": "2.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-06 03:30:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "High%20Protein/rx%20tag%205.png",
//             "description": "High Protein"
//           },
//           {
//             "imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
//             "description": "Delivery!"
//           },
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "High Protein",
//                   "imageId": "High%20Protein/rx%20tag%205.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "Gourmet",
//                   "imageId": "newg.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-a2616782-02c4-4874-9509-26eb7de883aa"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/mumbai/harvest-salad-co-kalina-cst-road-scruz-bandra-east-rest699105",
//       "type": "WEBLINK"
//     },
//     "info": {
//       "id": "656392",
//       "name": "Subway",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
//       "locality": "1st Block",
//       "areaName": "Koramangala",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "sandwich",
//         "Salads",
//         "wrap",
//         "Healthy Food"
//       ],
//       "avgRating": 4.3,
//       "parentId": "2",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "4.7K+",
//       "sla": {
//         "deliveryTime": 16,
//         "lastMileTravel": 1.4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "15-20 mins",
//         "lastMileTravelString": "1.4 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-06 03:00:00",
//         "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {},
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹200 OFF",
//         "subHeader": "ABOVE ₹399",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "--"
//         }
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-13fbf87e-8526-4373-abf1-2c08193f183a"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
//       "type": "WEBLINK"
//     },
//     "info": {
//       "id": "18973",
//       "name": "Nandhana Palace",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
//       "locality": "Koramangala",
//       "areaName": "Koramangala",
//       "costForTwo": "₹500 for two",
//       "cuisines": [
//         "Biryani",
//         "Andhra",
//         "South Indian",
//         "North Indian"
//       ],
//       "avgRating": 4.4,
//       "parentId": "2120",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "41K+",
//       "sla": {
//         "deliveryTime": 14,
//         "lastMileTravel": 0.6,
//         "serviceability": "SERVICEABLE",
//         "slaString": "10-15 mins",
//         "lastMileTravelString": "0.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2026-01-06 02:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Biryani.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Biryani.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {},
//           "textExtendedBadges": {}
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹99"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "lottie": {},
//           "video": {}
//         }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {},
//       "externalRatings": {
//         "aggregatedRating": {
//           "rating": "4.4",
//           "ratingCount": "10K+"
//         },
//         "source": "GOOGLE",
//         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//       },
//       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//       "context": "seo-data-13fbf87e-8526-4373-abf1-2c08193f183a"
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/city/bangalore/nandhana-palace-koramangala-rest18973",
//       "type": "WEBLINK"
//     },
    

//   }
// ];

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search-container">
//         <input type="text" placeholder="Search for restaurants..." />
//         <button>Search</button>
//       </div>

//       <div className="restaurant-container">
//         <RestroCard resList={resList[0]} />
//         <RestroCard resList={resList[1]} />
//         <RestroCard resList={resList[2]} />
//         <RestroCard resList={resList[3]} />
//         <RestroCard resList={resList[4]} />
//         <RestroCard resList={resList[5]} />
//         <RestroCard resList={resList[6]} />
//         <RestroCard resList={resList[7]} />
//         <RestroCard resList={resList[8]} />
//         <RestroCard resList={resList[9]} />
//         <RestroCard resList={resList[10]} />
//         <RestroCard resList={resList[11]} />
//         <RestroCard resList={resList[12]} />
//         <RestroCard resList={resList[13]} />
//         <RestroCard resList={resList[14]} />
//         <RestroCard resList={resList[15]} />
//         <RestroCard resList={resList[16]} />
//         <RestroCard resList={resList[17]} />
//         <RestroCard resList={resList[18]} />
    
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="App">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// export default App;

