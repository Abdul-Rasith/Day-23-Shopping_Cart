import React, { useState } from "react";

export const Card = ({ cart, setCart, data }) => {
  const [isAddButton, setIsAddButton] = useState(true);
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Product image--> */}
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{data.productName}</h5>
              {/* <!-- Product price--> */}
              <span
                className={
                  data.isPrice1 ? "text-muted text-decoration-line-through" : ""
                }
              >
                {data.price1}
              </span>
              {data.price2}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {isAddButton ? (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setCart(cart + 1);
                    setIsAddButton(false);
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setCart(cart + 1);
                    setIsAddButton(true);
                  }}
                >
                  Remove to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
