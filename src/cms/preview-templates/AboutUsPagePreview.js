import React from "react";
import PropTypes from "prop-types";
import { AboutUsPageTemplate } from "../../templates/about-us-page";

const AboutUsPagePreview = ({ entry, widgetFor }) => (
  <AboutUsPageTemplate
    title={entry.getIn(["data", "title"])}
    heading={entry.getIn(["data", "heading"])}
    image={entry.getIn(["data", "image"])}
    subheading={entry.getIn(["data", "subheading"])}
    content={widgetFor("body")}
  />
);

AboutUsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutUsPagePreview;
