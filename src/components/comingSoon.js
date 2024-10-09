import react from "react";
import logo from "../assets/images/logo.png";
import "../css/comingSoon.css";
import "../css/all.css";
const ComingSoon = () => {
  return (
    <div className="section">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} className="logo" />
        </div>
      </nav>
      <div className="pars">
        <p className="p1">WE'RE STILL</p>
        <p className="p2">Cooking Our Website.</p>
        <p className="p3">
          We are going to launch our website Very Soon. Stay Tune.
        </p>
      </div>
      <div className="btn-container">
        <button className="btn">
          <div className="btn-content">
            <div className="icon1">
              <i className="far fa-envelope "></i>
            </div>
            <p>Notify Me</p>
            <i className="fas fa-chevron-right icon2"></i>
          </div>
        </button>
      </div>
    </div>
  );
};
export default ComingSoon;
