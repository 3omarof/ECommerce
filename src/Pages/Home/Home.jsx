import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import SliderF from "../../components/SliderF/SliderF";
import SliderS from "../../components/SliderS/SliderS";

export default function Home() {
  const [products, setProducts] = useState(null);

  async function getProducts() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/products",
        method: "GET",
      };
      const { data } = await axios.request(options);
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <SliderF />
      <SliderS/>

      <div className="grid grid-cols-12  gap-4 p-4">
        {products ? (
          products.map((product) => (
            <Card productInfo={product} key={product._id} />
          ))
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
    </>
  );
}
