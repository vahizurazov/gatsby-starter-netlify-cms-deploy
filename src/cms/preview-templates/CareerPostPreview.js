import React from "react";
import { CareerPostTemplate } from "../../templates/careers-post";

const CareerPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <CareerPostTemplate
      content={widgetFor("body")}
      description={data.description}
      title={data.title}
      skills={data.skills}
    />
  );
};

export default CareerPostPreview;
