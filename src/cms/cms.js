import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

import ServicesPagePreview from "./preview-templates/ServicesPagePreview";
import AboutUsPagePreview from "./preview-templates/AboutUsPagePreview";
import ContactsPagePreview from "./preview-templates/ContactsPagePreview";

import styles from "!css-loader!sass-loader!../styles/index.scss";

CMS.registerPreviewStyle(styles.toString(), { raw: true });

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

CMS.registerPreviewTemplate("services", ServicesPagePreview);
CMS.registerPreviewTemplate("about-us", AboutUsPagePreview);
CMS.registerPreviewTemplate("contacts", ContactsPagePreview);
