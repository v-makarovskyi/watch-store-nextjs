import React from 'react'
import { getTrackBackground, Range } from 'react-range'

export default function InputRange({ handleChanges, values, STEP, MIN, MAX }) {
  return (
    <Range
    step={STEP}
    min={MIN}
    max={MAX}
    values={values}
    onChange={(vals) => handleChanges(vals)}
    renderTrack={({ props, children }) => (
      <div
        {...props}
        style={{
          ...props.style,
          height: '5px',
          width: '100%',
          background: getTrackBackground({
            values: values,
            colors: ["#EDEDED", "red", "#EDEDED"],
            min: MIN,
            max: MAX
          }),
        }}
      >
        {children}
      </div>
    )}
    renderThumb={({ props, isDragged }) => (
      <div
        {...props}
        style={{
          ...props.style,
          height: '17px',
          width: '12px',
          borderRadius: '5px',
          backgroundColor: 'red',
          backgroundColor: isDragged ? "red" : "red"
        }}
      />
    )}
  />
  )
}
