import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import "./styles/index.scss";

export const IndexPageTemplate = ({
  section_1_title
}) => (
  <main id="main">
    <div className="page-main">
      <div className="section-greeter">
        <div className="content">
          <h1 className="heading uppercase">{section_1_title}</h1>
        </div>
      </div>
    </div>
  </main>
);

IndexPageTemplate.propTypes = {
  section_1_title: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
      //page props
      section_1_title={frontmatter.section_1_title}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        section_1_title
          }
        }
      }
`;
