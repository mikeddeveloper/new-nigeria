import React from "react";
import "aos/dist/aos.css";
import "./Team.css"; // separate CSS

function Team() {
  const teamMembers = [
    { name: "Abraham Oyedele", role: "Founder", img: "/images/PA.jpg" },
    { name: "Member Two", role: "Media Lead", img: "/images/ituah.jpg" },
    { name: "Member Three", role: "Technical", img: "/images/member3.jpg" },
    { name: "Member Four", role: "Graphics Designer", img: "/images/prosper.jpg" },
    { name: "Adegboyega Michael", role: "Web Developer", img: "/images/mike.jpg" },
  ];

  return (
    <section className="team-section">
      <div className="container text-center">
        <h2 className="team-title" data-aos="fade-up">Our Team</h2>
        <p className="team-subtitle" data-aos="fade-up" data-aos-delay="200">
          Meet the passionate people driving Youth Engage Programme
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              className="team-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="team-img-wrapper">
                <img src={member.img} alt={member.name} className="team-img" />
              </div>
              <h5 className="team-name">{member.name}</h5>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
