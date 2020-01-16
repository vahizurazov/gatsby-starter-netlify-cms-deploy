import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { isBrowser } from "../../utils/helpers";

// -------------------работает но костыль-------------------------------------
// import L from "leaflet";
// import icon from "./marker-icon.png";
// // import iconShadow from "./marker-icon-2x.png";
// let DefaultIcon = L.icon({
//   iconUrl: icon
//   // shadowUrl: iconShadow
// });
// L.Marker.prototype.options.icon = DefaultIcon;
// L.Icon.Default.prototype.options.iconUrl = "./marker-icon-2x.png";
// -------------------------------------------------------

if (isBrowser()) {
  import("!!style-loader/url!file-loader!sass-loader!leaflet/dist/leaflet.css");
}

export default class LeafletMap extends Component {
  render() {
    if (isBrowser()) {
      const { countries } = this.props;
      const coordOffice = countries.offices[0];
      return (
        <Map
          ref={mapEl => (this.mapEl = mapEl)}
          center={[coordOffice.latitude_office, coordOffice.longitude_office]}
          zoom={countries.lenght > 2 ? 13 : 6}
        >
          <TileLayer
            url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
            id="mapbox.streets"
            accessToken={`${process.env.GATSBY_MAPBOX_API_KEY || null}`}
          />
          {countries.offices.map(o => {
            return (
              <Marker
                key={o.office}
                position={[o.latitude_office, o.longitude_office]}
              >
                <Popup>Hello from {o.office}!</Popup>
              </Marker>
            );
          })}
        </Map>
      );
    }
    return null;
  }
}
