import amazonPayLogo from "../../assets/imgs/amazon-pay.png";
import americanExpressLogo from "../../assets/imgs/American-Express-Color.png";
import appleStoreLogo from "../../assets/imgs/get-apple-store.png";
import googlePlayLogo from "../../assets/imgs/get-google-play.png";
import paypalLogo from "../../assets/imgs/paypal.png";
import mastercardLogo from "../../assets/imgs/mastercard.webp";


export default function Footer() {
  return (
    <>
    <footer className="bg-slate-300 py-5 ">
      <div className="container space-y-4">
      <div className="header-footer">
        <h2 className="text-xl text-slate-800">Get The FreshCart App</h2>
        <p className="text-slate-400">We Will Send U A Link,Open it on your Phone to download the app </p>
      </div>
      <div className="flex gap-2">
        <input type="email" placeholder="enter ur Email" className="form-control grow" />
        <button className="btn">Share App Link</button>
      </div>
      <div className="footer-footer flex justify-between items-center py-4 border-y-2 border-slate-800 border-opacity-5">
        <div className="first flex justify-between items-center space-x-2">
        <p>payment Partners</p>
           <img src={amazonPayLogo} alt=""className="w-24" />
           <img src={americanExpressLogo} alt=""className="w-24" />
           <img src={mastercardLogo} alt=""className="w-20" />
           <img src={paypalLogo} alt="" className="w-24"/>
        </div>
        <div className="second flex justify-between items-center space-x-2">
        <p>get deliveries with FreshCart</p>
        <img src={appleStoreLogo} alt="" className="w-24"/>
        <img src={googlePlayLogo} alt="" className="w-24"/>
        </div>
      </div>
      </div>
     
    </footer>
    </>
  )
}
