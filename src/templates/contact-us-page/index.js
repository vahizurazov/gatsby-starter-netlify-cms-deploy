import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

import "./styles/index.scss";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const ContactUsPageTemplate = ({
  title
}) => {
  return (
    <main id="main">
      <div className="page-contacts">
        <div className="container">
          <h1 className="h2 striped uppercase">{title}</h1>
        </div>
      </div>
    </main>
  );
};

ContactUsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
};

const ContactUsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ContactUsPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  );
};

ContactUsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ContactUsPage;

export const ContactUsPageQuery = graphql`
  query ContactUsPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "contact-us-page"}}) {
      frontmatter {
        title
        email
        btn_name
        phone
        locations {
          germany
          uk
          ukraine
        }
        location_map
      }
    }
  }
`;
