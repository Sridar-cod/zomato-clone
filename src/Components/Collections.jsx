import React from "react";

const Collections = () => {
  const dataTop = [
    {
      id: 1,
      url: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      content: "Order Online",
      discription: "Stay home and order to your doorstep",
    },
    {
      id: 2,
      url: "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      content: "Dining",
      discription: "View the city's favourite dining venues",
    },
    {
      id: 3,
      url: "https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*",
      content: "Live Events",
      discription: "Discover india's best events & concert",
    },
  ];
  const data = [
    {
      id: 1,
      url: "https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709812319.png?output-format=webp",
      content: "Newly Opened place",
      place: 20,
    },
    {
      id: 2,
      url: "https://b.zmtcdn.com/data/collections/2748683d9ae0c00e80ba4701e2545f66_1709815454.png?output-format=webp",
      content: "Sea View Dining",
      place: 10,
    },
    {
      id: 3,
      url: "https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1709881769.png",
      content: "Best Insta-worthy place",
      place: 11,
    },
    {
      id: 4,
      url: "https://b.zmtcdn.com/data/collections/757a7716d0478d646babef06ed7e8e2b_1709814818.png?output-format=webp",
      content: "Best Buffets In Town",
      place: 13,
    },
  ];
  return (
    <div className="pageContainer">
      <div className="collectios ">
        <div className="collectios__outter__topCard d-flex  gap-3 ">
          {dataTop?.map((item) => {
            return (
              <div className="collections__topCard ">
                <img src={item.url} alt="" />
                <div className="collections__topCard__content">
                  <h5>{item.content}</h5>
                  <p className="m-0">{item.discription}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-3 collection__mob">
          <h2>Collections</h2>
          <div className="d-flex justify-content-between collection-p-font ">
            <p>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Chennai, based on trends
            </p>
            <div className=" d-flex gap-2 align-items-center justify-content-center ms-2">
              <p className="p-0 m-0 col-red">All collections in Chennai</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF7E8B"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                class="sc-rbbb40-0 ezrcri"
              >
                <title>right-triangle</title>
                <path d="M5 0.42l10 10-10 10v-20z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="d-flex collections__card__outter ">
          {data?.map((item) => {
            return (
              <div className="collections__card me-3 ">
                <img className="" src={`${item.url}`} alt="" />
                <div className="collections__card__content ">
                  <h5>{item.content}</h5>
                  <div className="d-flex gap-2 align-items-center">
                    <p className="p-0 m-0">{item.place} places</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      width="10"
                      height="10"
                      viewBox="0 0 20 20"
                      aria-labelledby="icon-svg-title- icon-svg-desc-"
                      role="img"
                      class="sc-rbbb40-0 gvsUip"
                    >
                      <title>right-triangle</title>
                      <path d="M5 0.42l10 10-10 10v-20z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
