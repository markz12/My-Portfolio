import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from "formik";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your name*",
      },
      {
        name: "email",
        elementName: "input",
        type: "text",
        placeholder: "Your email*",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your phone number*",
      },
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Enter your message*",
      },
    ],
  ],
};

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
            <form
              id='contactForm'
              name='sentMessage'
              noValidate='novalidate'
              onSubmit={this.props.handleSubmit}
            >
              <div className='row align-items-stretch mb-5'>
                {fields.sections.map((section, sectionIndex) => {
                  return (
                    <div className='col-md-6' key={sectionIndex}>
                      {section.map((field, i) => {
                        return (
                          <Field
                            {...field}
                            key={i}
                            value={this.props.values[field.name]}
                            name={field.name}
                            onChange={this.props.handleChange}
                            onBlur={this.props.onBlur}
                            touched={this.props.touched[field.name]}
                            errors={this.props.errors[field.name]}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className='clearfix'></div>
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
                  href='https://www.linkedin.com/in/mark-joseph-abelardo-66ba92171'
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

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
  }),
  validate: (values) => {
    console.log(values);
    const errors = {};
    Object.keys(values).map((v) => {
      if (!values[v]) {
        errors[v] = "Required";
      }
    });
    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    alert("You've submitted the form", JSON.stringify(values));
  },
})(Contact);
