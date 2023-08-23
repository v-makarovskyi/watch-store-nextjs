import React from "react";
import Loader from "../Loader";
import { Col } from "react-bootstrap";

function SingleLoader({ loading, width }) {
  return (
    <div
      aria-label="single-loader-watchList"
      style={{
        position: 'relative',
        marginLeft: '0.5rem',
        width: '15rem',
        marginBottom: '1rem',
        padding: '0.8rem 0.7rem 0.8rem',
        border: '1px solid lightgray',
        borderRadius: '1.3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        height: `${width}px`,
      }}
    >
      <Loader loading={loading} spinner="propagate" />
    </div>
  );
}

export default function WatchListLoader({
  loading,
  width
}) {
  return <SingleLoader loading={loading} width={width} />;
}
