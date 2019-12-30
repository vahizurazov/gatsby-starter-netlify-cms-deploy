import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  section_1_image,
  section_1_title,
  section_1_btn_text,
  section_1_subheading
}) => (
  <main id="main">
    <div className="page-main">
      <section className="container">
        <div className="section-greeter">
          <div className="content">
            <h1 className="heading uppercase">{section_1_title}</h1>
            <h4 className="heading">{section_1_subheading}</h4>
            {/* <div
            className="description-wrap"
            dangerouslySetInnerHTML={{
              __html: section_1_content,
            }}
          /> */}
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
          {/* <Img
            className="main_background"
            fluid={section_1_image.localFile.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Greetings from Sparkybit team"
          /> */}
          <div className="circle circle-7" />
        </div>
      </section>
      {/* <section className="section-services">
      <div className="container">
        <h1 className="striped uppercase">
          {fields.section_2_title}
        </h1>
        <div className="services">
          <div className="service salesforce">
            <div className="circle circle-1">
              <Img
                fixed={
                  fields.section_2_1_image.localFile.childImageSharp
                    .fixed
                }
                alt={fields.section_2_right_subheading}
                fadeIn={true}
              />
            </div>
            <div className="circle circle-2" />
            <div className="content pull-right">
              <h5 className="heading uppercase">
                {fields.section_2_right_subheading}
              </h5>
              <p>{fields.section_2_right_text}</p>
              <div className="more-holder">
                <Link to="/services" className="link-more pull-right">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="service bespoke">
            <div className="circle circle-1">
              <Img
                fixed={
                  fields.section_2_2_image.localFile.childImageSharp
                    .fixed
                }
                alt={fields.section_2_left_subheading}
                fadeIn={false}
              />
            </div>
            <div className="content pull-left">
              <h5 className="heading uppercase">
                {fields.section_2_left_subheading}
              </h5>
              <p>{fields.section_2_left_text}</p>
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
    </section> */}
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

IndexPageTemplate.propTypes = {
  section_1_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  section_1_title: PropTypes.string,
  section_1_btn_text: PropTypes.string,
  section_1_subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log("data Index page", data);

  return (
    <Layout>
      <IndexPageTemplate
        section_1_image={frontmatter.section_1_image}
        section_1_title={frontmatter.section_1_title}
        section_1_btn_text={frontmatter.section_1_btn_text}
        section_1_subheading={frontmatter.section_1_subheading}
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
        section_1_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        section_1_btn_text
        section_1_subheading
        section_1_content
      }
    }
  }
`;
