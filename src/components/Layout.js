import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/header/";
import Footer from "../components/footer/";

import "../styles/index.scss";
import useSiteMetadata from "./SiteMetadata";
// import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div id="wrapper">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <link rel="canonical" href="http://sparkybit.com/" />
      </Helmet>

      <div className="w1">
        <div className="w2">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TemplateWrapper;
