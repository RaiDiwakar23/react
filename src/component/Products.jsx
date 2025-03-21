import React, { useEffect, useState } from "react";

const Products = () => {
  let [product, setProduct] = useState([]);
  async function fetchData() {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  //   fetchData();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="px-10 py-4">
      <h1 className="text-amber-500 text-[40px] text-center font-bold mb-5">
        Ecommerce Website
      </h1>
      <section className="flex flex-wrap gap-5 gap-y-10">
        {product.map(item => {
          return (
            <div
              key={item.id}
              className="w-[23%] border-[1px] border-gray-300 relative shadow-md rounded-lg"
            >
              <img src={item.image} className="w-full h-[300px]" />

              <span className="bg-amber-500  p-2 absolute top-0 right-0 text-xs text-white ">
                {item.category}
              </span>
              <section className="p-2 px-3">
                <p className="text-lg font-bold ">
                  {item.title.slice(0, 20)}
                  {item.title.length > 25 ? "..." : ""}
                </p>
                <p className="text-green-300 font-bold text-2xl">
                  ${item.price}
                </p>
                <p className="text-sm">
                  {item.description.slice(0, 100)}
                  {item.description.length > 100 ? "..." : ""}
                </p>
                <button className="text-white bg-amber-400 hover:bg-amber-500 cursor-pointer py-2 px-4 my-2 rounded">
                  Buy Now
                </button>
              </section>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
