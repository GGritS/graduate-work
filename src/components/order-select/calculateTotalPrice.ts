import { calculateProductTotalPrice } from "../../helpers/calculateProductTotalPrice";
import { ProductCardValue } from "../../types";

export const calculateTotalPrice = (selectedProducts: ProductCardValue[]) => {
  let totalPrice = 0;
  selectedProducts.forEach((product) => {
    totalPrice += calculateProductTotalPrice(product);
  });
  return totalPrice;
};
