import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Gadget from "../gadget/Gadget";

const Hero = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/gadget.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  // 👉 Helper function to filter by category
  const filterByCategory = (category) => {
    if (category === "All") return gadgets;
    return gadgets.filter((gadget) => gadget.category === category);
  };

  return (
    <div className="space-y-10">
      <h1 className="text-4xl text-center font-bold">
        Explore Cutting-Edge Tech Gadgets
      </h1>

      <div className="flex gap-5">
        {/* Sidebar */}
        <div className="w-1/4">
          <Tabs>
            <TabList className="flex flex-col gap-2 font-semibold">
              <Tab>All</Tab>
              <Tab>Laptop</Tab>
              <Tab>Iphone</Tab>
              <Tab>MacBook</Tab>
              <Tab>Accessories</Tab>
            </TabList>

            <TabPanel>
              <ProductGrid gadgets={filterByCategory("All")} />
            </TabPanel>
            <TabPanel>
              <ProductGrid gadgets={filterByCategory("Laptop")} />
            </TabPanel>
            <TabPanel>
              <ProductGrid gadgets={filterByCategory("Iphone")} />
            </TabPanel>
            <TabPanel>
              <ProductGrid gadgets={filterByCategory("MacBook")} />
            </TabPanel>
            <TabPanel>
              <ProductGrid gadgets={filterByCategory("Accessories")} />
            </TabPanel>
          </Tabs>
        </div>

        {/* Product Grid is moved into TabPanels above */}
      </div>
    </div>
  );
};

// 🔁 Reusable component for product grid
const ProductGrid = ({ gadgets }) => (
  <div className="w-full col-span-3 p-4 bg-gray-100 rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {gadgets.length > 0 ? (
      gadgets.map((gadget) => (
        <Gadget key={gadget.product_id} gadget={gadget} />
      ))
    ) : (
      <p className="col-span-3 text-center text-xl font-medium">
        No gadgets found.
      </p>
    )}
  </div>
);

export default Hero;
