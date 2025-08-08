import React, { useContext } from "react";
import { CartContexts } from "../../context/CartContext";

const Dashboard = () => {
  const { cart } = useContext(CartContexts);
  const {
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = cart;

  console.log(cart[0].product_title);
  console.log(cart);
  return (
    <div className="p-20 text-center bg-[#9538E2] text-white space-y-5">
      <h1 className="text-3xl font-bold">This is a DashBoard</h1>

      <p className="text-lg font-semibold">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="space-x-10">
        <button className="btn btn-info bg-white px-10 rounded-3xl">
          Card
        </button>
        <button className="btn btn-info bg-white px-10 rounded-3xl">
          WishList
        </button>
      </div>
      <div className="bg-red-500">
        <h1>{product_title}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
