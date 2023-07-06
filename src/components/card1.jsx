// import './cardcss.css';
import dummyImage from "../assests/GroupYellow.svg";
import "./cardcss.css";

const Card = (props) => {
  return (
    <div className="cardContainer" key={props.key}>
      <span className="number">{props.number}</span>
      {/* <img src={props.image} alt="no image" /> */}
      <div className="imagebox">
        <img src={dummyImage} alt="no image" />
      </div>
        {/* <img className="imagebox" src={props.image} alt="no image" /> */}
      <h3 className="cardheading">{props.title}</h3>
      <div className="cardparagraph">{props.paragraph}</div>
    </div>
  );
};

export default Card;
