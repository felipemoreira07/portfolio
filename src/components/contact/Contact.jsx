import "./contact.scss";
import { GitHub , LinkedIn } from "@material-ui/icons";

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="itemContainer">
            <GitHub className="icon"/>
            <a href="https://github.com/felipemoreira07">felipemoreira07</a>
            <LinkedIn className="icon"/>
            <a href="https://www.linkedin.com/in/felipe-moreira-a3762323a/">Felipe Moreira</a>
        </div>
      </div>
    </div>
  );
}