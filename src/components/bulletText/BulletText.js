import React from "react";
import "./BulletText.css";

export default function BulletText({ text, theme, className, style }) {
  return (
    <p className={`bullet-text ${className || ""}`} style={style}>
      <span
        className="bullet-text-dot"
        style={{ backgroundColor: theme.imageHighlight }}
      />
      {text}
    </p>
  );
}
