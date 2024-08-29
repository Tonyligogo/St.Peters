import "./Events.css";
import { FaRegCalendarAlt } from "react-icons/fa";

import image3 from "../../assets/youthMin.jpg";
import { MdLocationCity } from "react-icons/md";
import image1 from "../../assets/PrayerWatch.jpg";
import { Link } from "react-router-dom";
import image2 from "../../assets/worshipTeam.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      imgSrc: image1,
      title: "Prayer Watch Embakasi Edition",
      date: "7th July, 2024 ",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 2,
      imgSrc: image2,
      title: "Join Us For Celebration Sunday",
      date: "28th July, 2024 ",
      time: "8:00 am - 9:30 am",
      location: "ACK St.Peter's Embakasi",
    },

    {
      id: 3,
      imgSrc: image3,
      title: "Know Jesus Christ Better Through Bible Study",
      date: "Friday, 6:00 pm",
      location: "ACK St.Peter's Embakasi",
    },
  ];
  const displayedEvents = events.slice(0, 3);
  return (
    <div className="container">
      <div className="events">
        <div className="servicesTop">
          <p className="text">
            <span className="greyLine"></span>
            <span className="textPrimary">Events</span>
            <span className="greyLine"></span>
          </p>
          <h1>Upcoming Events</h1>
        </div>
      </div>
      <div className="eventsWrapper">
        {displayedEvents.map((event) => (
          <Link key={event.id} to="/events" className="eventLink">
            <div className="eventsCard">
              <div className="eventWrapperOverlay"></div>
              <img src={event.imgSrc} alt="event" className="eventPic" />
              <div className="eventContent">
                <div className="eventDetails">
                  <span>
                    <FaRegCalendarAlt />
                    {event.date}
                  </span>
                  <span>
                    <MdLocationCity />
                    {event.location}
                  </span>
                </div>
                <h2>{event.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
