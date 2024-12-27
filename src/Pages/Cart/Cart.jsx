import React, { useContext, useEffect } from "react";
import { cartContext } from "../../Context/Cart.context";
import CartProductItem from "../../components/CartProductItem/CartProductItem";

export default function Cart() {
  const { getProducts, cartInfo ,clearUserCart} = useContext(cartContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!cartInfo) {
    return <h1 className="text-center text-xl">Loading...</h1>;
  }

  if (cartInfo.numOfCartItems === 0) {
    return (
      <h1 className="text-center text-xl text-red-500">Your cart is empty.</h1>
    );
  } else {
    return (
        <>
         <section className="bg-slate-50 my-10 space-y-3">
        <div className="headerOfSec p-3 space-y-3">
          <h2 className="text-3xl">Shop Cart:</h2>
          <h4 className="text-myColor-700 text-lg">
            Total Cost Price: {cartInfo.data.totalCartPrice} EGP
          </h4>
        </div>

        <div className="products space-y-3">
          {cartInfo.data.products.map((product) => (
            <CartProductItem key={product._id} productInfo={product} />
          ))}
        </div>

      </section>
              <button
              onClick={()=>{clearUserCart()}}
              className="btn bg-red-600 hover:bg-red-700 mb-5 mr-auto"> Clear ALl </button>

        </>
     
    );
  }
}
