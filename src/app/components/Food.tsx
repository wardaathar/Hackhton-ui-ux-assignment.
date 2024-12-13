import React from 'react';
import Image from 'next/image';

const Food_cateigary = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: "/public/food1.jpg", label: "Save 50% on Fast Food" },
    { id: 2, img: "/public/food2.jpg", label: "Delicious Burgers" },
    { id: 3, img: "/public/food3.jpg", label: "Healthy Salads" },
    { id: 4, img: "/public/food4.jpg", label: "Desserts" },
  ];

  return (
    <div className='food'>
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
                  className="w-full h-56 object-cover rounded-lg"
                  layout="responsive" // You might want to adjust this depending on your layout preferences
                  width={300}         // Set appropriate width
                  height={200}        // Set appropriate height
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

export default Food_cateigary;