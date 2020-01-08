import React from "react";
import PropTypes from "prop-types";
import { ContactsPageTemplate } from "../../templates/contacts-page";

const ContactsPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return <ContactsPageTemplate contact_title={data.contact_title} />;
};

ContactsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ContactsPagePreview;
