import React, { Component } from "react";

class TeamMember extends Component {
  render() {
    return (
      <div className='col-lg-6'>
        <div className='team-member'>
          <img
            className='mx-auto rounded-circle'
            src={this.props.image}
            alt=''
          />
          <h4>{this.props.member}</h4>
          <p className='text-muted'>{this.props.role}</p>
          <a
            className='btn btn-dark btn-social mx-2'
            href={this.props.github}
            target='_blank'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            className='btn btn-dark btn-social mx-2'
            href={this.props.linkedin}
            target='_blank'
          >
            <i className='fab fa-linkedin-in'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default TeamMember;
