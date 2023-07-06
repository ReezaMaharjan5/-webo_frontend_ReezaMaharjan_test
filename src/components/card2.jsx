import dummyImage from "../assests/orangebox2.svg";
import "./card2css.css";

const CardFeatures = (props) => {
  return (
    <div className="cardContainer2" key={props.key}>
      <div className="imagebox2">
        <img src={dummyImage} alt="no image" />
      </div>
      <h3 className="cardheading2">{props.title}</h3>
      <div className="cardparagraph2">{props.paragraph}</div>
    </div>
  );
};

export default CardFeatures;