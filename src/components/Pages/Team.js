import React, { Component } from "react";
// import Header from "../Common/Header";
// import image from "../Asset/img/about-bg.jpg";

import TeamMember from "../Common/TeamMember";
import team1 from "../Asset/team/mark.jpg";
import team2 from "../Asset/team/jave.jpg";

const team = [
  {
    member: "Mark Joseph Abelardo",
    role: "Software Engineer/Tester",
    image: team1,
    github: "https://github.com/markz12",
    linkedin: "google.com",
  },
  {
    member: "Jave Lupango",
    role: "Software Engineer/Support",
    image: team2,
    github: "https://github.com/PanggaJave",
    linkedin: "https://ph.linkedin.com/in/jave-lupango-bb280b174",
  },
];

class Team extends Component {
  render() {
    return (
      // <!-- Team-->
      <div>
        <section className='page-section bg-light' id='team'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>My Team</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className='row'>
              {/* Team Member */}
              {team.map((item, index) => {
                return <TeamMember {...item} key={index} />;
              })}
            </div>
            <div className='row'>
              <div className='col-lg-8 mx-auto text-center'>
                <p className='large text-muted'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Clients--> */}
        <div className='py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-sm-6 my-3'>
                <a href='#!'>
                  <img
                    className='img-fluid d-block mx-auto'
                    src='assets/img/logos/envato.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-3 col-sm-6 my-3'>
                <a href='#!'>
                  <img
                    className='img-fluid d-block mx-auto'
                    src='assets/img/logos/designmodo.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-3 col-sm-6 my-3'>
                <a href='#!'>
                  <img
                    className='img-fluid d-block mx-auto'
                    src='assets/img/logos/themeforest.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div className='col-md-3 col-sm-6 my-3'>
                <a href='#!'>
                  <img
                    className='img-fluid d-block mx-auto'
                    src='assets/img/logos/creative-market.jpg'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
