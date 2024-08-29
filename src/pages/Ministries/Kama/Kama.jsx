import { Link } from "react-router-dom";
import "./Kama.css";
import { FaChevronRight } from "react-icons/fa";
import kama from "../../../assets/364161928_619471003607961_5698538392905565876_n.jpg"
import kama2 from "../../../assets/Ven.jpg"
import kama3 from "../../../assets/YouthMinistry6.jpg"
import kama4 from "../../../assets/youthMin.jpg"
import kama5 from "../../../assets/youthMin.jpg"
export default function Kama() {
  return (
    <div>
      <div className="KamaBanner">
        <div className="overlay"></div>
        <div className="eventsBreadCrumbsWrapper">
          <p className="eventsBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Ministries <FaChevronRight />
            </span>
          </p>
          <h1>KAMA</h1>
        </div>
      </div>
      <div className="row1">
        <div>
        <p className="textQuote">❝ But if serving the LORD seems undesirable to you, then choose for yourselves this day whom you will serve...But as for me and my household, we will serve the LORD.❞ <span style={{color:'#a7a7a7'}}>~ Joshua 24:15  ~</span></p>
        </div>
          <img src={kama} alt="KAMA" />
      </div>
      <div className="worshipRow2">
        <h2>Who we are</h2>
        <p>KAMA is a community dedicated to empowering men in their roles as leaders, fathers, and servants of God. Our mission is to foster spiritual growth, accountability, and fellowship among men, encouraging them to live out their faith in everyday life. </p>
        <p>
        We believe in the importance of strong, supportive relationships and the impact that men can have on their families and communities. Through various programs, events, and service opportunities, we aim to equip men with the tools they need to be effective leaders and positive role models, while also providing a space for connection and mutual support.</p>
      </div>
      <div className="worshipRow3">
        <h2>Want to join KAMA?</h2>
        <ul>
          <li>Fill out the membership form with your contact information and a brief introduction.</li>
          <li>Join us for an introductory meeting to learn more about our mission, activities, and how you can get involved.</li>
          <li>Engage in our upcoming events and activities to connect with other members and experience the community firsthand.</li>
        </ul>
      </div>
      <div className="row3">
        {/* styles are from children ministry page */}
        <div>
        <img src={kama5} alt="worship" />
        </div>
        <div>
        <img src={kama} alt="worship" />
        </div>
        <div>
        <img src={kama2} alt="worship" />
        </div>
        <div>
        <img src={kama3} alt="worship" />
        </div>
        <div>
        <img src={kama4} alt="worship" />
        </div>
      </div>
    </div>
  );
}
