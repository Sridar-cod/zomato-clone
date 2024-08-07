import React from "react";

const GTZ = () => {
  return (
    <div className="gtz  row d-flex justify-content-center align-items-center pt-5 pb-5 gap-4">
      <div className="col-sm-10 col-md-10 col-lg-3 col-xl-3 col-xxl-3  d-flex justify-content-center">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
          alt=""
          width={"250px"}
        />
      </div>
      <div className="gtz__top col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5">
        <h2 className="mb-4">Get the Zomato app</h2>
        <p>
          We will send you a link, open it on your phone to download the app
        </p>
        <div className="d-flex gap-5  justif-content-center align-items-center mt-4">
          <div className="d-flex gap-2 ">
            <label className="d-flex gap-3 align-items-center">
              <input type="radio" name="contact" />
              <span class="custom-radio"></span> Email
            </label>
          </div>
          <div className="d-flex gap-2 ">
            <label className="d-flex gap-3 align-items-center">
              <input type="radio" name="contact" />
              <span class="custom-radio"></span> Phone
            </label>
          </div>
        </div>
        <div className="d-flex  gtz-mob gap-2 mt-3">
          <div className="">
            <input type="email" className="gtz__inpt" placeholder="Email" />
          </div>
          <div className="">
            <button>Share App Like</button>
          </div>
        </div>
        <div className="gtz__dow mt-4">
          <p> Download app from</p>
        </div>
        <div className="d-flex gap-3">
          <img
            src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
            alt=""
            width={"150px"}
          />
          <img
            src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
            alt=""
            width={"150px"}
          />
        </div>
      </div>
    </div>
  );
};

export default GTZ;
