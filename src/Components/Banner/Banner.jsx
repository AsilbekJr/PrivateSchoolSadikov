import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./Banner.css";

const content = [
  {
    title: "Sifatli va kafolatlangan ta'lim.",
    description:
      "Biz taklif qilayotgan ta'lim tajribalardan o'tgan va zamonaviy metodlarga asoslangan ta'lim. Biz bilan sifatli va kafolatlangan ta'lim oling!",
    button: "Batafsil",
    image: "https://www.uschamberfoundation.org/sites/default/files/ATboyraisehand.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Turli yo'nalishlardagi fanlar.",
    description:
      "Bizda turli fanlar bo'yicha alohda yo'nalishlar mavjud. Siz o'z yo'nalishingiz bo'yicha chuqur va sifatli ta'lim olasiz va o'z maqsadlaringiz tomon dadil qadam tashlaysiz.",
    button: "Batafsil",
    image: "./image/schoolSadikov.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Qulay va zamonaviy sinf xonalari.",
    description:
      "Darslar zamonaviy sinf xonalarida olib boriladi. Har bir sinf xonasi zamonaviy jihozlar bilan ta'minlangan. Bu yerda sizning bilim olishingiz uchun qulay muhit mavjud.",
    button: "Batafsil",
    image: "https://www.gannett-cdn.com/presto/2022/01/25/PPHX/55389fe2-9a5b-4950-b71e-a34e719cb8e2-Classroom_iStockPhoto_GettyImages.jpg?crop=5621,3162,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

const Banner = () => (
  <div>
    <Slider className="slider-wrapper" autoplay="4000" infinite="true" minSwipeOffset="150">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center/cover` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button style={{cursor:"pointer"}}>{item.button}</button>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);


export default Banner

