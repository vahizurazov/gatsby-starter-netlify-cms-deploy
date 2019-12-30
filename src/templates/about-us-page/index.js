import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

import "./styles/index.scss";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const AboutUsPageTemplate = ({  
  section_1_title
}) => {
  return (
    <main id="main">
      <div className="page-about-us">
        <div className="container">
          <h1 className="h2 striped uppercase">{section_1_title}</h1>
        </div>
      </div>
    </main>
  );
};

AboutUsPageTemplate.propTypes = {
  section_1_title: PropTypes.string.isRequired
};

const AboutUsPage = ({ data }) => {
  console.log("About us page", data);
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutUsPageTemplate
        section_1_title={post.frontmatter.section_1_title}
      />
    </Layout>
  );
};

AboutUsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutUsPage;

export const aboutUsPageQuery = graphql`
  query AboutUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        section_1_title
      }
    }
  }
`;
