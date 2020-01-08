import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
// import "./styles/about_us/index.scss";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const ContactsPageTemplate = ({ section_1_title }) => {
  return <main id="main">{section_1_title}</main>;
};

ContactsPageTemplate.propTypes = {
  section_1_title: PropTypes.string.isRequired
};

const ContactsPage = ({ data }) => {
  console.log("Contacts page", data);
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContactsPageTemplate
        section_1_title={post.frontmatter.section_1_title}
      />
    </Layout>
  );
};

ContactsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactsPage;

export const ContactsPageQuery = graphql`
  query ContactsPage {
    markdownRemark {
      frontmatter {
        section_1_title
      }
    }
  }
`;
