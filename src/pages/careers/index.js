import React from "react";

import Layout from "../../components/Layout";
import CareerRoll from "../../components/CareerRoll";

export default class CareerIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <CareerRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
