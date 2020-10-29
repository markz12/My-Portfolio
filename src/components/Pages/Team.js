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
        <section class='page-section bg-light' id='team'>
          <div class='container'>
            <div class='text-center'>
              <h2 class='section-heading text-uppercase'>My Team</h2>
              <h3 class='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div class='row'>
              {/* Team Member */}
              {team.map((item, index) => {
                return <TeamMember {...item} key={index} />;
              })}
            </div>
            <div class='row'>
              <div class='col-lg-8 mx-auto text-center'>
                <p class='large text-muted'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Clients--> */}
        <div class='py-5'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-3 col-sm-6 my-3'>
                <a href='#!'>
                  <img
                    class='img-fluid d-block mx-auto'
                    src='assets/img/logos/envato.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div class='col-md-3 col-sm-6 my-3'>
                <a href='#!'>
                  <img
                    class='img-fluid d-block mx-auto'
                    src='assets/img/logos/designmodo.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div class='col-md-3 col-sm-6 my-3'>
                <a href='#!'>
                  <img
                    class='img-fluid d-block mx-auto'
                    src='assets/img/logos/themeforest.jpg'
                    alt=''
                  />
                </a>
              </div>
              <div class='col-md-3 col-sm-6 my-3'>
                <a href='#!'>
                  <img
                    class='img-fluid d-block mx-auto'
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
