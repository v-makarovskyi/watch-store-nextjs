import React from "react";
import Loader from "../Loader";
import { Col } from "react-bootstrap";

function SingleSpiner({ loading, width, filterProperties }) {
  return (
    <div
      aria-label="filterPropertiesLoader"
      style={{
        height: `${width}px`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Loader
        loading={loading}
        spinner="propagate"
        filterProperties={filterProperties}
      />
    </div>
  );
}

export default function FilterPropertiesLoader({
  loading,
  width,
  filterProperties,
}) {
  return (
    <>
      <SingleSpiner
        loading={loading}
        width={width}
        filterProperties={filterProperties}
      />
      <SingleSpiner
        loading={loading}
        width={width}
        filterProperties={filterProperties}
      />
      <SingleSpiner
        loading={loading}
        width={width}
        filterProperties={filterProperties}
      />
      <SingleSpiner
        loading={loading}
        width={width}
        filterProperties={filterProperties}
      />
    </>
  );
}
