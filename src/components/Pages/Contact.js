import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      // <!-- Contact-->
      <div>
        <section className='page-section' id='contact'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Contact Us</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <form id='contactForm' name='sentMessage' novalidate='novalidate'>
              <div className='row align-items-stretch mb-5'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      id='name'
                      type='text'
                      placeholder='Your Name *'
                      required='required'
                      data-validation-required-message='Please enter your name.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control'
                      id='email'
                      type='email'
                      placeholder='Your Email *'
                      required='required'
                      data-validation-required-message='Please enter your email address.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group mb-md-0'>
                    <input
                      className='form-control'
                      id='phone'
                      type='tel'
                      placeholder='Your Phone *'
                      required='required'
                      data-validation-required-message='Please enter your phone number.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group form-group-textarea mb-md-0'>
                    <textarea
                      className='form-control'
                      id='message'
                      placeholder='Your Message *'
                      required='required'
                      data-validation-required-message='Please enter a message.'
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
              </div>
              <div className='text-center'>
                <div id='success'></div>
                <button
                  className='btn btn-primary btn-xl text-uppercase'
                  id='sendMessageButton'
                  type='submit'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className='footer py-4'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-4 text-lg-left'>
                Copyright © Your Website 2020
              </div>
              <div className='col-lg-4 my-3 my-lg-0'>
                <a className='btn btn-dark btn-social mx-2' href='#!'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a
                  className='btn btn-dark btn-social mx-2'
                  href='https://www.facebook.com/'
                  target='_blank'
                >
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a
                  className='btn btn-dark btn-social mx-2'
                  href='https://www.linkedin.com/!'
                  target='_blank'
                >
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
              <div className='col-lg-4 text-lg-right'>
                <a className='mr-3' href='#!'>
                  Privacy Policy
                </a>
                <a href='#!'>Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Contact;
