import NavItem from "./NavItem";
import { useState } from "react";
import { navItems } from "../Data";
import { useNavigate } from "react-router-dom";


export default function Nav() {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
   
    const toggleMenu = () => {
      setOpenMenu(!isOpenMenu);
    };
    const handleHomeClick = ()=>{
        navigate("/")
    }
 

    return (
      <nav>
        <ul className={`nav-list ${isOpenMenu ? "open" : ""}`}>
          <li className="hamburger" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </li>
          <li><i className="fa-brands fa-apple" onClick={handleHomeClick}></i></li>
          <div className={`nav-items ${isOpenMenu ? "show" : ""}`}>
            {navItems.map((item, index) => (
              <NavItem key={index} label={item.label} content={item.content} />
            ))}
          </div>
          <li><i className="fa-solid fa-magnifying-glass"></i></li>
          <li><i className="fa-solid fa-bag-shopping"></i></li>
        </ul>
      </nav>
    );
  }