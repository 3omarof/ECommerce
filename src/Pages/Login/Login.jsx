import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/user.context";

export default function Login() {
  const [failedError, setFailedError] = useState(null);
  const { token, setToken } = useContext(userContext);

  const navigate = useNavigate();

  async function handleLogin(values) {
    const toastLoadingId = toast.loading("Waiting...");

    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
        method: "POST",
        data: values,
      };

      const { data } = await axios.request(options);

      if (data.message === "success") {
        toast.success("Logged in Successfully");
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      setFailedError(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
  });

  return (
    <>
      <section className="py-14">
        <h2 className="text-lg font-semibold">Log in:</h2>
        <form className="space-y-4 mt-5" onSubmit={formik.handleSubmit}>
          <div className="emailInput">
            <input
              type="email"
              placeholder="enter ur email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control w-full"
            />
          </div>

          <div className="passwordInput">
            <input
              type="password"
              placeholder="enter password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control w-full"
            />
            {failedError && <p className="text-red-500 mt-3">*{failedError}</p>}
          </div>

          <button type="submit" className="btn w-full">
            Log in
          </button>
        </form>
        <div>
          <p className="mt-3  text-lg">
            don`t have account go to <Link to="/auth/signup" className="text-myColor-900 font-semibold">Sign UP</Link>
          </p>
        </div>
      </section>
    </>
  );
}
