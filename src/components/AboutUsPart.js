import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image/withIEPolyfill";

class AboutUsPart extends Component {
  render() {
    const { data } = this.props;
    console.log("AboutUsPart Data", data);
    const { edges: posts } = data.allMarkdownRemark;
    const node = posts[0].node.frontmatter;
    console.log("posts node", node);
    const imageStyle = { borderRadius: "5px", width: "100%", height: "200px" };

    return (
      <div className="columns is-multiline">
        <div>{node.section_1_content}</div>
        <div className="container">
          {!!node.section_1_image.childImageSharp ? (
            <Img
              className="service-background"
              fluid={node.section_1_image.childImageSharp.fluid}
              alt="About Us"
            />
          ) : (
            <img src={node.section_1_image} alt="" style={imageStyle} />
          )}
        </div>
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query AboutUsPageQuery {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { templateKey: { eq: "about-us-page" } } }
        ) {
          edges {
            node {
              frontmatter {
                section_1_content
                section_1_title
                section_2_text
                section_3_text
                section_3_title
                section_1_image {
                  childImageSharp {
                    fluid(quality: 90, maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <AboutUsPart data={data} count={count} />}
  />
);
