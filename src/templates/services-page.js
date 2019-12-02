import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ServicesPageTemplate = ({
  heading,
  content,
  contentComponent,
  subheading,
  image
}) => {
  const ServicesContent = contentComponent || Content;
  console.log("contentComponent", contentComponent);
  console.log("content", content);

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <img
                src={
                  !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                }
                alt=""
              />
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {heading}
              </h2>
              <h3>{subheading}</h3>
              <ServicesContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ServicesPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log("post.image", post.image);

  return (
    <Layout>
      <ServicesPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        image={post.frontmatter.image}
        // body_section_1={post.frontmatter.body_section_1}
        // body_section_2={post.frontmatter.body_section_2}
      />
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ServicesPage;

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
