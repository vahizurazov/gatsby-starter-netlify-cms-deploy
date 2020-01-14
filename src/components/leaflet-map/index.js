import React, { Component } from "react"
import { isBrowser } from "../../utils/helpers"

if (isBrowser()) {
  import("!!style-loader/url!file-loader!sass-loader!leaflet/dist/leaflet.css")
}

export default class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.mapEl = null
  }

  componentDidMount() {
    // if(this.mapEl && this.mapEl.leafletElement) {
    //   this.mapEl.leafletElement.invalidateSize()
    // }
  }

  render() {
    if (isBrowser()) {
      const { Map, Marker, Popup, TileLayer } = require("react-leaflet")
      const { countries, offices } = this.props
      return (


        // <Map
        //   ref={mapEl => (this.mapEl = mapEl)}
        //   center={country.coords.split(", ")}
        //   zoom={Number(country.zoom) || 6}
        // >
        //   <TileLayer
        //     url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
        //     id="mapbox.streets"
        //     accessToken={`${process.env.GATSBY_MAPBOX_API_KEY || null}`}
        //   />
        //   {offices.map(o => {
        //     return (
        //       <Marker
        //         key={o.object_id}
        //         position={[
        //           o.city_marker.city_latitude,
        //           o.city_marker.city_longitude,
        //         ]}
        //       >
        //         <Popup>
        //           <div
        //             dangerouslySetInnerHTML={{
        //               __html: o.city_marker.city_description,
        //             }}
        //           />
        //         </Popup>
        //       </Marker>
        //     )
        //   })}
        // </Map>
      )
    }
    return null
  }
}
