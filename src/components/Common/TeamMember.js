import React, { Component } from "react";

class TeamMember extends Component {
  render() {
    return (
      <div class='col-lg-6'>
        <div class='team-member'>
          <img class='mx-auto rounded-circle' src={this.props.image} alt='' />
          <h4>{this.props.member}</h4>
          <p class='text-muted'>{this.props.role}</p>
          <a
            class='btn btn-dark btn-social mx-2'
            href={this.props.fb}
            target='_blank'
          >
            <i class='fab fa-facebook-f'></i>
          </a>
          <a
            class='btn btn-dark btn-social mx-2'
            href={this.props.linkedin}
            target='_blank'
          >
            <i class='fab fa-linkedin-in'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default TeamMember;
