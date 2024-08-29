import { Link } from "react-router-dom";
import "./PraiseTeam.css";
import { FaChevronRight } from "react-icons/fa";
import worshipImg from "../../../assets/worshipTeam.jpg"
import worshipImg2 from "../../../assets/swahiliService.jpg"
import worshipImg3 from "../../../assets/YouthMinistry5.jpg"
import worshipImg4 from "../../../assets/youthService.jpg"
import worshipImg5 from "../../../assets/englishService.jpg"
export default function PraiseTeam() {
  return (
    <div>
      <div className="worshipBanner">
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
          <h1>Praise & Worship team</h1>
        </div>
      </div>
      <div className="row1">
        <div>
        <p className="textQuote">❝ I will praise you as long as I live, and in your name I will lift up my hands.❞ <span style={{color:'#a7a7a7'}}>~ Psalms 63:4  ~</span></p>
        </div>
          <img src={worshipImg} alt="KAMA" />
      </div>
      <div className="worshipRow2">
        <h2>Who we are</h2>
        <p>We are a family of worshipers, seeking to know God and make Him known through new, authentic songs of worship and praise. We believe that the greatest calling of every individual is to worship. The Bible also describes musical and artistic expression as a powerful form of worship.  As we glorify God in worship, we enter His presence and our lives are changed.</p>
      </div>
      <div className="worshipRow3">
        <h2>Want to join the worship team?</h2>
        <ul>
          <li>Fill out the application form with your details and musical experience.</li>
          <li>Join us for a meeting to learn more about the team and ask questions.</li>
          <li>Showcase your skills in a brief audition.</li>
          <li>Attend rehearsals regularly to grow with the team and contribute to worship.</li>
        </ul>
      </div>
      <div className="row3">
        {/* styles are from children ministry page */}
        <div>
        <img src={worshipImg5} alt="worship" />
        </div>
        <div>
        <img src={worshipImg} alt="worship" />
        </div>
        <div>
        <img src={worshipImg2} alt="worship" />
        </div>
        <div>
        <img src={worshipImg3} alt="worship" />
        </div>
        <div>
        <img src={worshipImg4} alt="worship" />
        </div>
      </div>
    </div>
  );
}
