"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

interface MapViewProps {
  center?: [number, number]
  zoom?: number
  marker?: { lng: number; lat: number; label?: string }
  height?: string
  onClick?: (lat: number, lng: number) => void
}

function createMarkerEl() {
  const el = document.createElement("div");
  el.className = "w-5 h-5 bg-primary rounded-full border-2 border-white shadow-md cursor-pointer";
  return el;
}

export default function MapView({ center = [125.0, 8.0], zoom = 10, marker, height = "h-80", onClick }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<mapboxgl.Map | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);
  const onClickRef = useRef(onClick);

  useEffect(() => {
    onClickRef.current = onClick;
  });

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center,
      zoom,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    if (marker) {
      markerRef.current = new mapboxgl.Marker({ element: createMarkerEl() })
        .setLngLat([marker.lng, marker.lat])
        .addTo(map);
    }

    const ro = new ResizeObserver(() => map.resize());
    ro.observe(mapRef.current);

    map.on("click", (e) => {
      const { lng: lngVal, lat: latVal } = e.lngLat;

      if (markerRef.current) markerRef.current.remove();
      markerRef.current = new mapboxgl.Marker({ element: createMarkerEl() })
        .setLngLat([lngVal, latVal])
        .addTo(map);

      onClickRef.current?.(latVal, lngVal);
    });

    mapInstanceRef.current = map;

    return () => {
      ro.disconnect();
      map.remove();
      mapInstanceRef.current = null;
      markerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={mapRef} className={`w-full ${height}`} />;
}