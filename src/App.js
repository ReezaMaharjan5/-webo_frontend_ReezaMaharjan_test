// import logo from "./logo.svg";
import Vector from "./assests/AR Shakir.svg";
import business1 from "./assests/Group (1).png";
import business2 from "./assests/Group.png";
import business3 from "./assests/Group (2).png";
import business4 from "./assests/Group (3).png";
import business5 from "./assests/Group (4).png";
import business6 from "./assests/Group (5).png";
import business7 from "./assests/Group (6).png";

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
      image: { Yellow2 },
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
      title: "Connect wallets & companies",
      image: { Yellow2 },
      paragraph:
        "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ",
    },
    {
      title: "Review transactions",
      image: { Vector },
      paragraph:
        "Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. ",
    },
  ]

  return (
    <div className="mainContainer">
      <div className="wrapper1Container">
        <div className="navBarContainer">
          <div className="navLogoImage">
            <img src={Vector} alt="logo of AR SHAKIR" />
          </div>
          <div className="navBarLinks">
            <p>
              <a href="" target="_blank">
                Product
              </a>
            </p>
            <p>
              <a href="" target="_blank">
                Template
              </a>
            </p>
            <p>
              <a href="" target="_blank">
                Blog
              </a>
            </p>
            <p>
              <a href="" target="_blank">
                Price
              </a>
            </p>
          </div>
          <div className="navSignIn">
            <p className="signIn">Sign In</p>
            <button type="button" className="startFreeButton"><a href = "" target="_blank">Start Free</a></button>
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
              <button className="getStartedButton" type="button"><a href = "" target = "_blank"> Get Started </a></button>

              <div className="leftContain1">
                <a href="#" target="_blank">
                {/* <i class="fa-solid fa-circle-play" style="color: #22d497;"/> */}
                  See How It Works
                </a>
              </div>
            </div>

            <div className="leftContent1B2">
              <p>Free Register</p>
              <p>Great Service</p>
            </div>
          </div>

          <div className="rightContent1">
            <img
              src="./assets/image 57.png"
              alt="hand holding credit card 1"
            ></img>
            <img src="" alt="hand holding credit card 2"></img>
            <img src="" alt="your one stop banking solution"></img>
          </div>
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
            <div className = "leftThirdSide">
              <div className = "leftHeading3">
                Automated <br /> portfolio tracking
              </div>
              <div className = "leftparagraph3">
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
              </div>
            </div>
            <div className = "rightThirdSide">
              <div className ="rightParagraph">
                Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.
              </div>
              <div className ="rightAuthor">
                - Mike Taylor, Web Designer
              </div>
            </div>



      </div>

      <div className="cardDiv">
        {cardArray.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
      
      <div className = "wrapper4container">
        <div className = "wrapper4left">
          <div className="blueTrackPayments">
            
          </div>
        </div>

        <div className = "wrapper4right">
          <div className="whyHeading">
          Why Choose Us
          </div>
          <div className="wrapper4head head45">
            Track your payments on the go with the best way possible
          </div>
          <div className="wrapper4para paragraph45">
          Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. 
          </div>

          <div className="hrWrapper4"></div>

          <div className="wrapper4check">
            <div className="wrapper4list">Get Overview at a glance</div>
            <div className="wrapper4list">Deoposit funds easily, securlity</div>
            <div className="wrapper4list">Get Live Support</div>
            
          </div>
          
        </div>
        
      </div>

      <div className = "wrapper5container">
            <div className="wrappper5left">
              <div className="whyHeading">     
                Why Choose Us   
              </div>
              <div className="wrapper5head head45">
              Save money with proper transaction
              </div>
              <div className="wrapper5para paragraph45">
                We so opinion friends me message as delight. Whole front do of plate heard oh ought.
                 His defective nor convinced residence own. 
              </div>

              <div className = "wrapper5left2">
                <div className ="leftParagraph">
                  Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows.
                </div>
                <div className ="leftParaAuthor">
                  - Mike Taylor, Web Designer
                </div>
              </div>
            </div>
        

            <div className="wrappper5right">
              <div className = "blueSaveMoney">

              </div>
              <div className = "">

              </div>
              <div className = "">

              </div>
            </div>
      </div>

      <div className="wrapper6Container">
        <div className="wraper6top">
          <div className="Wrapper6topHeading">
            Features that blows mind
          </div>
          
          <div className="Wrapper6topParagraph">
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. 
            His defective nor convinced residence own.
          </div>

          <div className="featureContainer">
            <div className="featureBlock1">
            <div className="cardDiv2">
              {cardArray2.map((data, index) => (
                <CardFeatures key={index} {...data} />
              ))}
            </div>
            </div>
            <div className="fratureBlock1">
              
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
            <div className="headingStat">
              1M+
            </div>

            <div className="subHeadingStat">
              Active Users
            </div>
          </div>
          <div className="statisticsBlock3">
            <div className="headingStat">
              30K+
            </div>

            <div className="subHeadingStat">
              5-Stars Reviews
            </div>
          </div>
          <div className="statisticsBlock4">
            <div className="headingStat">
              $252M
            </div>

            <div className="subHeadingStat">
              Transactions
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
