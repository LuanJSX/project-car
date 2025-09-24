import React from "react";
import { footerStyles as styles } from "../assets/dummyStyles";
import logo from "../assets/logocar.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkedAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.topElements}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.roadLine} />
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.grid}>
          <div className={styles.brandSection}>
            <Link to="/" className="flex items-center">
              <div className={styles.logoContainer}>
                <img
                  src={logo}
                  alt="logo"
                  className="h-[1em] w-auto block"
                  style={{
                    display: "block",
                    objectFit: "contain",
                  }}
                />
                <span className={styles.logoText}>CARZONE JF</span>
              </div>
            </Link>
            <p className={styles.description}>
              Serviço de aluguer de carros premium com os modelos mais recentes
              e excepcional. serviços ao cliente.
            </p>
            <div className={styles.socialIcons}>
              {[
                FaFacebookF,
                FaTwitter,
                FaInstagram,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, i) => (
                <a href="#" key={i} className={styles.socialIcon}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.sectionTitle}>
              Quick Links
              <span className={styles.underline} />
            </h3>
            <ul className={styles.linkList}>
              {["Home", "Cars", "Contact Us"].map((link, i) => (
                <li key={i}>
                  <a
                    href={
                      link === "Home"
                        ? "/"
                        : link === "Contact Us"
                        ? "/contact"
                        : "/cars"
                    }
                    className={styles.linkItem}
                  >
                    <span className={styles.bullet}></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={styles.sectionTitle}>
            Contato
            <span className={styles.underline} />
            </h3>
            
            <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                    <FaMapMarkedAlt className={styles.contactIcon} />
                    <span>123 CarZone JF, Juiz de fora</span>
                </li>
                <li className={styles.contactItem}>
                    <FaPhone className={styles.contactIcon} />
                    <span>(32)555888</span>
                </li>

                <li className={styles.contactItem}>
                    <FaEnvelope className={styles.contactIcon} />
                    <span>luantrabalho49@gmail.com</span>
                </li>
            </ul>
            <div className={styles.hoursContainer}>
                <h4 className={styles.hoursTitle}>Bussiness Hours</h4>
                <div className={styles.hoursText}>
                    <p>Monday - Friday: 8:00 Am - 0:00 PM</p>
                    <p>Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
            </div>
          </div>
          {/* Neswlester */}
            <div>
                <h3 className={styles.sectionTitle}>
                    NewSletter
          <span className={styles.underline}></span>
                </h3>
                <p className={styles.newsletterText}>
                    subvribe for especial offers and update
                </p>

                <form className="space-y-3">
                    <input type="email" 
                    placeholder="Seu Email"
                    className={styles.input}/>

                  <button type="submit" className={styles.subscribeButton}><GiCarKey className="mr-2 text-lg sm:text-xl" />
                  subscribe now
                  </button>
                </form>
            </div>
        </div>
        {/*  Copyright*/}
        <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear} Luan. All rights Reserved.</p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
