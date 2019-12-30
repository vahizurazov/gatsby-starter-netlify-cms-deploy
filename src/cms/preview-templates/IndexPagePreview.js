import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        section_1_image={data.section_1_image}
        section_1_title={data.section_1_title}
        section_1_btn_text={data.section_1_btn_text}
        section_1_subheading={data.section_1_subheading}
        // description={data.description}
        // intro={data.intro || { blurbs: [] }}
        // mainpitch={data.mainpitch || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
