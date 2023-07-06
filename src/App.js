//main page for jsx for the e-commerce website of AR SHIKIR
//images of logo
import Vector from "./assests/AR Shakir.svg";
import business1 from "./assests/img1.svg";
import business2 from "./assests/img2.svg";
import business3 from "./assests/img3.svg";
import business4 from "./assests/img4.svg";
import business5 from "./assests/img5.svg";
import business6 from "./assests/img6.svg";
import business7 from "./assests/img7.svg";

//images of hand holding cards
import card1 from "./assests/handcard.svg";
import card2 from "./assests/handcard1.svg";

//vector backgrounds
import cross1 from "./assests/1cross.svg";
import thumb1 from "./assests/1thumb.svg";
import circle1 from "./assests/1circle.svg";
import dot1 from "./assests/1dot.svg";
import orangebg from "./assests/orangesemicircle.svg";
import greenbg from "./assests/greensemicircle.svg";
import purplebg from "./assests/purplehalf.svg";

//image of profile tracking payments
import face1 from "./assests/face1.svg";
import face2 from "./assests/face2.svg";
import face3 from "./assests/face3.svg";
import face4 from "./assests/face4.svg";

//images of small icons
import starIcon from "./assests/star.svg";
import manIcon from "./assests/man.svg";
import greencircleplay from "./assests/greencircle1.svg";
import bluetickIcon from "./assests/bluetick.svg";
import orangetickIcon from "./assests/orangetick.svg";
import dropdown from "./assests/dropdown.svg";
import quoteIcon from "./assests/1double.svg";

//images of small box icons
import orange1 from "./assests/orangebox1.svg";
import dummyImage from "./assests/GroupYellow.svg";

import bargraph from "./assests/bargraph.svg";
import dash1 from "./assests/1dash.svg";

import Footer from "./footer";

// import Yellow2 from "./assests/GroupYellow.svg";
import Yellow2 from "./assests/AR Shakir.svg";

import "./App.css";
import "./index.css";
import Card from "./components/card1";
import CardFeatures from "./components/card2";

