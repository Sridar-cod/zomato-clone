import React, { useState } from "react";

const Heater = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__top">
        <div className="d-flex justify-content-between align-items-center pt-4 px-4">
          <div>
            <p>Get The App</p>
          </div>
          <div className="d-flex align-items-center">
            <button className="nav-button" onClick={() => setNavOpen(!navOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 iRDDBk"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
            <ul  className='nav-list'>
              <li className={`navList ${navOpen ? "open" : ""}`}>Investor Relations</li>
              <li className={`navList  ${navOpen ? "open" : ""}`}>Add Restaurant</li>
              <li className={`navList  ${navOpen ? "open" : ""}`}>Log in</li>
              <li className={`navList  ${navOpen ? "open" : ""}`}>Sign up</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="herder__content d-flex justify-content-center align-items-center">
        <div className="mt-4 d-flex flex-column align-items-center gap-4">
          <img
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt=""
            width={"30%"}
          />
          <h1>Discover the best food & drinks in Chennai</h1>
          <div className="herder__content__search">
            <div className="d-flex gap-2 align-items-center header-bor-right pe-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF7E8B"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 iRDDBk"
              >
                <title>location-fill</title>
                <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
              </svg>
              <input type="text" placeholder="Current Location" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#4F4F4F"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 ezrcri"
              >
                <title>down-triangle</title>
                <path d="M20 5.42l-10 10-10-10h20z"></path>
              </svg>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#828282"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 iwHbVQ"
              >
                <title>Search</title>
                <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="header-inp-wit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heater;
