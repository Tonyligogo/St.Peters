import "./Services.css";
import { LuDot } from "react-icons/lu";
import fridayService from "../../assets/fridayService.jpg";
import youthService from "../../assets/youthService.jpg";
import englishService from "../../assets/englishService.jpg";
import kiswahiliService from "../../assets/swahiliService.jpg";

export default function Services() {
  const services = [
    {
      id: 1,
      imgSrc: fridayService,
      title: "Friday Service",
      desc: "Join us every Friday evening for a refreshing and uplifting time of worship, prayer, and teaching, providing spiritual renewal and preparation for the weekend.",
      time: "6.00 pm - 8.00 pm",
      day: "Friday",
    },
    {
      id: 2,
      imgSrc: youthService,
      title: "Youth Service",
      desc: "Experience dynamic worship, relevant messages, and meaningful fellowship designed specifically for teenagers and young adults at our engaging Youth Service.",
      time: "8.00 am - 9.30 am",
      day: "Sunday",
    },
    {
      id: 3,
      imgSrc: englishService,
      title: "English Service",
      desc: "Worship with us in unity during our uplifting and insightful English Service, where the sermons and music create a spiritually enriching experience for all attendees.",
      time: "9.30 am - 11.30 am",
      day: "Sunday",
    },
    {
      id: 4,
      imgSrc: kiswahiliService,
      title: "Swahili Service",
      desc: "Connect with God in our vibrant Kiswahili Service, featuring worship and teaching in Swahili that resonate deeply with our Swahili-speaking congregation.",
      time: "11.30 am - 1.30 pm",
      day: "Sunday",
    },
  ];
  const displayedServices = services.slice(0, 4);
  return (
    <div className="container">
      <div className="servicesTop">
        <p className="text">
          <span className="greyLine"></span>
          <span className="textPrimary" style={{ color: "grey" }}>
            Our Services
          </span>
          <span className="greyLine"></span>
        </p>
        <h1 style={{ fontSize: "40px" }}>Church Services</h1>
        <p style={{ color: "grey" }}></p>
      </div>
      <div className="servicesWrapper">
        {displayedServices.map((service) => (
          <div className="card">
            <img src={service.imgSrc} alt="service" className="servicePic" />
            <div className="serviceContent">
              <p className="time">{service.day}<LuDot style={{fontSize:'24px'}}/><small>{service.time}</small></p>
              <p className="title">{service.title}</p>
              <p>
                <medium>{service.desc}</medium>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
