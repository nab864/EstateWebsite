"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmFiODY0IiwiYSI6ImNta3hqYmFzaTBiejQzZW9oeWs1cmRuYnQifQ.IgTdHRV3TdaGzc9x20yRPw";

export default function InterMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) return;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      center: [-98.5795, 39.8283],
      zoom: 3,
      style: "mapbox://styles/nab864/cmkxjeu21000901src15vftn8?fresh=true",
    });
    const map = mapRef.current;
    map.on("load", () => {
      // Add state labels
      map.addLayer({
        id: "state-labels",
        type: "symbol",
        source: "composite",
        "source-layer": "place_label",
        filter: ["==", ["get", "type"], "state"],
        layout: {
          "text-field": ["get", "name_en"],
          "text-size": 16,
          "text-transform": "uppercase",
          "text-letter-spacing": 0.15,
          "text-max-width": 8,
        },
        paint: {
          "text-color": "#fff",
          "text-halo-color": "#fff",
          "text-halo-width": 2,
        },
      });
    });
  }, []);

  return <div className="h-96 w-full max-w-4xl" ref={mapContainerRef}></div>;
}
