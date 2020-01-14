import React, { Component } from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends Component {
  render() {
    // const { edges: data } = this.props.data.allMarkdownRemark;
    // console.log("Data in BlogIndexPage", data);
    return (
      <Layout>
        <BlogRoll />
      </Layout>
    );
  }
}

// export const pageQuery = graphql`
//   query BlogRollsQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             tags
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//             featuredpost
//             featuredimage {
//               childImageSharp {
//                 fluid(maxWidth: 120, quality: 100) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
