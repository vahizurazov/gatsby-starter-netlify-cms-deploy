import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Content, { HTMLContent } from "../../components/Content";
import IconEnvelope from "../../../src/img/icon-message.svg";

import "./styles/index.scss";

export const CareerPostTemplate = ({
  description,
  title,
  content,
  contentComponent
}) => {
  const CareersContent = contentComponent || Content;
  return (
    <main id="main">
      <div className="post-vacancy">
        <div className="container ">
          <h1 className="h1 striped uppercase">{title}</h1>
          <p>{description}</p>
          <hr />
          <CareersContent content={content} />
          <div className="feedback">
            <button
              className="heading btn btn-primary trigger"
              // onClick={() => this.setModalState(true)}
            >
              <img
                className="feedback-image"
                src={IconEnvelope}
                alt="contact email"
              />
              <span className="feedback-title">feedback</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

const CareerPost = ({ data }) => {
  const { markdownRemark: career } = data;
  return (
    <Layout>
      <CareerPostTemplate
        description={career.frontmatter.description}
        title={career.frontmatter.title}
        contentComponent={HTMLContent}
        content={career.html}
      />
    </Layout>
  );
};

export default CareerPost;

export const pageQuery = graphql`
  query CareerPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
