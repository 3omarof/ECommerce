import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function LayOut() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
}
