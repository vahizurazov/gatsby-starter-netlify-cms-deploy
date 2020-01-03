import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
/* import Content, { HTMLContent } from "../components/Content"; */
/* import Img from "gatsby-image/withIEPolyfill"; */

import "./styles/index.scss";

export const ServicesPageTemplate = ({
  title
}) => {
  return (
    <main id="main">
      <div className="page-services">
        <div className="container">
          <h1 className="h2 striped uppercase">{title}
          </h1>
        </div>
      </div>

    </main>
  );
};

ServicesPageTemplate.propTypes = {
  title: PropTypes.string
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ServicesPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ServicesPage;

export const servicesPageQuery = graphql`
  query ServicesPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "services-page"}}) {
      frontmatter {
        title
        background_image {
          childImageSharp {
            fixed {
              base64
            }
          }
        }
        section_1 {
          block_1 {
            content
            subheading
          }
          block_2 {
            content
            subheading
          }
          block_3 {
            content
            subheading
          }
          block_4 {
            content
            subheading
          }
        }
        section_2 {
          block_1 {
            content
            subheading
          }
          block_2 {
            content
            subheading
          }
          block_4 {
            content
            subheading
          }
          block_3 {
            content
            subheading
          }
          heading
        }
      }
    }
  }
`;
