import React from "react";
import { BarLoader, FadeLoader } from "react-spinners";

export default function Loader({ loading, spinner = "scale", color = "red" }) {
  return (
    <div className="text-center">
      {spinner === "scale" && (
        <BarLoader
          color={color}
          loading={loading}
          width={100}
          height={7}
          margin={2}
        />
      )}
      {spinner === "fade" && <FadeLoader loading={loading} color={color} />}
    </div>
  );
}
