import React from "react";
import { ContactsPageTemplate } from "../../templates/contacts-page";

const ContactsPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return <ContactsPageTemplate contact_title={data.contact_title} />;
};

export default ContactsPagePreview;
