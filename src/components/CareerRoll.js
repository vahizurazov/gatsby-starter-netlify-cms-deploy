import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";

class CareerRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: careers } = data.allMarkdownRemark;
    console.log("this.props data CareerRoll", careers);

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
                        {/* <Icon
                        className="preview"
                        icon={DEVICON[`${node.acf.vacancy.language.value}`]}
                        size="144"
                        /> */}
                      </div>
                      <div className="vacancy-wrap-right">
                        <div className="vacancy-wrap-title">
                          <Link to={career.fields.slug}>
                            <h3 className="vacancy-title">
                              {career.frontmatter.title}
                            </h3>
                          </Link>
                          <div className="vacancy-location">
                            {/* {node.acf.vacancy.location.map(el => {
                             return (
                               <span className="vacancy-city" key={el}>
                                 {el}
                               </span>
                             )
                           })} */}
                          </div>
                        </div>
                        <div className="vacancy-skills">
                          {/* {node.acf.vacancy.skills.map(el => (
                           <Icon
                             className="icon-skills"
                             key={el.value}
                             icon={SKILLS[`${el.value}`]}
                             size="20"
                           />
                         ))} */}
                        </div>
                        <div className="about-project">
                          <h4 className="vacancy-about-title">About project</h4>
                          {/* <div
                           className="vacancy-about"
                           dangerouslySetInnerHTML={{
                             __html: node.acf.vacancy.about_project,
                           }}
                         /> */}
                          {career.excerpt}
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
      // <main id="main">
      //   <div className="page-main">
      //     <div className="section-greeter">
      //       <div className="content"></div>
      //       <div className="columns is-multiline">
      //         {careers &&
      //           careers.map(({ node: career }) => (
      //             <div className="is-parent column is-6" key={career.id}>
      //               <article
      //                 className={`blog-list-item tile is-child box notification ${
      //                   career.frontmatter.featuredpost ? "is-featured" : ""
      //                 }`}
      //               >
      //                 <header>
      //                   {career.frontmatter.featuredimage ? (
      //                     <div className="featured-thumbnail">/></div>
      //                   ) : null}
      //                   <p className="career-meta">
      //                     <Link
      //                       className="title has-text-primary is-size-4"
      //                       to={career.fields.slug}
      //                     >
      //                       {career.frontmatter.title}
      //                     </Link>
      //                     <span> &bull; </span>
      //                     <span className="subtitle is-size-5 is-block">
      //                       {career.frontmatter.date}
      //                     </span>
      //                   </p>
      //                 </header>
      //                 <p>
      //                   {career.excerpt}
      //                   <br />
      //                   <br />
      //                   <Link className="button" to={career.fields.slug}>
      //                     Keep Reading →
      //                   </Link>
      //                 </p>
      //               </article>
      //             </div>
      //           ))}
      //       </div>
      //     </div>
      //   </div>
      // </main>
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
