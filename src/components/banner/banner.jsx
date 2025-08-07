import React from "react";

const banner = () => {
  return (
    <div className="relative ">
      <div className="h-[694px] bg-[#9538E2] space-y-10 text-center pt-20">
        <h1 className="text-5xl font-bold text-white">
          Upgrade Your Tech Accessorize with <br /> GadgetKing Accessories
        </h1>
        <p className="text-2xl text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className="btn bg-amber-50 rounded-4xl text-[#9538E2] font-bold text-2xl p-5">
          ShopNow
        </button>
      </div>

      <div className="absolute -bottom-76 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1100px] bg-white/30 border-4 border-white/30 rounded-3xl p-4 shadow-xl">

        <img
          className="mx-auto h-[500px] w-full object-cover rounded-3xl"
          src="/assets/banner.jpg"
          alt=""
        />
      </div>
      
    </div>
  );
};

export default banner;
