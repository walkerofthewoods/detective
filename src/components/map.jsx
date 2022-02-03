import React from "react";
import mapSvg from "../data/demo_map.svg";
import { ReactComponent as MapSVG } from "../data/demo_map.svg";

const Map = () => {
  return (
    <div>
      {/* <img src={mapSvg} alt="map" /> */}
      <MapSVG />
    </div>
  );
};

export default Map;
