import React from "react";
import PropTypes from "prop-types";
import { AboutUsPageTemplate } from "../../templates/about-us-page";

const AboutUsPagePreview = ({ entry, widgetFor }) => (
  <AboutUsPageTemplate
    section_1_title={entry.getIn(["data", "section_1_title"])}
    section_1_content={entry.getIn(["data", "section_1_content"])}
    section_2_text={entry.getIn(["data", "section_2_text"])}
    section_3_title={entry.getIn(["data", "section_3_title"])}
    section_3_text={entry.getIn(["data", "section_3_text"])}
    section_1_image={entry.getIn(["data", "section_1_image"])}
    section_2_image={entry.getIn(["data", "section_2_image"])}
  />
);

AboutUsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutUsPagePreview;
