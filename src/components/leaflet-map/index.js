import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import { isBrowser } from "../../utils/helpers";

// -------------------работает но костыль-------------------------------------
// import L from "leaflet";
// import icon from "./marker-icon-2x.png";
// import iconShadow from "./marker-icon-2x.png";
// let DefaultIcon = L.icon({
//   iconUrl: icon
//   // shadowUrl: iconShadow
// });
// L.Marker.prototype.options.icon = DefaultIcon;
// L.Icon.Default.prototype.options.iconUrl = "./marker-icon-2x.png";
// -------------------------------------------------------

// import DefaultIcon from "../leaflet-map/Icon";

if (isBrowser()) {
  import("!!style-loader/url!file-loader!sass-loader!leaflet/dist/leaflet.css");
}

export default class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.mapEl = null;
  }

  componentDidMount() {
    // if (this.mapEl && this.mapEl.leafletElement) {
    //   this.mapEl.leafletElement.invalidateSize();
    // }
  }

  getCoords(countries) {
    return [Number(countries.latitude), Number(countries.longitude)];
  }

  render() {
    if (isBrowser()) {
      const { countries } = this.props;
      console.log("countries", countries.offices);
      return (
        <Map
          ref={mapEl => (this.mapEl = mapEl)}
          // center={this.getCoords(countries)}
          center={[countries.latitude, countries.longitude]}
          zoom={13}
        >
          <TileLayer
            url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
            id="mapbox.streets"
            accessToken={`${process.env.GATSBY_MAPBOX_API_KEY || null}`}
          />
          {/* {countries.offices.map(o => {
            return (
              <Marker
                key={o.office}
                position={[
                  o.city_marker.city_latitude,
                  o.city_marker.city_longitude,
                ]}
              >
                <Popup>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: o.city_marker.city_description,
                    }}
                  />
                </Popup>
              </Marker>
            )
          })} */}
          <Marker position={[countries.latitude, countries.longitude]}>
            <Popup>
              <div>Popup testing marker</div>
            </Popup>
          </Marker>
        </Map>
      );
    }
    return null;
  }
}
