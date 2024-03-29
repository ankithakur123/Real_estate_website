import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddinng innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            we always ready to help by providing the best services for you.we
            beleivea good blace to live can make your life better
          </span>

          <div className="flexColStart contactMode">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexcenter button">Call Now</div>
              </div>

              {/* second row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Chat</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexcenter button">Chat Now</div>
              </div>
            </div>

            {/* sceond row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Vedio Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexcenter button"> Vedio Call Now</div>
              </div>

              {/* fourth row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span>Message</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexcenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side*/}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
