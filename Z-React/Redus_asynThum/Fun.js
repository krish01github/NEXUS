// Fun.jsx
import React from "react";

export default function Fun({ coin }) {
  // defensive check
  if (!coin) return null;

  const {
    id,
    name,
    symbol,
    image,
    current_price,
    market_cap_rank,
    price_change_percentage_24h
  } = coin;

  return (
    <article
      key={id}
      style={{
        border: "1px solid #e5e7eb",
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        display: "flex",
        gap: 12,
        alignItems: "center",
        background: "#fff"
      }}
    >
      <img
        src={image}
        alt={`${name} logo`}
        style={{ width: 48, height: 48, objectFit: "contain" }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700 }}>
          {name} <small style={{ color: "#6b7280" }}>({symbol?.toUpperCase()})</small>
        </div>
        <div style={{ fontSize: 14, color: "#374151" }}>
          ${current_price?.toLocaleString?.() ?? "—"} • Rank #{market_cap_rank ?? "—"}
        </div>
      </div>

      <div style={{ textAlign: "right", minWidth: 110 }}>
        <div style={{ fontWeight: 700 }}>
          {price_change_percentage_24h != null
            ? `${price_change_percentage_24h.toFixed(2)}%`
            : "—"}
        </div>
        <div style={{ fontSize: 12, color: price_change_percentage_24h >= 0 ? "green" : "red" }}>
          24h
        </div>
      </div>
    </article>
  );
}
