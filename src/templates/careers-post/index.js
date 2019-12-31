import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

import "./styles/index.scss";

export const CareerPostTemplate = ({
  description,
  title
}) => {

  return (
    <main id="main">
    <div className="page-main">
      <div className="section-greeter">
        <div className="content">
          <h1 className="heading uppercase">{title}</h1>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  </main>
  )
}

CareerPostTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

const CareerPost = ({ data }) => {
  const { markdownRemark: career } = data

  return (
    <Layout>
      <CareerPostTemplate
        description={career.frontmatter.description}
        title={career.frontmatter.title}
      />
    </Layout>
  )
}

CareerPost.propTypes = {
  data: PropTypes.shape({
  markdownRemark: PropTypes.object,
  }),
}

export default CareerPost

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
`
