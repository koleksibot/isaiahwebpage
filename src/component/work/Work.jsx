import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";

const Work = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      icon: "img/smartphone.png",
      title: "Social Ground",
      disc: "Social Ground is  social media app for intaracting with friends and family",
      img: "img/third-image.png",
    },
    {
      id: 2,
      icon: "img/smartphone.png",
      title: "Netfley",
      disc: "Netfley clone of Netflex",
      img: "img/second-work.png",
    },
    {
      id: 3,
      icon: "img/smartphone.png",
      title: "Shoppy",
      disc: "This is a e-commerce app where you buy any cloths goods",
      img: "img/first-work.png",
    },
  ];

  const handleClick = (arrow) => {
    arrow === "left" &&
      setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2);
    arrow === "right" &&
      setCurrentSlider(currentSlider > 1 ? 0 : currentSlider + 1);
  };
  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.disc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div onClick={() => handleClick("left")}>
        <ArrowBackIos className="arrow left" />
      </div>
      <div onClick={() => handleClick("right")}>
        <ArrowForwardIos className="arrow right" />
      </div>
    </div>
  );
};

export default Work;
