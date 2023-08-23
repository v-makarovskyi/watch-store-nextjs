import React from "react";
import Loader from "../Loader";
import { Col } from "react-bootstrap";

function SingleLoader({ loading, width }) {
  return (
    <div
      aria-label="price-filter-loader"
      style={{
        height: `${width}px`,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      <Loader loading={loading} spinner="propagate" />
    </div>
  );
}

export default function PriceFilterLoader({ loading, width }) {
  return <SingleLoader loading={loading} width={width} />;
}
