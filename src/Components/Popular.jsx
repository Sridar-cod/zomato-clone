import React, { useState } from "react";

const Popular = () => {
  const data = [
    { id: 1, place: "T. Nagar", count: 372 },
    { id: 2, place: "Nungambakkam", count: 323 },
    { id: 3, place: "Velachery", count: 511 },
    { id: 4, place: "Adyar", count: 224 },
    { id: 5, place: "Anna Nagar East", count: 382 },
    { id: 6, place: "Thuraipakkam", count: 274 },
    { id: 7, place: "Mylapore", count: 182 },
    { id: 8, place: "Alwarpet", count: 148 },
    { id: 9, place: "Anna Nagar West", count: 541 },
    { id: 10, place: "Besant Nagar", count: 181 },
    { id: 11, place: "Semmancheri", count: 104 },
    { id: 12, place: "Vadapalani", count: 202 },
    { id: 13, place: "Perungudi", count: 281 },
    { id: 14, place: "Medavakkam", count: 538 },
    { id: 15, place: "Egmore", count: 174 },
    { id: 16, place: "Royapettah", count: 172 },
    { id: 17, place: "Sholinganallur", count: 232 },
    { id: 18, place: "Guindy", count: 112 },
    { id: 19, place: "Kilpauk", count: 217 },
    { id: 20, place: "Porur", count: 667 },
    { id: 21, place: "Kodambakkam", count: 190 },
    { id: 22, place: "Gopalapuram", count: 57 },
    { id: 23, place: "Ashok Nagar", count: 215 },
    { id: 24, place: "Teynampet", count: 105 },
    { id: 25, place: "Pallavaram", count: 405 },
    { id: 26, place: "Ramapuram", count: 347 },
    { id: 27, place: "RA Puram", count: 46 },
    { id: 28, place: "Chromepet", count: 374 },
    { id: 29, place: "Neelangarai", count: 58 },
  ];
  const [expand, setExpand] = useState(false);
  return (
    <div className="pageContainer">
      <div className="popular">
        <p className="ms-2">
          Popular localities in and around <b>Chennai</b>
        </p>
        <div className="popular__outter__card">
          {data
            .filter((item, i) => (expand ? true : i < 8))
            .map((item) => (
              <div
                className="popular__card d-flex justify-content-between align-items-center p-3"
                key={item.id}
              >
                <div className="d-flex flex-column pop-p">
                  <p className="m-0">{item.place}</p>
                  <span className="p-0 m-0">{item.count} Places</span>
                </div>
                <div className="d-flex justify-content-center align-item-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1C1C1C"
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    className="sc-rbbb40-0 jKmKoK"
                  >
                    <title>chevron-right</title>
                    <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                  </svg>
                </div>
              </div>
            ))}
          <div className="popular__card d-flex justify-content-center align-items-center p-3 " onClick={() => setExpand((prev) => !prev)}>
            <div>
              {expand ? "show less" : "show more"}
              <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
