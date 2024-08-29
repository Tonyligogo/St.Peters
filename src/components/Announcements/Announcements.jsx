import "./Announcements.css";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "Community Picnic",
      date: "May 28, 2024",
      description:
        "Join us for a fun-filled community picnic at the church grounds. Bring your family and friends for a day of games, food, and fellowship!",
    },
    {
      id: 2,
      title: "Youth Ministry",
      date: "June 5, 2024",
      description:
        "We're looking for volunteers to help with our youth ministry programs. If you have a heart for serving and mentoring young people, sign up today!",
    },
    {
      id: 3,
      title: "Community Picnic",
      date: "May 28, 2024",
      description:
        "Join us for a fun-filled community picnic at the church grounds. Bring your family and friends for a day of games, food, and fellowship!",
    },
    {
      id: 4,
      title: "Community cleaning",
      date: "May 28, 2024",
      description:
        "Join us for a fun-filled community picnic at the church grounds. Bring your family and friends for a day of games, food, and fellowship!",
    },
  ];

  return (
    <div className="announcements">
      <div className="servicesTop">
        <p className="text">
          <span className="greyLine"></span>
          <span className="textPrimary">Announcements</span>
          <span className="greyLine"></span>
        </p>
        <h1>Important Announcements</h1>
      </div>
      <div className="announcementsWrapper">
        <div className="announcement-container">
          <div className="announcement-list">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="announcement">
                <h3>{announcement.title}</h3>
                <p className="announcement-date">{announcement.date}</p>
                <p>{announcement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
