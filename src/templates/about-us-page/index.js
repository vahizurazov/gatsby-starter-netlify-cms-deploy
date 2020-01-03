import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

import "./styles/index.scss";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const AboutUsPageTemplate = ({
  title
}) => {
  return (
    <main id="main">
      <div className="page-about-us">
        <div className="container">
          <h1 className="h2 striped uppercase">{title}</h1>
        </div>
      </div>
    </main>
  );
};

AboutUsPageTemplate.propTypes = {
   title: PropTypes.string
};

const AboutUsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <AboutUsPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  );
};

AboutUsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default AboutUsPage;

export const aboutUsPageQuery = graphql`
  query AboutUsPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "about-us-page"}}) {
      frontmatter {
        title
        section_1 {
          backgroundImage {
            childImageSharp {
              fixed {
                base64
              }
            }
          }
          content
        }
        section_2 {
          backgroundImage {
            childImageSharp {
              fluid {
                srcWebp
              }
            }
          }
          content
        }
        section_3 {
          content
          heading
        }
      }
    }
  }
`;
