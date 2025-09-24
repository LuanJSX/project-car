import React, { useCallback, useEffect, useRef, useState } from "react";
import { navbarStyles as styles } from "../assets/dummyStyles.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logocar.png";
import { FaSignInAlt, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("authToken")
  );
  const location = useLocation();
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cars", label: "Cars" },
    { to: "/contact", label: "Contact" },
  ];

  // it will add a scroll listener
  useEffect (() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  // it will get the authtoken from localstore
  useEffect (() => {
    const handleStoreChange = () => {
        setIsLoggedIn(!!localStorage.getItem('authToken'));
    }
    window.addEventListener('storage', handleStoreChange);
    return() => window.removeEventListener('storage', handleStoreChange)
  }, [])
    
  // it will maintain login when authtoken is present for all routrs
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('authToken'));
    setIsOpen(false);
  }, [location]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/", { replace: true });
    setIsOpen(false);
  }, [navigate]);
 
 useEffect(() => {
    const handleClickOutside = (event) => {
        if (
            isOpen &&
            menuRef.current &&
            buttonRef.current &&
            !menuRef.current.contains(event.target) &&
            !buttonRef.current.contains(event.target)
        ) {
            setIsOpen(false)
        }
    };
    document.addEventListener('mousedown', handleClickOutside)
    return() => document.removeEventListener('mousedown',handleClickOutside);
 },[isOpen]);

 useEffect(() => {
    const handleKey = (e) => {
        if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
 }, [isOpen])
 

 useEffect (() => {
    const handleResize = () => {
        if (window.innerWidth >= 1024) setIsOpen(false)
    };

    window.addEventListener('resize', handleResize);
    return() => window.removeEventListener('resize', handleResize);
 }, [])


  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };
  return (
    <nav
      className={`${styles.nav.base} ${
        scrolled ? styles.nav.scrolled : styles.nav.notScrolled
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div
            className={`${styles.floatingNav.base} ${
              scrolled
                ? styles.floatingNav.scrolled
                : styles.floatingNav.notScrolled
            }`}
            role="region"
            aria-roledescription="navigation"
          >
            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="flex items-center">
                <div className={styles.logoContainer}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-[1em] w-auto block"
                    style={{ display: "block", objectFit: "contain" }}
                  />
                  <span className={styles.logoText}>CARZONE JF</span>
                </div>
              </Link>
              <div className={styles.navLinksContainer}>
                <div className={styles.navLinksInner}>
                  {navLinks.map((link, index) => (
                    <React.Fragment key={link.to}>
                      <Link
                        to={link.to}
                        className={`${styles.navLink.base}
                               ${
                                 isActive(link.to)
                                   ? styles.navLink.active
                                   : styles.navLink.inactive
                               }`}
                      >
                        {link.label}
                      </Link>

                      {index < navLinks.length - 1 && (
                        <div className={styles.separator} aria-hidden="true" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className={styles.userActions}>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className={style.authButton}
                    aria-label="Logout"
                  >
                    <FaSignInAlt className="text-base" />
                    <span className={styles.authText}>logout</span>
                  </button>
                ) : (
                  <button
                    to="/login"
                    className={styles.authButton}
                    aria-label="Login"
                  >
                    <FaUser className="text-base" />
                    <span className={styles.authText}>Login</span>
                  </button>
                )}
              </div>
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen((p) => !p)}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  className={styles.mobileAuthButton}
                  ref={buttonRef}
                >
                  {isOpen ? (
                    <FaTimes className="h-5 w-5" />
                  ) : (
                    <FaBars className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!isOpen}
        className={`${styles.mobileMenu.container} ${
          isOpen ? styles.mobileMenu.open : styles.mobileMenu.closed
        }`}
      >
        <div className={styles.mobileMenuInner}>
          <div className="px-4 pt-3 pb-4 space-y-2">
            <div className={styles.mobileGrid}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsLoggedIn(false)}
                  className={`${styles.mobileLink.base} ${
                    isActive(link.to)
                      ? styles.mobileLink.active
                      : styles.mobileLink.inactive
                  }`} 
                >
                    {link.label}
                    </Link>
              ))}
            </div>
            <div className={styles.divider}>
                <div className="pt-1">
                {isLoggedIn ? (
                    <button onClick={handleLogout}
                    className={styles.mobileAuthButton}>
                <FaSignInAlt className="mr-3 text-base" />
                logout
                    </button>
                ) : (
                    <Link to="/login"
                    className={styles.mobileAuthButton}
                    onClick={() => setIsOpen(false)}
                    >
                    <FaUser className=" mr-3 text-base"/>
                    Login
                    </Link>
                )}
                </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
