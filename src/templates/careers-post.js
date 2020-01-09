import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import IconEnvelope from "../../src/img/images/icon-message.svg";

import "./styles/careers/index.scss";

export const CareerPostTemplate = ({ description, title }) => {
  return (
    // <main id="main">
    //   <div className="page-main">
    //     <div className="section-greeter">
    //       <div className="content">
    //         <h1 className="heading uppercase">{title}</h1>
    //         <h2>{title}</h2>
    //         <h3>{description}</h3>
    //         <h4>{description}</h4>
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <main id="main">
      <div className="post-vacancy">
        <div className="container ">
          <h1 className="h1 striped uppercase">{title}</h1>
          <div className="vacancy-skills">
            {/* {vacancy.acf.vacancy.skills.map(el => (
            <Icon
              className="icon-skills"
              key={el.value}
              icon={SKILLS[`${el.value}`]}
              size="20"
            />
          ))} */}
          </div>
          {/* <AstRenderer ast={htmlAstDescription} /> */}
          <hr />
          {/* <div dangerouslySetInnerHTML={{ __html: vacancy.content }} /> */}
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
      }
    }
  }
`;
