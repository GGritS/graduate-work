import { Container } from "@mui/system";
import Slider, { SliderItem } from "../Slider";

import zavod1 from "../../../../assets/zavod1.jpg";
import zavod2 from "../../../../assets/zavod2.jpg";
import zavod3 from "../../../../assets/zavod3.jpg";
import zavod4 from "../../../../assets/zavod4.jpg";

import "./Content.css";
import OrderForm from "../order-form";
import { CustomerData, ProductCardValue } from "../../../../types";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import PRODUCTS from "../../../../productsData";
import { OrderSelect } from "../order-select";
import { calculateTotalPrice } from "../order-select/calculateTotalPrice";
import { useOrdersContext } from "../../../../context/orders/OrdersContext";

export const Content = () => {
  const { handleAddOrder } = useOrdersContext();
  const [customerData, setCustomerData] = useState<CustomerData>({
    firstName: "",
    address: "",
    phoneNumber: "",
  });
  const [selectedProductTitle, setSelectedProductTitle] = useState<string[]>(
    []
  );
  const [selectedProducts, setSelectedProducts] = useState<ProductCardValue[]>(
    []
  );

  const handleChangeCustomerData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeSelectedProducts = (
    event: SelectChangeEvent<typeof selectedProductTitle>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedProductTitle(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const preparedSelectedProducts = selectedProducts.map((product) => {
      return {
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
      };
    });

    const preparedOrder = {
      customerName: customerData.firstName,
      customerAddress: customerData.address,
      customerPhoneNumber: customerData.phoneNumber,
      customerOrders: preparedSelectedProducts,
      totalPrice: calculateTotalPrice(selectedProducts),
    };
    handleAddOrder(preparedOrder);
    setSelectedProducts([]);
    setSelectedProductTitle([]);
    setCustomerData({
      firstName: "",
      address: "",
      phoneNumber: "",
    });
  };

  const handleAddSelectedProduct = (id: number) => {
    if (selectedProductTitle.includes(PRODUCTS[id].name)) {
      setSelectedProductTitle(
        selectedProductTitle.filter((title) => title !== PRODUCTS[id].name)
      );
      setSelectedProducts(
        selectedProducts.filter((product) => product.id !== PRODUCTS[id].id)
      );
    } else {
      setSelectedProductTitle((prev) => [...prev, PRODUCTS[id].name]);
      setSelectedProducts((prev) => [PRODUCTS[id], ...prev]);
    }
  };

  return (
    <>
      <Container className="container" maxWidth={false}>
        <h1>Свіже та натуральне молоко, доставлене прямо до вас</h1>
        <div className="main-container">
          <p className="intro">
            Ласкаво просимо на наш завод з виробництва молока. Ми пишаємося тим,
            що пропонуємо нашим клієнтам найсвіжіше і натуральне молоко, багате
            поживними речовинами.
          </p>
          <Slider>
            <SliderItem>
              <img className="sliderImage" src={zavod1} alt="" />
            </SliderItem>
            <SliderItem>
              <img className="sliderImage" src={zavod2} alt="" />
            </SliderItem>
            <SliderItem>
              <img className="sliderImage" src={zavod3} alt="" />
            </SliderItem>
            <SliderItem>
              <img className="sliderImage" src={zavod4} alt="" />
            </SliderItem>
          </Slider>
        </div>
        <div className="wrapper">
          <OrderForm
            changeCustomerData={handleChangeCustomerData}
            customerData={customerData}
          />
          <OrderSelect
            handleChangeSelectedProducts={handleChangeSelectedProducts}
            handleFormSubmit={handleFormSubmit}
            product={selectedProductTitle}
            selectedProducts={selectedProducts}
            setProduct={setSelectedProductTitle}
            setSelectedProducts={setSelectedProducts}
            handleAddSelectedProduct={handleAddSelectedProduct}
          />
        </div>
      </Container>
    </>
  );
};
