// import './cardcss.css';
import dummyImage from "../assests/GroupYellow.svg";
import "./cardcss.css";

const Card = (props) => {
  return (
    <div className="cardContainer" key={props.key}>
      <span className="number">{props.number}</span>
    
      <div className="imagebox">
        <img src={dummyImage} alt="no image" />
      </div>
      <h3 className="cardheading">{props.title}</h3>
      <div className="cardparagraph">{props.paragraph}</div>
    </div>
  );
};

export default Card;
