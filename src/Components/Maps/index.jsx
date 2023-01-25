import React from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import GeoJson from "./countries-110m.json"
export default function MapChart({data}) {
  return (
    <ComposableMap projectionConfig={{
    scale: 1000,
    rotate: [0, 0, -10],
    center:[data.long,data.lat]
  }}>
      <Geographies geography={GeoJson}>
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
      <Marker coordinates={[data.long,data.lat]}> 
        <circle r={8} fill="#F53" />
      </Marker>
    </ComposableMap>
  )
}