import React from "react";

interface PremiumSliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (val: number) => void;
  origin?: number;
  className?: string;
}

/**
 * PremiumSlider implements a bi-directional "Relative Origin" fill.
 * The color fill grows from the 'origin' (usually 0) to the current 'value'.
 */
export const PremiumSlider: React.FC<PremiumSliderProps> = ({
  min,
  max,
  step,
  value,
  onChange,
  origin = 0,
  className = ""
}) => {
  // Convert value/origin to percentage of the track [0, 100]
  const getPct = (val: number) => ((val - min) / (max - min)) * 100;
  
  const valPct = getPct(value);
  const originPct = getPct(origin);
  
  const start = Math.min(valPct, originPct);
  const end = Math.max(valPct, originPct);
  
  // Track Gradient: Gray -> Accent (Fill) -> Gray
  const trackStyle = {
    background: `linear-gradient(to right, 
      rgba(255, 255, 255, 0.05) ${start}%, 
      var(--accent) ${start}%, 
      var(--accent) ${end}%, 
      rgba(255, 255, 255, 0.05) ${end}%
    )`
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className={`premium-slider ${className}`}
      style={trackStyle}
    />
  );
};
