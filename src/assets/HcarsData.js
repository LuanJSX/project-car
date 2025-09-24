// src/data/carsData.js
import HC1 from "../assets/HC1.png";
import HC2 from "../assets/HC2.png";
import HC3 from "../assets/HC3.png";
import HC4 from "../assets/HC4.png";
import HC5 from "../assets/HC5.png";
import HC6 from "../assets/HC6.png";

const carsData = [
  {
    id: 1,
    name: "Toyota Corolla",
    type: "Compact Sedan",
    price: 180, // R$180 por dia
    image: HC1,
    description: "Confiável, econômico e ideal para o dia a dia.",
    seats: 5,
    fuel: "Gasolina",
    mileage: "12 km/L",
    transmission: "Automático"
  },
  {
    id: 2,
    name: "Honda Civic",
    type: "Compact Sedan",
    price: 200, // R$200 por dia
    image: HC2,
    description: "Direção esportiva com tecnologia moderna.",
    seats: 5,
    fuel: "Gasolina",
    mileage: "11 km/L",
    transmission: "Automático"
  },
  {
    id: 3,
    name: "Volkswagen Golf",
    type: "Hatchback",
    price: 220, // R$220 por dia
    image: HC3,
    description: "Hatch prático com motor potente.",
    seats: 5,
    fuel: "Gasolina",
    mileage: "10 km/L",
    transmission: "Manual"
  },
  {
    id: 4,
    name: "Hyundai Elantra",
    type: "Compact Sedan",
    price: 190, // R$190 por dia
    image: HC4,
    description: "Confortável, com muitos recursos tecnológicos.",
    seats: 5,
    fuel: "Gasolina",
    mileage: "12 km/L",
    transmission: "Automático"
  },
  {
    id: 5,
    name: "Nissan Altima",
    type: "Midsize Sedan",
    price: 250, // R$250 por dia
    image: HC5,
    description: "Espaçoso e confortável para longas viagens.",
    seats: 5,
    fuel: "Gasolina",
    mileage: "10 km/L",
    transmission: "Automático"
  },
  {
    id: 6,
    name: "Chevrolet Cruze",
    type: "Compact Sedan",
    price: 170, // R$170 por dia
    image: HC6,
    description: "Eficiente, equilibrado e fácil de dirigir.",
    seats: 5,
    fuel: "Diesel",
    mileage: "13 km/L",
    transmission: "Manual"
  }
];

export default carsData;
