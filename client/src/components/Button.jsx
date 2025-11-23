import React from "react";

export default function Button({ children, onClick, className = "", variant = "primary", ...rest }) {
  const base = "px-5 py-2 rounded-xl font-medium shadow-sm transition";
  const styles = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-gray-200",
    ghost: "bg-transparent text-white border border-zinc-700",
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant] || styles.primary} ${className}`} {...rest}>
      {children}
    </button>
  );
}