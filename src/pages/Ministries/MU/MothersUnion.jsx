import { Link } from "react-router-dom";
import "./MotherUnion.css";
import { FaChevronRight } from "react-icons/fa";
import mothersUnion from "../../../assets/357746491_619471053607956_411327406936014473_n.jpg"
import mothersUnion2 from "../../../assets/englishService.jpg"
import mothersUnion3 from "../../../assets/MU.jpg"
import mothersUnion4 from "../../../assets/MU.jpg"
import mothersUnion5 from "../../../assets/englishService.jpg"
export default function MothersUnion() {
  return (
    <div>
      <div className="mothersUnionBanner">
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
          <h1>Mothers' Union</h1>
        </div>
      </div>
      <div className="row1">
        <div>
        <p className="textQuote">❝ She is clothed with strength and dignity; she can laugh at the days to come. She speaks with wisdom, and faithful instruction is on her tongue.❞ <span style={{color:'#a7a7a7'}}>~ Proverbs 31:25-26  ~</span></p>
        </div>
          <img src={mothersUnion} alt="KAMA" />
      </div>
      <div className="worshipRow2">
        <h2>Who we are</h2>
        <p>The Mothers Union is dedicated to supporting mothers and families through faith, fellowship, and service. Our mission is to empower women to fulfill their roles as mothers and caregivers, providing them with the resources, support, and community they need to thrive.</p>
        <p>We believe in the strength of prayer, the importance of nurturing relationships, and the value of serving others. Through various programs and activities, we aim to foster spiritual growth, promote family well-being, and create a loving environment where mothers can connect, share experiences, and uplift one another.</p>
      </div>
      <div className="worshipRow3">
        <h2>Want to join mothers&apos; union?</h2>
        <ul>
          <li>Fill out the membership form with your contact information and a brief introduction.</li>
          <li>Join us for an introductory meeting to learn more about our mission, activities, and how you can get involved.</li>
          <li>Engage in our upcoming events and activities to connect with other members and experience the community firsthand.</li>
        </ul>
      </div>
      <div className="row3">
        {/* styles are from children ministry page */}
        <div>
        <img src={mothersUnion5} alt="worship" />
        </div>
        <div>
        <img src={mothersUnion} alt="worship" />
        </div>
        <div>
        <img src={mothersUnion2} alt="worship" />
        </div>
        <div>
        <img src={mothersUnion3} alt="worship" />
        </div>
        <div>
        <img src={mothersUnion4} alt="worship" />
        </div>
      </div>
    </div>
  );
}
