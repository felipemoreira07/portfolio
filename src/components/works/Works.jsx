import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Coding with Sass, Module CSS and Material UI, different layouts can be built productively and effectively  ",
      img:
        "https://miro.medium.com/max/1104/1*H_b2Ey1lvUiRqrgNvYYiOw.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "React's Workflow",
      desc:
        "By the principles of Reusability and Separation of Concerns, React makes possible the creation of re-usable and reactive components consisting of HTML, JavaScript and CSS",
      img:
        "https://miro.medium.com/max/1400/1*u8hTumGAPQMYZIvfgQMfPA.jpeg"
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt={d.desc}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}