import React from "react";

export type IconName =
  | "target"
  | "chat"
  | "search"
  | "person"
  | "bulb"
  | "doc"
  | "send"
  | "check"
  | "lock"
  | "play"
  | "x"
  | "clock";

export const Icon: React.FC<{
  name: IconName;
  size?: number;
  color?: string;
  stroke?: number;
}> = ({ name, size = 48, color = "#fff", stroke = 1.8 }) => {
  const p = {
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  let body: React.ReactNode = null;
  switch (name) {
    case "target":
      body = (
        <>
          <circle cx="12" cy="12" r="9" {...p} />
          <circle cx="12" cy="12" r="5" {...p} />
          <circle cx="12" cy="12" r="1.4" fill={color} />
        </>
      );
      break;
    case "chat":
      body = (
        <>
          <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" {...p} />
          <circle cx="8.5" cy="12" r="0.9" fill={color} />
          <circle cx="12" cy="12" r="0.9" fill={color} />
          <circle cx="15.5" cy="12" r="0.9" fill={color} />
        </>
      );
      break;
    case "search":
      body = (
        <>
          <circle cx="11" cy="11" r="7" {...p} />
          <path d="M16.5 16.5L21 21" {...p} />
        </>
      );
      break;
    case "person":
      body = (
        <>
          <circle cx="12" cy="8" r="4" {...p} />
          <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" {...p} />
        </>
      );
      break;
    case "bulb":
      body = (
        <path
          d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"
          {...p}
        />
      );
      break;
    case "doc":
      body = (
        <>
          <path d="M7 3h8l4 4v14H7z" {...p} />
          <path d="M15 3v4h4M10 12h6M10 16h6" {...p} />
        </>
      );
      break;
    case "send":
      body = <path d="M21 3L3 10.5l7 3 3 7zM10 13.5L21 3" {...p} />;
      break;
    case "check":
      body = <path d="M5 12.5l4.5 4.5L19 7.5" {...p} />;
      break;
    case "lock":
      body = (
        <>
          <rect x="5" y="11" width="14" height="10" rx="2" {...p} />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" {...p} />
        </>
      );
      break;
    case "play":
      body = <path d="M8 5v14l11-7z" fill={color} stroke={color} strokeWidth={1} strokeLinejoin="round" />;
      break;
    case "x":
      body = <path d="M6 6l12 12M18 6L6 18" {...p} />;
      break;
    case "clock":
      body = (
        <>
          <circle cx="12" cy="12" r="9" {...p} />
          <path d="M12 7v5l3 2" {...p} />
        </>
      );
      break;
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block" }}>
      {body}
    </svg>
  );
};
