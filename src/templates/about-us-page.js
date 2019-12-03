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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutUsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutUsPageTemplate title={post.frontmatter.title} />
    </Layout>
  );
};

AboutUsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutUsPage;

export const aboutPageQuery = graphql`
  query AboutUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
