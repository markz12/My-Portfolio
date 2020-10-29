import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../Asset/img/header-bg.jpg";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Timeline from "./Timeline";
import Team from "./Team";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      //  <!-- Masthead-->
      <div>
        <Header
          title='Welcome to my portfolio'
          subtitle='Let me introduce my self!'
          buttonText='Know me more!'
          Link='/services'
          showButton={true}
          image={image}
        />
        <Services />
        <Portfolio />
        <Timeline />
        <Team />
        <Contact />
      </div>
    );
  }
}

export default Home;
