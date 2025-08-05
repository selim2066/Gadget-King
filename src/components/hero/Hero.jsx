import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Gadget from "../gadget/Gadget";

const Hero = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/gadget.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const filterByCategory = (category) => {
    if (category === "All") return gadgets;
    return gadgets.filter((item) => item.category === category);
  };

  const categoryList = ["All", "Laptop", "Iphone", "MacBook", "Accessories"];

  return (
    <div className="space-y-10">
      <h1 className="text-4xl text-center font-bold">
        Explore Cutting-Edge Tech Gadget
      </h1>

      <Tabs
        selectedIndex={categoryList.indexOf(selectedCategory)}
        onSelect={(index) => setSelectedCategory(categoryList[index])}
      >
        <div className="flex gap-5">
          {/* Sidebar TabList */}
          <TabList className="w-1/4 flex flex-col bg-green-100 p-4 rounded">
            {categoryList.map((cat, i) => (
              <Tab
                key={i}
                className="p-2 border rounded mb-2 cursor-pointer hover:bg-green-200"
              >
                {cat}
              </Tab>
            ))}
          </TabList>

          {/* Main Content TabPanel */}
          <div className="w-3/4">
            {categoryList.map((cat, i) => (
              <TabPanel key={i}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterByCategory(cat).map((gadget) => (
                    <Gadget key={gadget.product_id} gadget={gadget} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Hero;
