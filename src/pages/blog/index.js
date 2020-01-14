import React, { Component } from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends Component {
  render() {
    return (
      <Layout>
        <BlogRoll pageTitle="Related blog posts" />
      </Layout>
    );
  }
}
