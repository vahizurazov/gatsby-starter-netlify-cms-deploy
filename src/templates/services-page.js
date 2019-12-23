import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image/withIEPolyfill";

export const ServicesPageTemplate = ({
  heading,
  content,
  contentComponent,
  subheading,
  image
}) => {
  const ServicesContent = contentComponent || Content;
  const imageStyle = { borderRadius: "5px", width: "100%", height: "200px" };

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              {!!image.childImageSharp ? (
                <Img
                  className="visual img-rounded"
                  fluid={image.childImageSharp.fluid}
                  alt="About Us"
                />
              ) : (
                <img src={image} alt="" style={imageStyle} />
              )}
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
  return (
    <Layout>
      <ServicesPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        image={post.frontmatter.image}
        body2={post.frontmatter.body2}
        body3={post.frontmatter.body3}
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
        body2
        body3
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
