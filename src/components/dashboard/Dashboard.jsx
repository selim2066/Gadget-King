import React, { useContext } from "react";
import { CartContexts } from "../../context/CartContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Dashboard = () => {
  const { cart, wish, removeCart,removeWish } = useContext(CartContexts);
  const [sortedCart, setSortedCart] = React.useState([...cart]);
  const [isSorted, setIsSorted] = React.useState(false);

  const handleSort = () => {
    const sorted = [...sortedCart].sort((a, b) => a.price - b.price);
    setSortedCart(sorted);
    setIsSorted(!isSorted);
  };

  React.useEffect(() => {
    setSortedCart([...cart]);
  }, [cart]);

  return (
    <>
      <div className="p-30 text-center bg-[#9538E2] text-white space-y-5">
        <h1 className="text-3xl font-bold">This is a DashBoard</h1>
        <p className="text-lg font-semibold">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="space-x-10 bg-slate-100 rounded-4xl p-5">
        <Tabs>
          <TabList className="space-x-10 text-center transform -translate-y-25 relative z-10">
            <Tab className="btn btn-info px-10 rounded-3xl">Cart</Tab>
            <Tab className="btn btn-info px-10 rounded-3xl">WishList</Tab>
          </TabList>

          {/* Cart */}
          <TabPanel>
            <div className="flex justify-between pt-10 items-center">
              <h1 className="text-xl font-bold">Cart</h1>
              <div className="flex gap-7 items-center">
                <h1 className="text-lg font-bold">
                  Total Cost: {cart.reduce((sum, item) => sum + item.price, 0)}
                </h1>
                <button onClick={handleSort} className="btn rounded-4xl">
                  {isSorted ? "Original Order" : "Sort by Price"}
                </button>
                <button className="btn rounded-4xl">Purchase</button>
              </div>
            </div>
            {sortedCart.map((singleCart) => (
              <div
                key={singleCart.product_id}
                className="my-10 flex gap-15 items-center text-start"
              >
                <figure>
                  <img
                    className="h-[124px] w-[200px] rounded-2xl"
                    src={singleCart.product_image}
                    alt={singleCart.product_title}
                  />
                </figure>
                <div>
                  <h1 className="text-xl font-bold">
                    {singleCart.product_title}
                  </h1>
                  <p>{singleCart.description}</p>
                  <p>Price: {singleCart.price}</p>
                </div>
                <button onClick={()=>removeCart(singleCart.product_id)} className="text-red-700 btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x-icon lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </TabPanel>

          {/* WishList */}
          <TabPanel>
            {wish.map((singleWish) => (
              <div
                key={singleWish.product_id}
                className="my-10 flex gap-15 items-center text-start"
              >
                <figure>
                  <img
                    className="h-[124px] w-[200px] rounded-2xl"
                    src={singleWish.product_image}
                    alt={singleWish.product_title}
                  />
                </figure>
                <div>
                  <h1 className="text-xl font-bold">
                    {singleWish.product_title}
                  </h1>
                  <p>{singleWish.description}</p>
                  <p>Price: {singleWish.price}</p>
                </div>
                <button onClick={()=>removeWish(singleWish.product_id)} className="text-red-700 btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x-icon lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              
            ))}
          </TabPanel>
        </Tabs>
      </div>

      <div className="p-20 text-center"></div>
    </>
  );
};

export default Dashboard;
