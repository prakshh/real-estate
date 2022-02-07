import styles from "Navbar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={styles.navbar_container}>
    <nav>
      {/* LOGO */}
      <div className={styles.brand_logo}>
        <Link to="/">Real</Link>
      </div>

      {/* NAV-BURGER */}
      <div
        className={styles.mobile_menu}
        style={{ color: BurgerColour }}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <FaBars />
      </div>

      {/* NAV */}
      <ul
        className={`${isNavOpen ? styles.ul_active : undefined} ${
          styles.navbar_ul
        }`}
        ref={domNode}
      >
        <div
          className={styles.mobile_close}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaTimes />
        </div>
        
      </ul>

    </nav>
  </div>
);
};

export default Navbar;
