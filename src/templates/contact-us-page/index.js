import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

import "./styles/index.scss";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const ContactUsPageTemplate = ({
  section_1_title
}) => {
  return (
    <main id="main">
      <div className="page-contact-us">
        <div className="container">
          <h1 className="h2 striped uppercase">{section_1_title}</h1>
        </div>
      </div>
    </main>
  );
};

ContactUsPageTemplate.propTypes = {
  section_1_title: PropTypes.string.isRequired
};

const ContactUsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContactUsPageTemplate
        section_1_title={post.frontmatter.section_1_title}
      />
    </Layout>
  );
};

ContactUsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactUsPage;

export const ContactUsPageQuery = graphql`
query ContactUsPageTemplate {
  markdownRemark(frontmatter: { templateKey: { eq: "contact-us-page" } }) {
    frontmatter {
      section_1_title
        }
      }
    }
`;
