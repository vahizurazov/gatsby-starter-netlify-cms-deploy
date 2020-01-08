import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "./styles/contacts/index.scss";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export class ContactsPageTemplate extends Component {
  constructor(props) {
    super(props);
    // console.log("props", this.props);
    this.state = {
      country: props.countries[0]
    };
  }

  setCountry(event, country) {
    event.preventDefault();
    this.setState({ country });
  }

  render() {
    const {
      contact_title,
      contact_email,
      contact_phone,
      btn_name,
      countries
    } = this.props;

    return (
      <main id="main">
        <div className="page-contacts container">
          <div className="content">
            <h1 className="h2 heading striped uppercase">{contact_title}</h1>
            <ul className="contact-list">
              {countries.map(c => {
                return (
                  <li
                    key={c.country}
                    className={
                      this.state.country.country === c.country ? "active" : ""
                    }
                  >
                    <span onClick={e => this.setCountry(e, c)}>
                      {c.country}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="contacts">
              <div className="email">
                {/* <img src={IconEnvelope} alt="contact email" /> */}
                {/* eslint-disable */}
                <a>
                  <span onClick={() => this.setModalState(true)}>
                    {contact_email}
                  </span>
                </a>
              </div>
              <div className="tel">
                {/* <img src={IconTel} alt="phone number" /> */}
                <a href={`tel:${contact_phone}`}>{contact_phone}</a>
              </div>
            </div>
            <div className="follow">
              <button
                className="heading btn btn-primary trigger"
                onClick={() => this.setModalState(true)}
              >
                {btn_name}
              </button>
            </div>
          </div>
          <div className="map">
            {/* <LeafletMap country={this.state.country} offices={offices.items} /> */}
          </div>
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
        </div>
      </main>
    );
  }
}

const ContactsPage = ({ data }) => {
  console.log("Contacts page", data);
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContactsPageTemplate
        contact_title={post.frontmatter.contact_title}
        contact_email={post.frontmatter.contact_email}
        contact_phone={post.frontmatter.contact_phone}
        btn_name={post.frontmatter.btn_name}
        countries={post.frontmatter.countries}
      />
    </Layout>
  );
};

ContactsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactsPage;

export const ContactsPageQuery = graphql`
  query ContactsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        contact_title
        contact_email
        contact_phone
        btn_name
        countries {
          country
          latitude
          longitude
        }
      }
    }
  }
`;
