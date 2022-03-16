import React from "react";

export default function LocationIcon() {
  return (
    <svg
      version="1.1"
      viewBox="0 0 24 24"
      className="svg-icon svg-fill"
      style={{ width: 24, height: 24 }}
    >
      <g fill="none" fillRule="evenodd">
        <circle
          pid={0}
          cx={12}
          cy={12}
          r={12}
          fill="#000"
          fillOpacity=".2"
          fillRule="nonzero"
        />
        <path
          pid={1}
          fill="#FFF"
          d="M11.92 6c2.87 0 5.218 2.335 5.218 5.205a5.112 5.112 0 01-1.055 3.137c-.97 1.252-3.77 3.461-3.882 3.56a.43.43 0 01-.282.098.43.43 0 01-.281-.098c-.113-.099-2.912-2.308-3.883-3.546a5.182 5.182 0 01-1.055-3.15C6.7 8.335 9.05 6 11.92 6zm0 7.203a2.104 2.104 0 000-4.207 2.104 2.104 0 000 4.206z"
        />
      </g>
    </svg>
  );
}
