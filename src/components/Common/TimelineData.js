import React, { Component } from "react";

class TimelineData extends Component {
  render() {
    return (
      <li>
        <div class='timeline-image'>
          <img class='rounded-circle img-fluid' src={this.props.image} alt='' />
        </div>
        <div class='timeline-panel'>
          <div class='timeline-heading'>
            <h4>{this.props.year}</h4>
            <h4 class='subheading'>{this.props.heading}</h4>
          </div>
          <div class='timeline-body'>
            <p class='text-muted'>{this.props.description}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default TimelineData;
