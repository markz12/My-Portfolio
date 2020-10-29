import React, { Component } from "react";
// import image from "../Asset/img/portfolio-bg.jpg";
// import Header from "../Common/Header";
import SinglePortfolio from "../Common/SinglePortfolio";

//Images
import img1 from "../Asset/portfolio/react.png";
import img2 from "../Asset/portfolio/csharp.jpg";
import img3 from "../Asset/portfolio/js.jpg";

const portfolio = [
  {
    title: "ReactJS",
    description: "A JavaScript library for building user interfaces",
    image: img1,
  },
  {
    title: "CSharp",
    description:
      "C# is a simple, modern, and object-oriented language that provides modern day developers flexibility and features to build software that will not only work today but will be applicable for years in the future.",
    image: img2,
  },
  {
    title: "Javascript",
    description:
      "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
    image: img3,
  },
];

class Portfolio extends Component {
  render() {
    return (
      // <!-- Portfolio Grid-->
      <div>
        {/* <Header Link='/portfolio' image={image} /> */}
        <section className='page-section bg-light' id='portfolio'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Portfolio</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className='text-center'></div>
            <div className='row'>
              {portfolio.map((item, index) => {
                return <SinglePortfolio {...item} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
