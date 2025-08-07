import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart} from '@fortawesome/fontawesome-svg-core'
// <button className="btn"><FontAwesomeIcon icon={faHeart} /></button>

const GadgetDetails = () => {
  const { product_id } = useParams();
  const gadgetData = useLoaderData();
  const gadget = gadgetData.find((gadget) => gadget.product_id === product_id);

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

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="relative bg-[#9538E2]">
        <div className="p-20 text-center bg-[#9538E2] text-white space-y-5">
          <h1 className="text-4xl font-bold">Product Details</h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            facilis doloremque consequuntur. Vero enim exercitationem eius vel
            eaque nulla repudiandae!
          </p>
          <p>{product_title}</p>
        </div>

        {/* card  bg-amber-600 w-[1080px]*/}
        <div className="hero  max-h-[567px] absolute -bottom-76 left-1/2 transform -translate-x-1/2 w-[70%] max-w-[1100px] bg-white border-4 border-white/30 rounded-3xl p-4 shadow-xl">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={product_image}
              className="max-w-sm p-5 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl font-bold">{product_title}</h1>
              <h3 className="text-xl font-bold">Price: {price}tk</h3>
              <p className="py-6">{description}</p>
              <p>
                <span className="font-bold text-lg ">Specification: </span>
                <ul>
                  {specification.map((spec, index) => (
                    <li className="text-gray-400" key={index}>
                      {index + 1}. {spec}
                    </li>
                  ))}
                </ul>
              </p>
              <h4 className="font-bold text-amber-500 py-3">Rating: {rating}</h4>
             <div className="flex gap-5 py-5">
                 <button className="btn btn-soft btn-success">Get Card</button>
              <button className="btn btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
             </div>
            </div>
          </div>
        </div>
        <button className="btn border-none p-2" onClick={handleBack}>
          Back
        </button>
      </div>
      <div className="h-[380px]"></div>
    </>
  );
};

export default GadgetDetails;
