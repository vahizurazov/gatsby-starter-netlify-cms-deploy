import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
/* import Content, { HTMLContent } from "../components/Content"; */
/* import Img from "gatsby-image/withIEPolyfill"; */

import "./styles/index.scss";

export const ServicesPageTemplate = ({
  title
}) => {
  return (
    <main id="main">
      <h1>
        title
      </h1>
    </main>
  );
};

ServicesPageTemplate.propTypes = {
  title: PropTypes.string
};

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <ServicesPageTemplate
        title={post.title}
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
      frontmatter {
        title
      }
    }
  }
`;
