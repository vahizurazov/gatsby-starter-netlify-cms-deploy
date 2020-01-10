import React from "react";

import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    console.log("Data Blog Roll", data);
    const { edges: posts } = data.allMarkdownRemark;
    console.log("posts", posts);
    return (
      <div id="main">
        <div className="page-blog">
          <div className="container">
            {/* <h1 className="h2 striped uppercase">{pageTitle}</h1> */}
            <hr />
            {posts &&
              posts.map(({ node: post }) => (
                // <div key={"1"}>{console.log(post)}</div>
                <div key={post.id} className="post-block">
                  <div className="preview-block">
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`
                          }}
                        />
                      </div>
                    ) : null}
                    <span className="text">{post.frontmatter.date}</span>
                  </div>
                  <div className="content-block">
                    <div className="category-list">
                      {/* {post.categories.map((category, index) => (
                        <Link
                          key={category.name + `-${index}`}
                          to={`/categories/${category.name.toLowerCase()}`}
                        >
                          <span className="post-category">{category.name}</span>
                        </Link>
                      ))} */}
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
      // <div className="columns is-multiline">
      //   {posts &&
      //     posts.map(({ node: post }) => (
      //       <div className="is-parent column is-6" key={post.id}>
      //         <article
      //           className={`blog-list-item tile is-child box notification ${
      //             post.frontmatter.featuredpost ? "is-featured" : ""
      //           }`}
      //         >
      //           <header>
      //             {post.frontmatter.featuredimage ? (
      //               <div className="featured-thumbnail">
      //                 <PreviewCompatibleImage
      //                   imageInfo={{
      //                     image: post.frontmatter.featuredimage,
      //                     alt: `featured image thumbnail for post ${post.frontmatter.title}`
      //                   }}
      //                 />
      //               </div>
      //             ) : null}
      //             <p className="post-meta">
      //               <Link
      //                 className="title has-text-primary is-size-4"
      //                 to={post.fields.slug}
      //               >
      //                 {post.frontmatter.title}
      //               </Link>
      //               <span> &bull; </span>
      //               <span className="subtitle is-size-5 is-block">
      //                 {post.frontmatter.date}
      //               </span>
      //             </p>
      //           </header>
      //           <p>
      //             {post.excerpt}
      //             <br />
      //             <br />
      //             <Link className="button" to={post.fields.slug}>
      //               Keep Reading →
      //             </Link>
      //           </p>
      //         </article>
      //       </div>
      //     ))}
      // </div>
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
