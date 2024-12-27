import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function SignUp() {

  const [accountExistError, setAccountExistError] = useState(null);

  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const phoneRegex = /^(?:\+20|0020|0)?1[0-9]{9}$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be at most 15 characters"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),

    password: Yup.string()
      .required("Password is required")
      .matches(passwordRegex, "Password must meet the required criteria"),

    rePassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),

    phone: Yup.string()
      .required("Phone number is required")
      .matches(phoneRegex, "Use Egyptian Number."),
  });

  async function handleSubmit(values) {
    const toastLoadingId = toast.loading("Waiting...");
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
        method: "POST",
        data: values,
      };

      const { data } = await axios.request(options);

      if (data.message === "success") {
        toast.success("Account Created successfully");
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      }
    } catch (error) {
      setAccountExistError(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },

    validationSchema,

    onSubmit: handleSubmit,
  });

  return (
    <>
      <section className="py-14">
        <h2 className="text-lg font-semibold">Register Now:</h2>
        <form className="space-y-4 mt-5" onSubmit={formik.handleSubmit}>
          <div className="nameInput">
            <input
              type="text"
              placeholder="enter ur name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control w-full"
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-500 mt-1">*{formik.errors.name}</p>
            )}
          </div>

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

            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 mt-1">*{formik.errors.email}</p>
            )}

            {accountExistError && (
              <p className="text-red-500 mt-1">*{accountExistError}</p>
            )}
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

            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 mt-1">*{formik.errors.password}</p>
            )}
          </div>

          <div className="rePasswordInput">
            <input
              type="password"
              placeholder="enter password again"
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control w-full"
            />

            {formik.errors.rePassword && formik.touched.rePassword && (
              <p className="text-red-500 mt-1">*{formik.errors.rePassword}</p>
            )}
          </div>

          <div className="phoneInput">
            <input
              type="tel"
              placeholder="enter ur phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control w-full"
            />

            {formik.errors.phone && formik.touched.phone && (
              <p className="text-red-500 mt-1">*{formik.errors.phone}</p>
            )}
          </div>

          <button type="submit" className="btn w-full">
            Sign Up
          </button>
        </form>
        <p className="mt-3  text-lg">
          already have account{" "}
          <Link to="/auth/login" className="text-myColor-900 font-semibold">
            log in
          </Link>
        </p>
      </section>
    </>
  );
}
