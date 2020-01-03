import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import "./styles/index.scss";

export const IndexPageTemplate = ({
  title
}) => (
  <main id="main">
    <div className="page-main">
      <div className="section-greeter">
        <div className="container">
          <div>
            <h1 className="heading uppercase">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  </main>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter)
  return (
    <Layout>
      <IndexPageTemplate
      //page props
      title={frontmatter.section_1.title}
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
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        section_1 {
          title
          background_image {
            childImageSharp {
              fixed {
                base64
              }
            }
          }
          btn_name
          content
          sub_title
        }
        section_2 {
          background_image_1 {
            childImageSharp {
              fixed {
                base64
              }
            }
          }
          background_image_2 {
            childImageSharp {
              fixed {
                base64
              }
            }
          }
          content_1
          content_2
          heading_1
          heading_2
          lnk_name_1
          lnk_name_2
          title_1
          title_2
        }
        section_3 {
          background_image {
            childImageSharp {
              fixed {
                base64
              }
            }
          }
          content
          title
        }
      }
    }
  }
`;
