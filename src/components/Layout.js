import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/header/";
import Footer from "../components/footer/";

import "../styles/index.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div id="wrapper">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <link rel="canonical" href="http://sparkybit.com/"/>
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}../../../img/favicon-96x96.png`}
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}../../../img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}../../../img/favicon-16x16.png`}
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
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
