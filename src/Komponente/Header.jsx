import "../css/Header.css";
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
export default function Header() {
  return (
    <header className="Header">
      <div className="Logo">
        <div>
          <img
            src="https://annamariesdesign.wordpress.com/wp-content/uploads/2013/04/finished-red-gear-computers-outline1.jpg"
            alt="Logo"
          />
        </div>
        <div className="Naziv-Sajta">
          <h1>HardwareShop</h1>
        </div>
      </div>
      <div className="Header-Ostalo">
        <div>
          <FcBusinessman />
        </div>
        <div>
          <AiOutlineBars />
        </div>
      </div>
    </header>
  );
}
