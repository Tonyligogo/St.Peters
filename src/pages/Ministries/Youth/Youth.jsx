import "./Youth.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import fridayService from "../../../assets/YouthMinistry3.jpg";
import youth1 from '../../../assets/YouthMinistry6.jpg'
import youth2 from '../../../assets/youthMin.jpg'
import youth3 from '../../../assets/YouthMinistry1.jpg'
import youth5 from '../../../assets/youthMinistry.jpg'
export default function Youth() {
  return (
    <div>
      <div className="youthBanner">
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
          <h1>Youth Ministry</h1>
        </div>
      </div>
      <div className="row1">
        <div>
        <p className="textQuote">❝ Don&apos;t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith, and in purity.❞ <span style={{color:'#a7a7a7'}}>~ 1 Timothy 4:12  ~</span></p>
        </div>
          <img src={youth2} alt="Youth" />
      </div>
      <div className="worshipRow2">
        <h2>Who we are</h2>
        <p>The Youth Ministry is a vibrant community dedicated to empowering young people to grow in their faith, develop their leadership skills, and make a positive impact in their communities. Our mission is to provide a supportive environment where youth can explore their beliefs, build lasting friendships, and engage in meaningful service.</p>
        <p>
        We believe that young people have the potential to be powerful agents of change, and we strive to equip them with the tools and resources they need to live out their faith boldly. Through various programs, events, and activities, we aim to inspire and encourage youth to embrace their unique gifts and contribute to the world around them.</p>
      </div>
      <div className="worshipRow3">
        <h2>Want to join Youth ministry?</h2>
        <ul>
          <li>Fill out the membership form with your contact information and a brief introduction.</li>
          <li>Join us for an introductory meeting to learn more about our mission, activities, and how you can get involved.</li>
          <li>Engage in our upcoming events and activities to connect with other members and experience the community firsthand.</li>
        </ul>
      </div>
      <div className="row3">
        {/* styles are from children ministry page */}
        <div>
        <img src={fridayService} alt="worship" />
        </div>
        <div>
        <img src={youth1} alt="worship" />
        </div>
        <div>
        <img src={youth2} alt="worship" />
        </div>
        <div>
        <img src={youth3} alt="worship" />
        </div>
        <div>
        <img src={youth5} alt="worship" />
        </div>
      </div>
    </div>
  );
}
