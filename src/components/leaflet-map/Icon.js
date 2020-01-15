import L from "leaflet";
import { Marker } from "react-leaflet";

import icon from "./marker-icon-2x.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon"
});

L.Marker.prototype.options.icon = DefaultIcon;

export default { DefaultIcon };
