import milk from "./assets/products/26.png";
import cheese from "./assets/products/5.0.png";
import butter from "./assets/products/69.2.png";
import ayran from "./assets/products/1.8.png";
import vershki from "./assets/products/10.png";
import kefir from "./assets/products/2.5.png";
import yoghurt from "./assets/products/2.5yog.png";
import smetana from "./assets/products/15.png";
const PRODUCTS = [
  {
    id: 1,
    name: "Молоко",
    description: "900 мл, 2.6% ",
    price: 38,
    quantity: 40,
    photo: milk,
  },
  {
    id: 2,
    name: "Сир",
    description: "300г, кисломолочний 5% ",
    price: 45,
    quantity: 30,
    photo: cheese,
  },
  {
    id: 3,
    name: "Масло",
    description: "200г, 69.2% ",
    price: 45,
    quantity: 30,
    photo: butter,
  },
  {
    id: 4,
    name: "Айран зі смаком кропу ",
    description: "450мл, 1.8% ",
    price: 18,
    quantity: 50,
    photo: ayran,
  },
  {
    id: 5,
    name: "Вершки",
    description: "500мл, 10%",
    price: 45,
    quantity: 40,
    photo: vershki,
  },
  {
    id: 6,
    name: "Кефір",
    description: "900г, 2.5%",
    price: 30,
    quantity: 40,
    photo: kefir,
  },
  {
    id: 7,
    name: "Сметана",
    description: "400г, 15%",
    price: 35,
    quantity: 40,
    photo: smetana,
  },
  {
    id: 8,
    name: "Йогурт ",
    description: "200г, 2.5%",
    price: 16,
    quantity: 50,
    photo: yoghurt,
  },
];

export default PRODUCTS;
