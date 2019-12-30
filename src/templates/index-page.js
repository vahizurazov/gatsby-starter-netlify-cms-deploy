import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Img from "gatsby-image/withIEPolyfill";
import Content, { HTMLContent } from "../components/Content";

import "./styles/section_greeter/index.scss";

export const IndexPageTemplate = ({
  section_1_image,
  section_1_title,
  section_1_btn_text,
  section_1_subheading,
  contentComponent,
  content,
  section_2_right_subheading,
  section_2_right_text,
  section_2_left_subheading,
  section_2_left_text,
  section_2_title,
  section_2_1_image,
  section_2_2_image
}) => {
  const MainPageContent = contentComponent || Content;
  return (
    <main id="main">
      <div className="page-main">
        <section className="container">
          <div className="section-greeter">
            <div className="content">
              <h1 className="heading uppercase">{section_1_title}</h1>
              <h4 className="heading">{section_1_subheading}</h4>
              <MainPageContent className="description-wrap" content={content} />
              <div>
                <button
                  className="btn btn-primary trigger"
                  // onClick={() => this.setModalState(true)}
                >
                  {section_1_btn_text}
                </button>
              </div>
            </div>
            <div className="circle circle-1" />
            <div className="circle circle-3" />
            {!!section_1_image.childImageSharp ? (
              <Img
                className="main_background"
                fluid={section_1_image.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="Greetings from Sparkybit team"
              />
            ) : (
              <img src={section_1_image} alt="" className="main_background" />
            )}

            <div className="circle circle-7" />
          </div>
        </section>
        <section className="section-services">
          <div className="container">
            <h1 className="striped uppercase">{section_2_title}</h1>
            <div className="services">
              <div className="service salesforce">
                <div className="circle circle-1">
                  {/* {!!section_2_1_image.childImageSharp ? (
                    <Img
                      fixed={section_2_1_image.childImageSharp.fixed}
                      alt={section_2_right_subheading}
                      fadeIn={true}
                    />
                  ) : (
                    <img
                      src={section_2_1_image}
                      alt={section_2_right_subheading}
                    />
                  )} */}
                </div>
                <div className="circle circle-2" />
                <div className="content pull-right">
                  <h5 className="heading uppercase">
                    {section_2_right_subheading}
                  </h5>
                  <p>{section_2_right_text}</p>
                  <div className="more-holder">
                    <Link to="/services" className="link-more pull-right">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="service bespoke">
                <div className="circle circle-1">
                  {/* {!!section_2_2_image.childImageSharp ? (
                    <Img
                      fixed={section_2_2_image.childImageSharp.fixed}
                      alt={section_2_left_subheading}
                      fadeIn={false}
                    />
                  ) : (
                    <img
                      src={section_2_2_image}
                      alt={section_2_left_subheading}
                    />
                  )} */}
                </div>
                <div className="content pull-left">
                  <h5 className="heading uppercase">
                    {section_2_left_subheading}
                  </h5>
                  <p>{section_2_left_text}</p>
                  <div className="more-holder">
                    <Link
                      to="/services#bespoke"
                      className="link-more pull-right"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="container">
      <div className="section-technologies">
        <h1 className="striped uppercase">
          {fields.section_3_title}
        </h1>
        <p>{fields.section_3_text}</p>
        <div className="technologies">
          <Picture
            sources={[
              {
                type: "image/webp",
                srcSet:
                  fields.section_3_image_mobile.localFile
                    .childImageSharp.fixed.srcSetWebp,
                media: "(max-width: 767px)",
              },
              {
                srcSet:
                  fields.section_3_image_mobile.localFile
                    .childImageSharp.fixed.srcSet,
                media: "(max-width: 767px)",
              },
              {
                type: "image/webp",
                srcSet:
                  fields.section_3_image_desktop.localFile
                    .childImageSharp.fixed.srcSetWebp,
              },
              {
                srcSet:
                  fields.section_3_image_desktop.localFile
                    .childImageSharp.fixed.srcSet,
              },
            ]}
            src={
              fields.section_3_image_desktop.localFile.childImageSharp
                .fixed.src
            }
          />
        </div>
      </div>
    </section> */}
      </div>
    </main>
  );
};

IndexPageTemplate.propTypes = {
  section_1_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  section_1_title: PropTypes.string,
  section_1_btn_text: PropTypes.string,
  section_1_subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log("data Index page", post);

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        section_1_image={post.frontmatter.section_1_image}
        section_1_title={post.frontmatter.section_1_title}
        section_1_btn_text={post.frontmatter.section_1_btn_text}
        section_1_subheading={post.frontmatter.section_1_subheading}
        section_2_right_subheading={post.frontmatter.section_2_right_subheading}
        section_2_right_text={post.frontmatter.section_2_right_text}
        section_2_left_subheading={post.frontmatter.section_2_left_subheading}
        section_2_left_text={post.frontmatter.section_2_left_text}
        section_2_title={post.frontmatter.section_2_title}
        section_2_1_image={post.frontmatter.section_2_1_image}
        section_2_2_image={post.frontmatter.section_2_2_image}
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
      html
      frontmatter {
        section_1_title
        section_1_image {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1280) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        section_1_btn_text
        section_1_subheading
        section_2_1_image {
          childImageSharp {
            fixed(quality: 90, width: 300, height: 300) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        section_2_2_image {
          childImageSharp {
            fixed(quality: 90, width: 465, height: 465) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        section_2_right_subheading
        section_2_right_text
        section_2_left_subheading
        section_2_left_text
        section_2_title
      }
    }
  }
`;
