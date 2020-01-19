import React, { Component } from "react";

import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Countries from "../../components/Countries";

import IconEnvelope from "../../../src/img/icon-message.svg";
import IconTel from "../../../src/img/icon-tel.svg";
import LeafletMap from "../../components/leaflet-map/index.js";

import "./styles/index.scss";

export class ContactsPageTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { country: this.props.countries[0] };
  }

  getCountry = value => {
    this.setState({ country: value });
  };

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
            <Countries countries={countries} getCountry={this.getCountry} />
            <div className="contacts">
              <div className="email">
                <img src={IconEnvelope} alt="contact email" />           
                <a>
                  <span onClick={() => this.setModalState(true)}>
                    {contact_email}
                  </span>
                </a>
              </div>
              <div className="tel">
                <img src={IconTel} alt="phone number" />
                <a href={`tel:${contact_phone}`}>{contact_phone}</a>
              </div>
            </div>
            <div className="follow">
              <button
                className="heading btn btn-primary trigger"
                // onClick={() => this.setModalState(true)}
              >
                {btn_name}
              </button>
            </div>
          </div>
          <div className="map">
             <LeafletMap countries={this.state.country} />
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
          offices {
            office
            latitude_office
            longitude_office
          }
        }
      }
    }
  }
`;
