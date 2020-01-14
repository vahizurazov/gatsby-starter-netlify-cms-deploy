import React from "react";
// import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import "./styles/blog/index.scss";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <main id="main">
      <div className="page-post">
        <div className="container wp-container">
          <h1 className="striped uppercase">{title}</h1>
          <p>{description}</p>
          <PostContent content={content} />
        </div>
      </div>
    </main>
  );
};

const BlogPost = ({ data }) => {
  console.log("BlogPostTemplate data", data);
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
