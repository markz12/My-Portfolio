import React, { Component } from "react";
// import Header from "../Common/Header";
// import image from "../Asset/img/service-bg.jpg";
import SingleServices from "../Common/singleServices";

const services = [
  {
    title: "E-Commerce",
    description: "Ecommerce",
    icon: "fa-shopping-cart",
  },
  {
    title: "Responsive Design",
    description: "Designing",
    icon: "fa-laptop",
  },
  {
    title: "Web Security",
    description: "Security",
    icon: "fa-lock",
  },
];

class Services extends Component {
  render() {
    return (
      // <!-- Services-->
      <div>
        {/* <Header Link='/services' image={image} /> */}
        <section className='page-section' id='services'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Service</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            {/* Service Content */}
            <div className='row text-center'>
              {services.map((service, index) => {
                return <SingleServices {...service} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
