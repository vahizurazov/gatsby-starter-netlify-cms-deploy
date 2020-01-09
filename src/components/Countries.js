import React, { Component } from "react";
import { v4 } from "uuid";

export default class Countries extends Component {
  constructor(props) {
    super(props);
    console.log("props", this.props);
    this.state = {
      country: props.countries[0]
    };
  }

  setCountry(event, country) {
    event.preventDefault();
    this.setState({ country });
  }
  render() {
    const { countries } = this.props;
    return (
      <ul className="contact-list">
        {countries.map(c => {
          return (
            <li
              // key={c.country}
              key={v4()}
              className={
                this.state.country.country === c.country ? "active" : ""
              }
            >
              <span onClick={e => this.setCountry(e, c)}>{c.country}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
