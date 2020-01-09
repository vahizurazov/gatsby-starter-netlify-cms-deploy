import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import {
  InlineSelectControl,
  InlineSelectPreview
} from "netlify-cms-widget-inline-select";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ServicesPagePreview from "./preview-templates/ServicesPagePreview";
import AboutUsPagePreview from "./preview-templates/AboutUsPagePreview";
import ContactsPagePreview from "./preview-templates/ContactsPagePreview";

import allStyles from "!css-loader!sass-loader!../styles/index.scss";
import contacts from "!css-loader!sass-loader!../templates/styles/contacts/index.scss";
import services from "!css-loader!sass-loader!../templates/styles/services/index.scss";
import about_us from "!css-loader!sass-loader!../templates/styles/about_us/index.scss";
import section_greeter from "!css-loader!sass-loader!../templates/styles/section_greeter/index.scss";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerWidget("inline-select", InlineSelectControl, InlineSelectPreview);

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("services", ServicesPagePreview);
CMS.registerPreviewTemplate("about-us", AboutUsPagePreview);
CMS.registerPreviewTemplate("contacts", ContactsPagePreview);

CMS.registerPreviewStyle(allStyles.toString(), { raw: true });
CMS.registerPreviewStyle(section_greeter.toString(), { raw: true });
CMS.registerPreviewStyle(services.toString(), { raw: true });
CMS.registerPreviewStyle(about_us.toString(), { raw: true });
CMS.registerPreviewStyle(contacts.toString(), { raw: true });
