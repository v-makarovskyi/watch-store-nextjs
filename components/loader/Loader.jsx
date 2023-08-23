import React from "react";
import { BarLoader, FadeLoader, PropagateLoader } from "react-spinners";

export default function Loader({ loading, spinner, color = "red", filterProperties }) {
  return (
    <div aria-label="spinner-core">
      {spinner === "scale" && (
        <BarLoader
          color={color}
          loading={loading}
          width={filterProperties ? 200 : 150}
          height={7}
          margin={2}
        />
      )}
      {spinner === "fade" && <FadeLoader loading={loading} color={color} />}
      {spinner === 'propagate' && <PropagateLoader loading={loading} color={color} />}
    </div>
  );
}
