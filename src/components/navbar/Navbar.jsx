import { useEffect, useState } from "react";
import Logo from "../../assets/LogoP.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

function Navbar() {
  const [active, setActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [ministries, setMinistries] = useState(false);
  const [about, setAbout] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active ? "navContainer active" : "navContainer"}>
      <nav>
        <Link to="/" className="link">
          <div className="logoName">
            <img src={Logo} className="logo" alt="church logo" />
            <h3> ACK St.Peter&apos;s Embakasi</h3>
          </div>
        </Link>
        <div className='menu' onClick={()=>setMenuActive((prev)=>!prev)}>
            {!menuActive ? 
            <IoMenu style={{fontSize:'26px'}}/>
            :
            <IoClose style={{fontSize:'26px'}}/>
            }
        </div>
        <div className="links">
          <ul className="navLinks">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li
              className={`about ${about ? "selected" : ""}`}
              onClick={() => setAbout((prev) => !prev)}
            >
              About
              <ul className="aboutWrapper">
                <li>
                  <Link>Church History</Link>
                </li>
                <li>
                  <Link>Ministry Team</Link>
                </li>
                <li>
                  <Link>Administration</Link>
                </li>
              </ul>
            </li>
            <li
              className={`ministries ${ministries ? "selected" : ""}`}
              onClick={() => setMinistries((prev) => !prev)}
            >
              Get-Involved
              <ul className="ministriesWrapper">
                <li>
                  <Link to="/ministries/Kama">K.A.M.A.</Link>
                </li>
                <li>
                  <Link to="/ministries/MothersUnion">Mother's Union</Link>
                </li>

                <li>
                  {" "}
                  <Link to="/ministries/youth-ministry">Youth Ministry</Link>
                </li>
                <li>
                  <Link to="/ministries/children-ministry">Sunday School</Link>
                </li>
                <li>
                  <Link to="/ministries/PraiseTeam">Praise & Worship team</Link>
                </li>
                {/* <li>
                  <Link to="/ministries/Choir">Choir Ministry</Link>
                </li> */}
              </ul>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li> <a href="mailto:info@ackstpetersembakasi.org" title="Schedule appointment">Appointments</a> </li>
          </ul>
        </div>
      </nav>
      <aside className={`aside ${menuActive ? 'active' : ''}`}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Get involved</li>
        </ul>
      </aside>
    </div>
  );
}

export default Navbar;
