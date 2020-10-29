import React, { Component } from "react";
import TimelineData from "../Common/TimelineData";

//Images
import img1 from "../Asset/timeline/diskless.png";
import img2 from "../Asset/timeline/rdpawnshop.png";

const timeline = [
  {
    image: img1,
    year: "2017-2019",
    heading: "Boyakz Gaming Zone(Diskless iCafe) Technology",
    description:
      "This is my first journey to start a technology business, I also learn this on how to manage my skills regarding on technical & software.",
  },
  {
    image: img2,
    year: "2019-2020",
    heading: "Software Developer",
    description:
      "My first job on the corporate company, I learn alot during this time and the scope of my job is to developed a system, support, testing and to check the qualify of a system.",
  },
];

class About extends Component {
  render() {
    return (
      // <!-- About-->
      <div>
        {/* <Header Link='/services' image={image} /> */}
        <section className='page-section' id='about'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Timeline</h2>
              <h3 className='section-subheading text-muted'>
                My journey to success.
              </h3>
            </div>
            <ul className='timeline'>
              {/* Time Line Class */}
              {timeline.map((item, index) => {
                return <TimelineData {...item} key={index} />;
              })}
              <li className='timeline-inverted'>
                <div className='timeline-image'>
                  <h4>
                    Be Part
                    <br />
                    Of my
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
