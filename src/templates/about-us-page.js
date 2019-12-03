import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const AboutUsPageTemplate = ({ title }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutUsPageTemplate.propTypes = {
  section_1_title: PropTypes.string.isRequired
};

const AboutUsPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log("data", data);

  return (
    <Layout>
      <AboutUsPageTemplate
        // section_1_title={post.frontmatter.section_1_title}
        // section_1_content={post.frontmatter.section_1_content}
        // section_2_text={post.frontmatter.section_2_text}
        // section_3_title={post.frontmatter.section_3_title}
        // section_3_text={post.frontmatter.section_3_text}
        title={post.frontmatter.title}
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
        title
      }
    }
  }
`;
