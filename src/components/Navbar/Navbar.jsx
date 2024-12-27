import React, { useContext } from "react";

import freshCartLogo from "../../assets/imgs/freshcart-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../Context/user.context";

export default function Navbar() {
  const { token, logOut } = useContext(userContext);
  return (
    <>
      <nav className="bg-slate-300 ">
        <div className="container flex items-center py-4 gap-12">
          <div className="Nav-logo">
            <a href="">
              <img src={freshCartLogo} alt="" />
            </a>
          </div>

          {token ? (
            <ul className="flex space-x-4">
              <li>
                <NavLink className={({ isActive }) =>`relative before:absolute before:h-1 before:bg-myColor-900 before:left-0 before:-bottom-1 ${isActive ? "before:w-full font-bold" : "before:w-0"}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    `relative before:absolute before:h-1 before:bg-myColor-900 before:left-0 before:-bottom-1 ${
                      isActive ? "before:w-full font-bold" : "before:w-0"
                    }`
                  }
                  to="/products"
                >
                  products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `relative before:absolute before:h-1 before:bg-myColor-900 before:left-0 before:-bottom-1 ${
                      isActive ? "before:w-full font-bold" : "before:w-0"
                    }`
                  }
                  to="/categories"
                >
                  categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `relative before:absolute before:h-1 before:bg-myColor-900 before:left-0 before:-bottom-1 ${
                      isActive ? "before:w-full font-bold" : "before:w-0"
                    }`
                  }
                  to="/brands"
                >
                  brands
                </NavLink>
              </li>
            </ul>
          ) : (
            " "
          )}

          <Link to="/cart" className="cart-car ml-auto cursor-pointer relative">

            <i className="fa-solid fa-cart-shopping text-lg"></i>



            <div className="card-count h-5 w-5 rounded-full translate-x-1/2 -translate-y-1/2 bg-myColor-700 text-white absolute right-0 top-0 flex justify-center items-center">
              <i className="fa-solid fa-spinner fa-spin text-sm"></i>
            </div>
          </Link>

          <ul className="flex space-x-4">
            <li>
              <a href="">
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-tiktok text-lg"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-twitter text-lg"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-youtube text-lg"></i>
              </a>
            </li>
          </ul>

          <ul className="flex space-x-4">
            {token ? (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `relative before:absolute before:h-1 before:bg-red-500 before:left-0 before:-bottom-1 ${
                      isActive ? "before:w-full font-bold" : "before:w-0"
                    }`
                  }
                  to="/cart"
                >
                  <span onClick={logOut} className="cursor-pointer">
                    <i className="fa-solid fa-right-from-bracket text-lg"></i>
                  </span>
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `relative before:absolute before:h-1 before:bg-myColor-900 before:left-0 before:-bottom-1 ${
                        isActive ? "before:w-full font-bold" : "before:w-0"
                      }`
                    }
                    to="/auth/signup"
                  >
                    SignUp
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `relative before:absolute before:h-1 before:bg-myColor-900 before:left-0 before:-bottom-1 ${
                        isActive ? "before:w-full font-bold" : "before:w-0"
                      }`
                    }
                    to="/auth/login"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
