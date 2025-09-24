import React from "react";
import { testimonialStyles as styles } from "../assets/dummyStyles";
import testimonials from "../assets/Testimonialdata";
import { FaCar, FaQuoteLeft } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

const Testimorial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Header */}
        <div className={styles.headerContainer}>
          <div className={styles.badge}>
            <FaCar className={`${styles.quoteIcon} mr-2`} />
            <span className={styles.badgeText}>Experiências Do Cliente</span>
          </div>
          <h1 className={styles.title}>
            Premium <span className={styles.accentText}>Drive</span> Experiência
          </h1>
          <div className={styles.dividerContainer}>
            <div className={styles.dividerLine} />
            <GiSteeringWheel
              className={`${styles.accentText} mx-4`}
              size={24}
            />
            <div className={styles.dividerLine} />
          </div>
          <p className={styles.subtitle}>
          Ouça os nossos clientes de valor sobre sua satisfação com nossa frota premium.
          </p>
        </div>
        {/* testimonials card */}
        <div className={styles.grid}>
          {testimonials.map((t, index) => {
            const shape = styles.cardShapes[index % styles.cardShapes.length];
            const IconComponent = styles.icons[index % styles.icons.length];
            return (
              <div
                key={t.id}
                className={styles.card}
                style={{
                  clipPath:
                    "polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)",
                  background:
                    "linear-gradient(145deg, rgba(30,30,40,0.8), rgba(20,20,30,0.8))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(100,100,120,0.2)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
              >
                <div className={styles.cardContent}>
                  <div className="flex justify-between items-start mb-6">
                    <FaQuoteLeft className={styles.quoteIcon} size={28} />
                    {/* Rating */}
                    <div className={styles.ratingContainer}>
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < t.rating ? styles.accentText : "text-gray-700"
                          } ${styles.star}`}
                          size={18}
                        />
                      ))}
                    </div>
                  </div>
                  <p className={styles.comment}>"{t.comment}"</p>
                  <div className={styles.carInfo}>
                    <GiSteeringWheel className={styles.carIcon} size={20} />
                    <span className={styles.carText}>{t.car}</span>
                  </div>
                  <div className={styles.authorContainer}>
                    <div className={styles.avatar}>{t.name.charAt(0)}</div>

                    <div className={styles.authorInfo}>
                      <h3 className={styles.authorName}>{t.name}</h3>
                      <p className={styles.authorRole}>{t.role}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.decorativeCorner} />
                <div className={styles.patternIcon}>
                  <IconComponent size={36} />
                </div>
              </div>
            );
          })}
        </div>
        {/* Stats Sections */}
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statValue(styles.statColors.value[0])}>
                {" "}
                10+
                </div>
                <div className={styles.statLabel(styles.statColors.label[0])}>
                Clientes Satisfeitos
                </div>
              </div>
              <div className={styles.statItem}>
              <div className={styles.statValue(styles.statColors.value[1])}>
                {" "}
                250+
                </div>
                <div className={styles.statLabel(styles.statColors.label[1])}>
                veículos de luxo
                </div>
              </div>
              <div className={styles.statItem}>
              <div className={styles.statValue(styles.statColors.value[2])}>
                {" "}
                24/7
                </div>
                <div className={styles.statLabel(styles.statColors.label[2])}>
                  Support
                </div>
              </div>
              <div className={styles.statItem}>
              <div className={styles.statValue(styles.statColors.value[3])}>
                {" "}
                50+
                </div>
                <div className={styles.statLabel(styles.statColors.label[3])}>
                  Locais
                </div>
              </div>
            </div>
          </div>
          {/* Cta */}
            <div className={styles.ctaContainer}>
                <h2 className={styles.ctaTitle}>
                Pronto para sua experiência premium?
                </h2>
                <p className={styles.ctaText}>
                Junte-se a milhares de clientes satisfeitos que experimentaram nossa frota prmium e excepcional

                </p>
                <a href="/cars" className={styles.ctaButton}>
                Book Your Luxury Ride</a>
            </div>
        </div>
        <div className={styles.bottomGradient} />
      </div>
  );
};

export default Testimorial;
