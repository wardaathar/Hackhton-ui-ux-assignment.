

import React from "react";

const Faq = () => {
  return (
    <main>
      {/* Title */}
      <h1 className="mt-[100px] text-black text-center text-[40px] font-semibold capitalize">
        Questions look here
      </h1>
      <p className="text-black text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aliquid!
      </p>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[40px] px-4">
        {/* FAQ Item */}
        <div className="bg-[#E0E0E0] rounded-md p-7">
          <h2 className="font-semibold text-[20px] text-start">
            How do we serve food?
          </h2>
          <p className="text-start pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            earum quisquam, ducimus, nobis, nostrum dolorum consequuntur illo
            placeat commodi ratione voluptate. Fugit est ullam odit a
            praesentium deserunt quisquam libero.
          </p>
        </div>

        {/* FAQ Item */}
        <div className="bg-[#E0E0E0] rounded-md p-7">
          <h2 className="font-semibold text-[20px] text-start">
            How is our food quality?
          </h2>
          <p className="text-start pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            earum quisquam, ducimus, nobis, nostrum dolorum consequuntur illo
            placeat commodi ratione voluptate. Fugit est ullam odit a
            praesentium deserunt quisquam libero.
          </p>
        </div>

        {/* FAQ Item */}
        <div className="bg-[#E0E0E0] rounded-md p-7">
          <h2 className="font-semibold text-[20px] text-start">
            How do we give home delivery?
          </h2>
          <p className="text-start pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            earum quisquam, ducimus, nobis, nostrum dolorum consequuntur illo
            placeat commodi ratione voluptate. Fugit est ullam odit a
            praesentium deserunt quisquam libero.
          </p>
        </div>

        {/* FAQ Item */}
        <div className="bg-[#E0E0E0] rounded-md p-7">
          <h2 className="font-semibold text-[20px] text-start">
            How can we get in touch with you?
          </h2>
          <p className="text-start pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            earum quisquam, ducimus, nobis, nostrum dolorum consequuntur illo
            placeat commodi ratione voluptate. Fugit est ullam odit a
            praesentium deserunt quisquam libero.
          </p>
        </div>

        {/* FAQ Item */}
        <div className="bg-[#E0E0E0] rounded-md p-7">
          <h2 className="font-semibold text-[20px] text-start">
            What will be delivered? And when?
          </h2>
          <p className="text-start pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            earum quisquam, ducimus, nobis, nostrum dolorum consequuntur illo
            placeat commodi ratione voluptate. Fugit est ullam odit a
            praesentium deserunt quisquam libero.
          </p>
        </div>

        {/* FAQ Item */}
        <div className="bg-[#E0E0E0] rounded-md p-7">
          <h2 className="font-semibold text-[20px] text-start">
            Is this restaurant 24 hours open?
          </h2>
          <p className="text-black text-start pl-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            earum quisquam, ducimus, nobis, nostrum dolorum consequuntur illo
            placeat commodi ratione voluptate. Fugit est ullam odit a
            praesentium deserunt quisquam libero.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Faq;
