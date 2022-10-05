import React from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart() {
  return (
    <ComposableMap projectionConfig={{
    scale: 1000,
    rotate: [0, 0, -10],
    center:[80.169296,12.90001]
  }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#e6f93a"
              stroke="#edafaf"
              style={{
    default: { fill: "#a1e3d8" },
    hover: { fill: "#d082e3" },
    pressed: { fill: "#ebecf0" },
  }}
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[80.169296,12.90001]}> 
        <circle r={8} fill="#F53" />
      </Marker>
    </ComposableMap>
  )
}