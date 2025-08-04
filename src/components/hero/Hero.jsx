import React, { useEffect, useState } from "react";
import Gadget from "../gadget/Gadget";

const Hero = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch("/gadget.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  return (
    <div className="space-y-10">
      <h1 className="text-4xl text-center font-bold">
        Explore Cutting-Edge Tech Gadget
      </h1>

      <div className="flex gap-5">
        <div className="w-1/4 bg-green-500">
          <h1>this is for category</h1>
        </div>
        <div className="w-3/4 bg-amber-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center p-5">
          
          {gadgets.map((gadget) =>  <Gadget key={gadget.product_id} gadget={gadget} />)}
        </div>
      </div>
    </div>
  );
};

export default Hero;
