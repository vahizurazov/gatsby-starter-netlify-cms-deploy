import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

class CareerRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: careers } = data.allMarkdownRemark;
    console.log(this.props);

    return (
      <main id="main">
        <div className="page-main">
          <div className="section-greeter">
            <div className="content"></div>
            <div className="columns is-multiline">
              {careers &&
                careers.map(({ node: career }) => (
                  <div className="is-parent column is-6" key={career.id}>
                    <article
                      className={`blog-list-item tile is-child box notification ${
                        career.frontmatter.featuredpost ? "is-featured" : ""
                      }`}
                    >
                      <header>
                        {career.frontmatter.featuredimage ? (
                          <div className="featured-thumbnail">/></div>
                        ) : null}
                        <p className="career-meta">
                          <Link
                            className="title has-text-primary is-size-4"
                            to={career.fields.slug}
                          >
                            {career.frontmatter.title}
                          </Link>
                          <span> &bull; </span>
                          <span className="subtitle is-size-5 is-block">
                            {career.frontmatter.date}
                          </span>
                        </p>
                      </header>
                      <p>
                        {career.excerpt}
                        <br />
                        <br />
                        <Link className="button" to={career.fields.slug}>
                          Keep Reading →
                        </Link>
                      </p>
                    </article>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query CareerRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "careers-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(fromNow: true)
                featuredpost
                description
              }
              html
              htmlAst
            }
          }
        }
      }
    `}
    render={data => <CareerRoll data={data} />}
  />
);