function App() {
  const array = [
    business2,
    business1,
    business3,
    business4,
    business5,
    business6,
    business7,
  ];
  const cardArray = [
    {
      number: "01",
      title: "Connect wallets & companies",
      image: "orange1",
      paragraph:
        "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ",
    },
    {
      number: "02",
      title: "Review transactions",
      image: { Vector },
      paragraph:
        "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ",
    },
    {
      number: "03",
      title: "Get income insights",
      image: { Vector },
      paragraph:
        "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ",
    },
  ];
  const cardArray2 = [
    {
      title: "Really boy law county she unable her sister",
      image: { Yellow2 },
      paragraph:
        "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
    },
    {
      title: "Among sex are leave law built now",
      image: { Vector },
      paragraph:
        "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
    },
  ];

  return (
    <>
      <div className="mainContainer">
        <div className="wrapper1Container">
          <div className="navBarContainer">
            <div className="navLogoImage">
              <img src={Vector} alt="logo of AR SHAKIR" />
            </div>

            <div className="navBarLinks">
              <p>
                <a href="" target="_blank">
                  Product{" "}
                  <img
                    src={dropdown}
                    className="dropdown"
                    alt="dropdown icon"
                  />
                </a>
              </p>
              <p>
                <a href="" target="_blank">
                  Template{" "}
                  <img
                    src={dropdown}
                    className="dropdown"
                    alt="dropdown icon"
                  />
                </a>
              </p>
              <p>
                <a href="" target="_blank">
                  Blog
                </a>
              </p>
              <p>
                <a href="" target="_blank">
                  Pricing
                </a>
              </p>
            </div>
            <div className="navSignIn">
              <p className="signIn">
                <a href="" target="_blank">
                  Sign In
                </a>
              </p>
              <button type="button" className="startFreeButton">
                <a href="" target="_blank">
                  Start Free
                </a>
              </button>
            </div>
          </div>
          <div className="leftrightcontainer">
            <div className="leftContent1">
              <p className="heading1">
                Managing freelance payments has never been easier
              </p>

              <p className="leftparagraph1">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing.
              </p>

              <div className="leftContent1B1">
                <div className="buttonblue">
                  <button className="getStartedButton" type="button">
                    <a href="" target="_blank">
                      {" "}
                      Get Started{" "}
                    </a>
                  </button>
                </div>
                {/*     padding: 16px 19px; */}
                <div className="leftContain1">
                  <img
                    className="videoHowWorks"
                    src={greencircleplay}
                    alt="green play icon"
                  />
                  <a href="#" className="videoLink" target="_blank">
                    <span>See How It Works</span>
                  </a>
                </div>
              </div>

              <div className="leftContent1B2">
                <p>
                  <img
                    src={bluetickIcon}
                    className="bluetick"
                    alt="blue tick icon"
                  />
                  Free Register
                </p>
                <p>
                  <img
                    src={bluetickIcon}
                    className="bluetick"
                    alt="blue tick icon"
                  />
                  Great Service
                </p>
              </div>
            </div>

            <div className="rightContent1">
              <div className="handCardImage">
                <img src={card1} alt="hand holding credit card 1" />
              </div>
            </div>

            <img src={cross1} className="cross1" alt="backgroung vector" />
            <img src={thumb1} className="thumb1" alt="backgroung vector" />
            <img src={dot1} className="dot1" alt="backgroung vector" />
          </div>
        </div>

        <div className="wrapper2Container">
          <p className="centerHeading1">
            Over 32k+ software businesses growing with AR Shakir.
          </p>
          <div className="logoSotwareBusiness">
            {array.map((data, index) => (
              <img src={data} alt="logo of Sotware Business" key={index} />
            ))}
          </div>
        </div>
        <div className="thirdBanner">
          <div className="leftThirdSide">
            <div className="leftHeading3">
              Automated <br /> portfolio tracking
            </div>
            <div className="leftparagraph3">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing.
            </div>
          </div>
          <div className="rightThirdSide">
            <div className="quoteIcon">
              <img src={quoteIcon} />
            </div>
            <div className="rightParagraph">
              Wise busy past both park when an ye no. Nay likely her length
              sooner thrown sex lively income. The expense windows adapted sir.
              Wrong widen.
            </div>
            <div className="rightAuthor">- Mike Taylor, Web Designer</div>
          </div>
        </div>

        <div className="cardDiv">
          {cardArray.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>

        <div className="wrapper4container">
          <div className="wrapper4left">
            <div className="blueTrackPayments">
              <img src={orangebg} className="orangebg" alt="background line" />
              <img src={greenbg} className="greenbg" alt="background line" />
              <img
                src={purplebg}
                className="purplebg"
                alt="a hand holding card "
              />
              <img src={circle1} className="circle2" alt="orange tick icon" />

              <div className="floatwrap block1">
                <div className="profileImage">
                  <img
                    src={face1}
                    className="circle1"
                    alt="profile of payments"
                  />
                </div>

                <div className="infoexpense">
                  <div className="expenseAmount">+ $28,900</div>
                  <div className="receivedFrom">Received from Michael V</div>
                </div>
              </div>

              <div className="floatwrap block2">
                
                <div className="profileImage">
                  <img
                    src={face2}
                    className="circle1"
                    alt="profile of payments"
                  />
                </div>

                <div className="infoexpense">
                  <div className="expenseAmount">+ $28,900</div>
                  <div className="receivedFrom">Received from Michael V</div>
                </div>

              </div>

              <div className="floatwrap block3">

                <div className="profileImage">
                  <img
                    src={face3}
                    className="circle1"
                    alt="profile of payments"
                  />
                </div>

                <div className="infoexpense">
                  <div className="expenseAmount">+ $28,900</div>
                  <div className="receivedFrom">Received from Michael V</div>
                </div>

              </div>

              <div className="floatwrap block4">

              <div className="profileImage">
                  <img
                    src={face4}
                    className="circle1"
                    alt="profile of payments"
                  />
                </div>

                <div className="infoexpense">
                  <div className="expenseAmount">+ $28,900</div>
                  <div className="receivedFrom">Received from Michael V</div>
                </div>

              </div>
            </div>
          </div>

          <div className="wrapper4right">
            <div className="whyHeading">Why Choose Us</div>
            <div className="wrapper4head head45">
              Track your payments on the go with the best way possible
            </div>
            <div className="wrapper4para paragraph45">
              Indulgence way everything joy alteration boisterous the
              attachment. Party we years to order allow asked of.
            </div>

            <div className="hrWrapper4"></div>

            <div className="wrapper4check">
              <div className="wrapper4list">
                {/* <span> */}
                <img
                  src={orangetickIcon}
                  className="orangetick"
                  alt="orange tick icon"
                />
                Get Overview at a glance
                {/* </span> */}
              </div>
              <div className="wrapper4list">
                <img
                  src={orangetickIcon}
                  className="orangetick"
                  alt="orange tick icon"
                />
                Deoposit funds easily, securlity
              </div>
              <div className="wrapper4list">
                <img
                  src={orangetickIcon}
                  className="orangetick"
                  alt="orange tick icon"
                />
                Get Live Support
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper5container">
          <div className="wrappper5left">
            <div className="whyHeading">Why Choose Us</div>
            <div className="wrapper5head head45">
              Save money with proper transaction
            </div>
            <div className="wrapper5para paragraph45">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </div>

            <div className="wrapper5left2">
              <div className="quoteIcon">
                <img src={quoteIcon} />
              </div>
              <div className="leftParagraph">
                Wise busy past both park when an ye no. Nay likely her length
                sooner thrown sex lively income. The expense windows.
              </div>
              <div className="leftParaAuthor">- Mike Taylor, Web Designer</div>
            </div>
          </div>

          <div className="wrappper5right">
            <div className="blueSaveMoney"></div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <img src={dash1} className="dash1" alt="background line" />
          <img src={card2} className="handcard2" alt="a hand holding card " />
          <img src={bargraph} className="bargraph" alt="orange tick icon" />
        </div>

        <div className="wrapper6Container">
          <div className="wraper6top">
            <div className="Wrapper6topHeading">Features that blows mind</div>

            <div className="Wrapper6topParagraph">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
            </div>

            <div className="featureContainer">
              <div className="featureBlock1">
                <div className="cardDiv2">
                  {cardArray2.map((data, index) => (
                    <CardFeatures key={index} {...data} />
                  ))}
                </div>

                <div className="cardDiv3">
                    <div className="card3Top">
                      Merits behind on afraid or warmly
                    </div>

                    <div className="card3Bottom">
                      Believing neglected so so allowance existence
                    </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        <div className="wrapper7Container">
          <div className="verticalBlackLine"></div>
          <div className="blueStatistics">
            <div className="statisticsBlock1">
              <div className="onelineStatement">
                We speak with our powerfull statistics
              </div>
            </div>

            <div className="statisticsBlock2">
              <div className="headingStat">1M+</div>

              <div className="subHeadingStat">
                <img className="smallicon1" src={manIcon} alt="man icon" />
                Active Users
              </div>
            </div>
            <div className="statisticsBlock3">
              <div className="headingStat">30K+</div>

              <div className="subHeadingStat">
                <img className="smallicon1" src={starIcon} alt="star icon" />
                5-Stars Reviews
              </div>
            </div>
            <div className="statisticsBlock4">
              <div className="headingStat">$252M</div>

              <div className="subHeadingStat">
                <img className="smallicon1" src={starIcon} alt="star icon" />
                Transactions
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
