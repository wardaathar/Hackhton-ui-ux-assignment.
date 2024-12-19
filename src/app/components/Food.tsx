import React from 'react';
import Image from 'next/image';
import Food1 from "../public/food1.png";
import Food2 from "../public/food2.png";
import Food3 from "../public/food3.png";
import Food4 from "../public/food4.png";

const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: Food1, label: "Save 50% on Fast Food" },
    { id: 2, img: Food2, label: "Delicious Burgers" },
    { id: 3, img: Food3, label: "Healthy Salads" },
    { id: 4, img: Food4, label: "Desserts" },
  ];

  return (
    <div className="/food">
      <section className="bg-black text-white py-16 px-6">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-orange-500">Choose</span> Food Item
          </h2>

          {/* Grid of food items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.id} className="relative">
                {/* Image of the food item */}
                <Image
                  src={item.img}
                  alt={item.label}
                  width={500}
                  height={500}
                  className="w-full h-56 object-cover rounded-lg"
                />

                {/* Overlay label */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                  <span className="text-orange-500 font-semibold">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodCategory;
