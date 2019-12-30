import React, { useState } from "react";
import { Link } from "gatsby";
// import { Link, useStaticQuery, graphql } from "gatsby";
import classNames from "classnames";

export default props => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     wordpressWpApiMenusMenusItems(slug: { eq: "global-navigation" }) {
  //       id
  //       items {
  //         title
  //         object_id
  //         object_slug
  //       }
  //     }
  //   }
  // `)

  const [navClassName, setNavClassName] = useState("");
  const [navHamburgerClassName, setNavHamburgerClassName] = useState("");

  const onNavClick = () => {
    setNavHamburgerClassName(navHamburgerClassName ? "" : "is-active");
    setNavClassName(navClassName ? "" : "opened");
  };

  return (
    <header id="header">
      <div className="wrapper-header">
        <strong className="logo">
          <Link to="/">Sparkybit</Link>
        </strong>

        <div className={classNames("nav-holder", navClassName)}>
          <div
            className={classNames(
              "hamburger hamburger--squeeze",
              navHamburgerClassName
            )}
            tabIndex="0"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
            onClick={onNavClick}
            onKeyDown={onNavClick}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
          <nav>
            <Link
              activeClassName="active"
              partiallyActive={true}
              to="/services"
            >
              services
            </Link>
            <Link
              activeClassName="active"
              partiallyActive={true}
              to="/blog"
            >
              blog
            </Link>
            <Link
              activeClassName="active"
              partiallyActive={true}
              to="/about-us"
            >
              about us
            </Link>
            <Link
              activeClassName="active"
              partiallyActive={true}
              to="/careers"
            >
              careers
            </Link>
            <Link
              activeClassName="active"
              partiallyActive={true}
              to="/contact-us"
            >
              contact-us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
