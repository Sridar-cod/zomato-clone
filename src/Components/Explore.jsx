import React, { useState } from "react";

const Explore = () => {
  const [Toggle, setToggle] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });

  const handleToggle = (id) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      [id]: !prevToggle[id],
    }));
  };

  const data = [
    {
      id: 1,
      title: "Popular cuisines near me",
      discription: [
        "Bakery food near me",
        "Beverages food near me",
        "Biryani food near me",
        "Burger food near me",
        "Chinese food near me",
        "Desserts food near me",
        "Ice Cream food near me",
        "Juices food near me",
        "Momos food near me",
        "Mughlai food near me",
        "North Indian food near me",
        "Pizza food near me",
        "Rolls food near me",
        "Sandwich food near me",
        "Seafood food near me",
        "Shake food near me",
        "Sichuan food near me",
        "South Indian food near me",
        "Street food near me",
        "Tea food near me",
      ],
    },
    {
      id: 2,
      title: "Popular restaurant types near me",
      discription: [
        "Bakeries near me",
        "Bars near me",
        "Beverage Shops near me",
        "Bhojanalya near me",
        "Cafés near me",
        "Casual Dining near me",
        "Clubs near me",
        "Cocktail Bars near me",
        "Confectioneries near me",
        "Dessert Parlors near me",
        "Dhabas near me",
        "Fine Dining near me",
        "Food Courts near me",
        "Food Trucks near me",
        "Irani Cafes near me",
        "Kiosks near me",
        "Lounges near me",
        "Paan Shop near me",
        "Quick Bites near me",
        "Shacks near me",
        "Sweet Shops near me",
      ],
    },
    {
      id: 3,
      title: "Top Restaurant Chains",
      discription: [
        "Bikanervala",
        "Burger King",
        "Domino's",
        "KFC",
        "Krispy kreme",
        "McDonald's",
        "Moti Mahal Delux",
        "Pizza Hut",
        "WOW! Momo",
      ],
    },
    {
      id: 4,
      title: "Cities We Deliver To",
      discription: [
        "Delhi NCR",
        "Kolkata",
        "Mumbai",
        "Bengaluru",
        "Pune",
        "Hyderabad",
        "Chennai",
        "Lucknow",
        "Kochi",
        "Jaipur",
        "Ahmedabad",
        "Chandigarh",
        "Goa",
        "Indore",
        "Gangtok",
        "Nashik",
        "Ooty",
        "Shimla",
        "Ludhiana",
        "Guwahati",
        "Amritsar",
        "Kanpur",
        "Allahabad",
        "Aurangabad",
        "Bhopal",
        "Ranchi",
        "Visakhapatnam",
        "Bhubaneswar",
        "Coimbatore",
        "Mangalore",
        "Vadodara",
        "Nagpur",
        "Agra",
        "Dehradun",
        "Mysore",
        "Puducherry",
        "Surat",
        "Varanasi",
        "Patna",
        "Udaipur",
        "Srinagar",
        "Khajuraho",
        "Neemrana",
        "Cuttack",
        "Trivandrum",
        "Haridwar",
        "Leh",
        "Pushkar",
        "Rajkot",
        "Madurai",
        "Kozhikode",
        "Alappuzha",
        "Thrissur",
        "Manipal",
        "Vijayawada",
        "Jodhpur",
        "Kota",
        "Ajmer",
        "Mussoorie",
        "Rishikesh",
        "Jalandhar",
        "Jammu",
        "Manali",
      ],
    },
  ];

  return (
    <div className="explore pageContainer">
      <div className="explore__inner mt-5 mb-5">
        <p>Explore options near me</p>
        <div className="d-flex flex-column gap-4">
          {data.map((item) => {
            return (
              <div
                className="explore__card d-flex justify-content-between m-0"
                key={item.id}
                onClick={() => handleToggle(`item${item.id}`)}
              >
                <div className="">
                  <h5>{item.title}</h5>
                  <div
                    className="explore__card__expand"
                    style={{ display: Toggle[`item${item.id}`] ? "block" : "none" }}
                  >
                    <ul>
                      {item.discription.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="toggle" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1C1C1C"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    className="sc-rbbb40-0 iRDDBk"
                  >
                    <title>chevron-down</title>
                    <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
