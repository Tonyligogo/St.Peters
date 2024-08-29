import "./Children.css";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BiBible, BiHomeHeart } from "react-icons/bi";

function Children() {
  return (
    <div>
      <div className="background">
        <div className="childrenMinistryOverlay"></div>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/3191109/3191109-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/7568735/7568735-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="eventsBreadCrumbsWrapper">
          <p className="eventsBreadCrumbs">
            <span>
              <a href="/">Home</a> <FaChevronRight />
            </span>
            <span>
              Ministries <FaChevronRight />
            </span>
            <span>
              Children Ministry <FaChevronRight />
            </span>
          </p>
          <h1>Children Ministry</h1>
        </div>
      </div>
      <div className="row1">
        <div>
        <p className="textQuote">❝ I have no greater joy than to hear that my children are walking in the truth.❞ - <span style={{color:'#a7a7a7'}}>3 John 1:4</span></p>
        <h2 style={{color:'#53b1fd'}}>In Jesus&apos; own words:</h2>
        <p>❝ Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.❞ - <span style={{color:'#a7a7a7', fontSize:'14px'}}>Matthew 19:14</span></p>
        </div>
          <img src="https://i.pinimg.com/originals/00/82/1e/00821e92f02ac1b3a7527601a6ff9dab.jpg" alt="sunday school" />
      </div>
      <div className="row2">
        <div>
        <h2>About Children&apos;s Ministry</h2>
        <p className="row2Text">At St.Peters, our Children&apos;s Ministry is dedicated to nurturing the spiritual growth of children from infancy through elementary school. </p>
        <p className="row2Text">
        We believe that every child is a precious gift from God, and we strive to create a loving and supportive environment where they can learn about Jesus and develop a personal relationship with Him.</p>
        </div>
        <div>
        <h2>What we do in Children&apos;s Ministry?</h2>
        <ul style={{padding:'0'}}>
          <li style={{display:'flex', marginBlockEnd:'10px', gap:'8px',alignItems:'flex-start'}}>
            <BiBible style={{fontSize:'40px',color:'#1f2837'}}/>
            <span>We provide engaging and age-appropriate Bible lessons that help children understand God&apos;s Word in a fun and interactive way.</span>
          </li>
          <li style={{display:'flex', marginBlockEnd:'10px', gap:'8px',alignItems:'flex-start'}}>
            <BiHomeHeart style={{fontSize:'40px',color:'#1f2837'}}/> 
          <span>We offer a safe and welcoming environment where children can build friendships and enjoy fellowship with their peers.</span>
          </li>
          <li style={{display:'flex', gap:'8px',alignItems:'flex-start'}}>
            <FaRegHeart style={{fontSize:'40px',color:'#1f2837'}}/>
          <span>We teach children the importance of serving others, sharing God&apos;s love in the process, and making a positive impact in the world around them.</span>
          </li>
        </ul>
        </div>
      </div>
      <div className="row3">
        <div>
        <img src="https://bacc.cc/wp-content/uploads/2023/08/ltn-gallery-square-01.jpg" alt="" />
        </div>
        <div>
        <img src="https://bacc.cc/wp-content/uploads/2023/08/ltn-gallery-wide-01.jpg" alt="" />
        </div>
        <div>
        <img src="https://bacc.cc/wp-content/uploads/2023/11/gallery-tgs-tall.jpg" alt="" />
        </div>
        <div>
        <img src="https://bacc.cc/wp-content/uploads/2023/11/gallery-friends-outside-02.jpg" alt="" />
        </div>
        <div>
        <img src="https://bacc.cc/wp-content/uploads/2023/08/ltn-gallery-square-02.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Children;
