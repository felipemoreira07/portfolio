import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/writing.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Felipe Moreira</h1>
          <h3>
            Front-end Developer
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}