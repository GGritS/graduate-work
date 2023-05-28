import { Container } from "@mui/system";
import Slider, { SliderItem } from "../Slider";

import zavod1 from "../../assets/zavod1.jpg";
import zavod2 from "../../assets/zavod2.jpg";
import zavod3 from "../../assets/zavod3.jpg";
import zavod4 from "../../assets/zavod4.jpg";

import "./Content.css";
import OrderForm from "../order-form";
import OrderSelect from "../order-select";

export const Content = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data, "data");
  };

  return (
    <>
      <Container className="container" maxWidth="false">
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
          <OrderForm onSubmit={handleSubmit} />
          <OrderSelect />
        </div>
      </Container>
    </>
  );
};
