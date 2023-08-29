import React from "react";
import Loader from "../Loader";

function SingleLoader({ loading, width }) {
  return (
    <div
      aria-label="price-filter-loader"
      style={{
        height: `${width}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader loading={loading} spinner="scale" />
    </div>
  );
}

export default function BrandFilterLoader({ loading, width }) {
  return (
    <>
    <SingleLoader loading={loading} width={width} />
    <SingleLoader loading={loading} width={width} />
    <SingleLoader loading={loading} width={width} />
    <SingleLoader loading={loading} width={width} />
    <SingleLoader loading={loading} width={width} />
    <SingleLoader loading={loading} width={width} />
    </>
  )
}
