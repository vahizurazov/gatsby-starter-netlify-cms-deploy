import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import IconEnvelope from "../../src/img/images/icon-message.svg";
import { SKILLS } from "../../components/icon/constants";
import Icon from "../../components/icon";

import "./styles/index.scss";

export const CareerPostTemplate = ({ description, title, skills }) => {
  return (
    <main id="main">
      <div className="post-vacancy">
        <div className="container ">
          <h1 className="h1 striped uppercase">{title}</h1>
          <div className="vacancy-skills">
            {skills.map(el => (
              <Icon
                className="icon-skills"
                key={el}
                icon={SKILLS[`${el}`]}
                size="20"
              />
            ))}
          </div>
          {/* <AstRenderer ast={htmlAstDescription} /> */}
          <hr />
          {/* <div dangerouslySetInnerHTML={{ __html: vacancy.content }} /> */}
          <div>{description}</div>
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
  console.log("careers-post.js", data);
  const { markdownRemark: career } = data;
  return (
    <Layout>
      <CareerPostTemplate
        description={career.frontmatter.description}
        title={career.frontmatter.title}
        skills={career.frontmatter.skills}
      />
    </Layout>
  );
};

export default CareerPost;

export const pageQuery = graphql`
  query CareerPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        skills
      }
    }
  }
`;
