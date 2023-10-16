import React from "react";
import ListOrder from "../../../components/ListOrder";
import lists from "../../../data/lists";

const Lists = () => {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full flex flex-col items-center py-10 md:py-20">
        <div className="py-5 text-4xl font-bold capitalize">
          <h2>service lists</h2>
        </div>
        <div>
          <ListOrder lists={lists} />
        </div>
      </div>
    </section>
  );
};

export default Lists;
