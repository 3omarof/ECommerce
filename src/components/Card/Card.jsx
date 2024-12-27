import { useContext } from "react";
import { cartContext } from "../../Context/Cart.context";

export default function Card({ productInfo }) {
  const { images, title, category, price, description, ratingsAverage,id } =
    productInfo;

   const{addProductToCart}= useContext(cartContext)

  return (
    <div className="card shadow-lg col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 rounded-lg overflow-hidden">
      <div className="relative">
        <img src={images[0]} className="w-full " alt={title} />
        <div className="layer absolute w-full h-full bg-black bg-opacity-40 top-0 opacity-0 hover:opacity-100 flex justify-center items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-myColor-700 text-white flex justify-center items-center hover:scale-110 hover:rotate-12 cursor-pointer"><i className="fa-solid fa-heart"></i></span>
          <span
          onClick={()=>{
            addProductToCart({productId:id});
          }}
          className="w-8 h-8 rounded-full bg-myColor-700 text-white flex justify-center items-center hover:scale-110 hover:rotate-12 cursor-pointer">
            
            <i className="fa-solid fa-cart-shopping"></i>

            </span>
          <span className="w-8 h-8 rounded-full bg-myColor-700 text-white flex justify-center items-center hover:scale-110 hover:rotate-12 cursor-pointer"><i className="fa-solid fa-eye"></i></span>
        </div>
      </div>
      <div className="card-body p-4 space-y-3">
        <div className="card-header">
          <h3 className="text-myColor-700 capitalize">{category.name}</h3>
          <h3 className="text-lg font-semibold truncate">{title}</h3>
          <p className="line-clamp-3">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="price">
            <span>{price}</span> EGP
          </div>
          <div className="rating space-x-1 flex items-center">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <span>{ratingsAverage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
