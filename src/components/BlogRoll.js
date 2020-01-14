import React from "react";

import { Link, graphql, StaticQuery } from "gatsby";
import PostPreviewImg from "../img/images/blog/default-preview.jpg";
import Img from "gatsby-image/withIEPolyfill";
import { kebabCase } from "lodash";

class BlogRoll extends React.Component {
  // getCategory = categoryName => {
  //   return categoryName
  //     .toLowerCase()
  //     .split(" ")
  //     .join("-");
  // };
  render() {
    const { data, count } = this.props;
    console.log("tagData Blog Roll", count);
    const { edges: posts } = data.allMarkdownRemark;
    console.log("posts", posts);

    return (
      <div id="main">
        <div className="page-blog">
          <div className="container">
            <h1 className="h2 striped uppercase">page Title</h1>
            <hr />
            {posts &&
              posts.map(({ node: post }) => (
                <div key={post.id} className="post-block">
                  <div className="preview-block">
                    {post.frontmatter.featuredimage ? (
                      <Img
                        className="preview"
                        fluid={
                          post.frontmatter.featuredimage.childImageSharp.fluid
                        }
                        alt="Post preview"
                      />
                    ) : (
                      <img
                        className="preview"
                        src={PostPreviewImg}
                        alt="default-preview"
                      />
                    )}
                    <span className="text">{post.frontmatter.date}</span>
                  </div>
                  <div className="content-block">
                    <div className="category-list">
                      {post.frontmatter.tags.map((category, index) => (
                        <Link
                          key={category + `-${index}`}
                          to={`/tags/${kebabCase(category)}`}
                        >
                          <span className="post-category">{category}</span>
                        </Link>
                      ))}
                    </div>
                    <Link to={post.fields.slug}>
                      <h3 className="post-title">{post.frontmatter.title}</h3>
                    </Link>
                    <div className="post-excerpt">{post.excerpt}</div>
                  </div>
                </div>
              ))}
            <div className="circle circle-1" />
            <div className="circle circle-2" />
            <div className="circle circle-3" />
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                tags
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
