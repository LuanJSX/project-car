import React, { useEffect, useState } from "react";
import { homeCarsStyles as styles } from "../assets/dummyStyles";
import carsData from "../../src/assets/HcarsData.js";
import { Zap, Users, Fuel, Gauge, CircleCheck  } from "lucide-react";
import { useNavigate } from "react-router-dom";


const HomeCars = () => {
  const navigate = useNavigate();
  const [animateCards, setAnimateCards] = useState(false);
  const [hoverCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = (e) => {
    const wrapper = e.target.parentNode;
    e.target.remove();
    const placeholder = document.createElement("div");
    placeholder.className = styles.placeholder;
    placeholder.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48"><path d="M3 6.75C3 5.78 3.78 5 4.75 5h14.5c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75H4.75A1.75 1.75 0 0 1 3 17.25V6.75zM8.5 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>';
    wrapper.appendChild(placeholder);
  };

  const visibleCars = carsData.slice(0, 6);

  return (
    <div className={styles.container}>
      {/*  Header */}
      <div className={styles.headerContainer}>
        {" "}
        <div className={styles.premiumBadge}>
          <Zap className="w-4 h-4 text-amber-400 mr-2" />
          <span className={styles.premiumText}>
            🔘 Seleção de Frota Premium
          </span>
        </div>
        <h1 className={styles.title}>Coleção de Carros de Luxo</h1>
        <p className={styles.subtitle}>
          Descubra veículos premium com desempenho excepcional e conforto para a
          sua próxima jornada
        </p>
      </div>

      {/* Cars Grid */}
      <div className={styles.grid}>
        {visibleCars.map((car, idx) => {
          const patternStyle =
            styles.cardPatterns[idx % styles.cardPatterns.length];
          const borderStyle =
            styles.borderGradients[idx % styles.borderGradients.length];
          const shapeStyle = styles.cardShapes[idx % styles.cardShapes.length];

          return (
            <div
              key={car.id}
              onMouseEnter={() => setHoveredCard(car.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`${
                styles.card
              } ${patternStyle} border ${borderStyle} ${
                animateCards ? "opacity-100" : "opacity-0 translate-y-10"
              } hover:shadow-2xl hover:-translate-y-3`}
              style={{
                clipPath:
                  "polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)",
                transformStyle: "preserve-3d",
                transitionDelay: `${animateCards ? idx * 100 : 0}ms`,
              }}
            >
              <div className={styles.borderOverlay} />

              <div className={styles.priceBadge}>
                <span className={styles.priceText}>${car.price}/dia</span>
              </div>

              <div className={styles.imageContainer}>
                <img
                  src={car.image}
                  alt={car.name}
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform:
                      hoverCard === car.id
                        ? "rotate(0.5deg)"
                        : "scale(1) rotate(0)",
                  }}
                />
              </div>
              <div className={styles.content}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className={styles.carName}>{car.name}</h3>
                    <p className={styles.carInfoContainer}>
                      <span className={styles.carTypeBadge}>{car.type}</span>
                      <span className={styles.carYear}>{car.carYear}</span>
                    </p>
                  </div>
                </div>

                <div className={styles.specsGrid}>
                  {[
                    { icon: Users, value: car.seats, label: "Seats" },
                    { icon: Fuel, value: car.fuel, label: "Fuel" },
                    { icon: Gauge, value: car.mileage, label: "Mileage" },
                    {
                      icon: CircleCheck,
                      value: car.transmission,
                      label: "Trans",
                    },
                  ].map((spec, i) => (
                    <div key={i} className={styles.specItem}>
                        <div className={styles.specIconContainer(hoverCard === car.id)}>
                            <spec.icon className={styles.specIcon(hoverCard === car.id)}/>
                        </div>
                      <span className={styles.specValue}>{spec.value}</span>
                      <span className={styles.specLabel}>{spec.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCars;
