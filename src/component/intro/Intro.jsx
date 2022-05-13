import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [
        "Designer",
        "React Frontend Developer",
        "Golang Backend Developer",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="img\imageIsaiah.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there!</h2>
          <h1>Peter Isaiah</h1>
          <h3>
            freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="img\down-arrow.png" alt />
        </a>
      </div>
    </div>
  );
};

export default Intro;
