import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { DEVICON, SKILLS } from "./icon/constants";
import Icon from "./icon";

class CareerRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: careers } = data.allMarkdownRemark;
    console.log("DATA CareerRoll", data);

    return (
      <div id="main">
        <div className="page-vacancy">
          <div className="container">
            <h1 className="h2 striped uppercase">
              {/* {titleVacancy.title} */}
              Title
              <span className="vacancy-count">{careers.length}</span>
            </h1>
            {/* <AstRenderer ast={description} /> */}
            <hr />
            {careers &&
              careers.map(({ node: career }) => (
                <div className="vacancy-block" key={career.id}>
                  <div className="content-block">
                    <div className="vacancy-list">
                      <div className="vacancy-image">
                        <Icon
                          className="preview"
                          icon={DEVICON[`${career.frontmatter.language}`]}
                          size="144"
                        />
                      </div>
                      <div className="vacancy-wrap-right">
                        <div className="vacancy-wrap-title">
                          <Link to={career.fields.slug}>
                            <h3 className="vacancy-title">
                              {career.frontmatter.title}
                            </h3>
                          </Link>
                          <div className="vacancy-location">
                            {career.frontmatter.cities.map(city => {
                              return (
                                <span className="vacancy-city" key={city}>
                                  {city}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <div className="vacancy-skills">
                          {career.frontmatter.skills.map(el => (
                            <Icon
                              className="icon-skills"
                              key={el}
                              icon={SKILLS[`${el}`]}
                              size="20"
                            />
                          ))}
                        </div>
                        <div className="about-project">
                          <h4 className="vacancy-about-title">About project</h4>
                          {/* <div
                           className="vacancy-about"
                           dangerouslySetInnerHTML={{
                             __html: node.acf.vacancy.about_project,
                           }}
                         /> */}
                          {career.frontmatter.description}
                        </div>
                        <Link className="button" to={career.fields.slug}>
                          Keep Reading →
                        </Link>
                      </div>
                    </div>
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
                cities
                skills
                language
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
