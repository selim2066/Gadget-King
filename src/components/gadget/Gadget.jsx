import React from "react";

const Gadget = ({ gadget }) => {
  const {
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget;
  return (
    <div>
      <div className="card w-75 h-[320px] bg-white shadow-sm flex flex-col">
        <figure className="px-5 pt-5 h-[181px] flex items-center justify-center">
          <img
            src={product_image}
            alt={product_title}
            className="rounded-xl object-contain max-h-[160px] w-full p-5"
          />
        </figure>
        <div className="card-body items-center text-center flex-grow">
          <h2 className="card-title line-clamp-2">{product_title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions mt-auto">
            <button className="btn btn-soft btn-info">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
