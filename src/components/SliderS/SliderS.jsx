import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SliderS() {
  const [categories, setCategories] = useState(null);

  async function getCategories() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/categories",
      method: "GET",
    };
    const { data } = await axios.request(options);
    setCategories(data.data);
  }
  useEffect(()=>{getCategories()},[])


  return (
    
    <>

      {categories ? (
        <section className="py-9">
          <h2 className="mb-3 font-bold text-lg text-slate-600">Shop Popular Categories</h2>
          <swiper-container slides-per-view="6" loop="true" autoplay-delay="1000"  autoplay-disable-on-interaction="false" >
            {categories.map((category) => (
              <swiper-slide key={category._id}>
                <Link to={`/category/${category._id}`}>
                <img src={category.image} className="w-full h-72 object-cover cursor-pointer"  alt={category.name} />
                <h3>{category.name}</h3>
                </Link>
              </swiper-slide>
            ))}
          </swiper-container>
        </section>
      ) : (
        <h2>Waiting...</h2>
      )}
    </>
  );

}
