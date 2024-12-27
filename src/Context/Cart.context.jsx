import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { userContext } from "./user.context";
import toast from "react-hot-toast";

// Create cart context
export const cartContext = createContext(null);

export default function CartProvider({ children }) {
  const { token } = useContext(userContext);
  const [cartInfo, setCartInfo] = useState(null);

  // Function to add items to the cart
  async function addProductToCart({ productId }) {
    const loadingToastId = toast.loading(
      "we try to add ur product to cart now..."
    );
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "POST",
        headers: {
          token,
        },
        data: {
          productId,
        },
      };
      const { data } = await axios.request(options);
      console.log(data);

      if (data.status === "success") {
        toast.success(data.message);
      }
    } catch (error) {
      console.error("Error from adding to cart:", error);
    } finally {
      toast.dismiss(loadingToastId);
    }
  }

  // Function to get products at cart
  async function getProducts() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "GET",
        headers: {
          token,
        },
      };
      const { data } = await axios.request(options);
      console.log(data);

      setCartInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to update products quantity
  async function updateProductQuantity({ id, count }) {
    const toastLoadingId = toast.loading("wait...");
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "PUT",
        headers: {
          token,
        },
        data: {
          count,
        },
      };
      const { data } = await axios.request(options);
      if (data.status === "success") {
        setCartInfo(data);
        toast.success("Quantity has been modified successfully.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  }

  // Function to remove Specific Cart Item
  async function removeSpecificCartItem({ id }) {
    const toastLoadingId = toast.loading("wait...");
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method: "DELETE",
        headers: {
          token,
        },
      };
      const { data } = await axios.request(options);
      setCartInfo(data);
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  }

  // Function to Clear user cart
  async function clearUserCart() {
   const loadingToastId= toast.loading("wait...")
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/cart",
        method: "DELETE",
        headers: {
          token,
        },
      };
      const { data } = await axios.request(options);
      console.log(data);
      if(data.message==="success"){
        toast.success("clear succssesfully")
        setCartInfo({
            numOfCartItems:0
        })
      }
    } catch (error) {
      console.log(error);
    }finally{
        toast.dismiss(loadingToastId);
    }
  }

  return (
    <cartContext.Provider
      value={{
        addProductToCart,
        getProducts,
        cartInfo,
        updateProductQuantity,
        removeSpecificCartItem,
        clearUserCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
