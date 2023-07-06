import "./footercss.css"

//images of background vectors
import uppercrease from "./assests/Group 268.svg";
import lowercrease from "./assests/Group 277.svg";
import bigSemiCircle from "./assests/Group 278.svg";
import smallSemiCircle from "./assests/Group 269.svg";
import dotsVector from "./assests/Vector.svg";

//images of socialmedia
import messenger from "./assests/messenger.svg";
import linkedin from "./assests/linkedin.svg";
import twitter from "./assests/twitter.svg";
import infinity from "./assests/infinity.svg";




function Footer() {

    return(
        <div className="footer">
            <div className = "topFooterBlue">
                <div className="footerHeading1">
                    Discover a better way to manage spendings
                </div>

                <div className="footerButton">
                    <button className="footerButton" type="button">
                        Get Started Now
                    </button>
                </div>
            </div>

            <div className="imageBackground">
                
                <div className="image1"><img src = {uppercrease} alt="image of design 1"/></div>

                <div className="image2"><img src = {lowercrease} alt="image of design 2"/></div>

                <div className="image3"><img src = {bigSemiCircle} alt="image of design 3"/></div>

                <div className="image4"><img src = {smallSemiCircle} alt="image of design 4"/></div>

                <div className="image5"><img src = {dotsVector} alt="image of design 5"/></div>
            </div>

            <div className="mainFooterContainer">
                <div className="middleFoooter">

                    <div className="footerColumn1">
                        <div className="footerHead">
                            AR Shakir
                        </div>

                        <div className="footerContain1">
                            Finance helps companies manage payments easily.
                        </div>

                        <div className="footerIcon">
                            <div className="linkedinIcon">
                                <a href="#a"target="_blank">
                                    <img src = {linkedin} alt="instagram"/>
                                </a>
                            </div>
                            <div className="messengerIcon">
                                <a href="#a"target="_blank">
                                    <img src = {messenger} alt="messenger"/>
                                </a>
                            </div>
                            <div className="twitterIcon">
                                <a href="#a"target="_blank">
                                    <img src = {twitter} alt="twitter"/>
                                </a>
                            </div>
                            <div className="socialmediaIcon">
                                <a href="#a"target="_blank">
                                    <img src = {infinity} alt="infinity"/>
                                </a>
                            </div>
                        </div> 
                    </div>

                    <div className="footerColumn2">
                        <div className="footerHead">
                            Company
                        </div>
                        <div className="footerContain2">
                            <div class="footer_cont"><a href="#a" target="_blank">About us</a></div>
                            <div class="footer_cont"><a href="#a" target="_blank">Careers</a></div>
                            <div class="footer_cont"><a href="#a" target="_blank">Blog</a></div>
                            <div class="footer_cont"><a href="#a"target="_blank">Pricing</a></div>
                        </div>
                    </div>

                    <div className="footerColumn3">
                        <div className="footerHead">
                            Resources
                        </div>

                        <div className="footerContain3">
                            <div class="footer_cont2"><a href="#a">Proposal Template</a></div>
                            <div class="footer_cont2"><a href="#a">Invoice Template</a></div>
                            <div class="footer_cont2"><a href="#a">Tuturoial</a></div>
                            <div class="footer_cont2"><a href="#a">How to write a contract</a></div>
                        </div>
                    </div>

                    <div className="footerColumn4">
                        <div className="footerHead">
                            Join Our Newsletter
                        </div>

                        <div className="footerContain4">
                            <div className="enterEmail">
                                <form>
                                    <input className="typeEmail" type="text" placeholder="Your email address" name="email"/>
                                    <span>
                                        <button class="button_blue"><a href="#a">Subscribe</a></button>
                                    </span>
                                </form>
                            </div>

                            <div className="infoEmail">
                            *  Will send you weekly updates for your better
                            finance management.
                            </div>
                        </div>
                    </div>

                </div>

                <div className="footerHeading">
                    <hr/>
                </div>
            
                <div className="bottomFooter">
                    <div className="copyrightFooter">
                        Copyright @ AR Shakir 2022. All Rights Reserved.
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Footer;

