import React from "react";
import PropTypes from "prop-types";
import { ServicesPageTemplate } from "../../templates/services-page";

const ServicesPagePreview = ({ entry, widgetFor }) => (
  <ServicesPageTemplate
    title={entry.getIn(["data", "title"])}
    heading={entry.getIn(["data", "heading"])}
    image={entry.getIn(["data", "image"])}
    subheading={entry.getIn(["data", "subheading"])}
    heading={entry.getIn(["data", "heading"])}
    content={widgetFor("body")}
    contentSectionTwo={widgetFor("body2")}
  />
);

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ServicesPagePreview;
