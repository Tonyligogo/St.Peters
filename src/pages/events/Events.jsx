import "./Events.css";
import { FaChevronRight } from "react-icons/fa";
import Worship from "../../assets/motivate.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import Picnic from "../../assets/picnic.jpg";
import Luncheon from "../../assets/luncheon.jpg";
import Retreat from "../../assets/youthretreat.jpg";
import Motivate from "../../assets/worshipTeam.jpg";
import { Link } from "react-router-dom";

function Events() {
  const events = [
    {
      id: 1,
      imgSrc: Motivate,
      title: "Join Us For Celebration Sunday",
      desc: " Join our youth retreat for a weekend of spiritual growth, fellowship, and fun. We'll have inspiring sessions, worship, and outdoor activities.",
      date: "30th June, 2024 ",
      time: "8:00 am - 9:30 am",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 2,
      imgSrc: Luncheon,
      title: "Senior Citizens Luncheon",
      desc: "Our beloved seniors are invited to a special luncheon. Lets celebrate their wisdom, share stories, and enjoy a delicious meal together.",
      date: "Wednesday, June 30, 2024",
      time: "12:00 PM - 2:00 PM",
      location: "Fellowship Hall",
    },
    {
      id: 3,
      imgSrc: Worship,
      title: "Worship Night",
      desc: "Come worship together as we lift our voices in praise. An evening of music, prayer, and reflection.",
      date: "Friday, June 18, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 4,
      imgSrc: Picnic,
      title: "Community Picnic",
      desc: "Join us for a fun-filled community picnic! Bring your family and friends for games, food, and fellowship.",
      date: "Saturday, June 12, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 5,
      imgSrc: Retreat,
      title: "Youth Retreat: Renew & Refresh",
      desc: " Join our youth retreat for a weekend of spiritual growth, fellowship, and fun. We'll have inspiring sessions, worship, and outdoor activities.",
      date: "Saturday, July 3, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Ngong hills",
    },
  ];

  return (
    <div>
      <div className="eventsBackground">
        <div className="eventsOverlay"></div>
        <div className="eventsContent">
            <h1>Upcoming Events</h1>
            <p>
            Here at St.Peters Ack, we believe in fostering community and spiritual growth through various activities and gatherings. Join us for the upcoming events.
            </p>
        </div>
        <div className="eventsBreadCrumbsWrapper">
          <p className="eventsBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Events <FaChevronRight />
            </span>
          </p>
          <h1>Events</h1>
        </div>
      </div>
      <div className="actualEvents">
        {events.map((event) => (
          <div className="singleEvent" key={event.id}>
            <img src={event.imgSrc} alt="event" />
            <div className="singleEventContent">
              <span>{event.desc}</span>
              <span>
                <FaRegCalendarAlt />
                {event.date}
              </span>
              <span>
                <MdOutlineAccessTime /> {event.time}
              </span>
              <span>
                <FaLocationDot />
                {event.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
