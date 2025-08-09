import React, { useContext } from "react";
import { CartContexts } from "../../context/CartContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
    <>
      <div className="p-20 text-center bg-[#9538E2] text-white space-y-5">
        <h1 className="text-3xl font-bold">This is a DashBoard</h1>

        <p className="text-lg font-semibold">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        
      </div>
      <div className="space-x-10 bg-slate-100 rounded-4xl p-5">
          <Tabs>
            <TabList className="space-x-10 text-center transform -translate-y-15 relative z-10">
              <Tab className="btn btn-info px-10 rounded-3xl">Cart</Tab>
              <Tab className="btn btn-info  px-10 rounded-3xl">WishList</Tab>
            </TabList>

            <TabPanel>
              <div className="flex justify-between pt-10 items-center">
                <h1 className="text-xl font-bold">Cart</h1>
                <div className="flex gap-7 items-center">
                  <h1 className="text-lg font-bold"> Total Cost: {cart.reduce((sum, item) => sum + item.price, 0)} </h1>
                  <button className="btn rounded-4xl">Sort by Price</button>
                  <button className="btn rounded-4xl">Purchase</button>
                </div>
              </div>
              {cart.map((singleCart) => {
                return (
                  <>
                    <div className="my-10 flex gap-15 items-center text-start">
                      <figure>
                        <img
                          className="h-[124px] w-[200px] rounded-2xl"
                          src={singleCart.product_image}
                          alt=""
                        />
                      </figure>
                      <div>
                        <h1 className="text-xl font-bold">
                          {singleCart.product_title}
                        </h1>
                        <p>{singleCart.description}</p>
                        <p>Price:{singleCart.price}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </TabPanel>

            {/* wishList */}
            <TabPanel>
              {cart.map((singleCart) => (
                <h1 key={singleCart.product_id} className="text-white">
                  {singleCart.category}
                </h1>
              ))}
            </TabPanel>
          </Tabs>
          
        </div>
      <div className="p-20 text-center"></div>
    </>
  );
};

export default Dashboard;
