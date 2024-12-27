import { useContext } from "react";
import { cartContext } from "../../Context/Cart.context";

export default function CartProductItem({ productInfo }) {
  const { cartInfo, updateProductQuantity ,removeSpecificCartItem} = useContext(cartContext);
  const { count, price, product } = productInfo;
  const { title, imageCover, category, id } = product;
  return (
    <>
      <div className="grid grid-cols-12 border border-b-2 border-myColor-900 border-t-0 border-l-0 border-r-0 p-3 ">
        <div className="image col-span-1 ">
          <img src={imageCover} className="w-full" alt="" />
        </div>
        <div className="productDetails col-span-8 space-y-1 ml-3 flex flex-col justify-center">
          <h5 className="font-semibold text-lg">{title}</h5>
          <h6 className="text-myColor-800"> Price: {price}</h6>
          <button
          onClick={()=>{removeSpecificCartItem({id})}}
          className="text-start">
            <i className="fa-solid fa-trash  text-myColor-800"></i> Remove
          </button>
        </div>
        <div className="productCount col-span-3  flex justify-center items-center space-x-2">
          <span
            onClick={() => updateProductQuantity({ id, count: count + 1 })}
            className="w-5 h-5 p-3 cursor-pointer flex items-center justify-center border-myColor-600 border hover:bg-myColor-100 active:bg-myColor-200 focus:outline focus:outline-myColor-600"
            aria-label="Increase Quantity"
            role="button"
          >
            <i className="fa-solid fa-plus text-sm" aria-hidden="true"></i>
          </span>

          <span>{count}</span>
          <span
          onClick={() => updateProductQuantity({ id, count: count - 1 })}
          className="w-5 h-5 p-3 cursor-pointer flex items-center justify-center border-myColor-600 border">
            <i className="fa-solid fa-minus text-sm"></i>
          </span>
        </div>
      </div>
    </>
  );
}
