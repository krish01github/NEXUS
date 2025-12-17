import React, { useMemo } from "react";

/**
 * StarField
 * Ensures all stars remain fully on-screen by adding a padding "safe zone"
 * equal to the largest visual radius any star can reach (size*scale + beam + glow).
 */
export default function StarField({
  count = 100,
  minSize = 3,
  maxSize = 9,
}) {
  // generate star data (one-time per count)
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * (maxSize - minSize) + minSize; // base size px
      const scaleMin = +(Math.random() * 0.3 + 0.5).toFixed(2);
      const scaleMax = +(Math.random() * 0.8 + 1.0).toFixed(2);
      const duration = +(Math.random() * 4 + 2.5).toFixed(2);
      const delay = +(Math.random() * 3).toFixed(2);
      const ease = ["ease", "ease-in-out", "cubic-bezier(.2,.9,.2,1)"][
        Math.floor(Math.random() * 3)
      ];
      const baseOpacity = +(Math.random() * 0.7 + 0.3).toFixed(2);
      const top = +(Math.random() * 100).toFixed(4);
      const left = +(Math.random() * 100).toFixed(4);
      const rot = +(Math.random() * 90 + 6).toFixed(2); // rotation amplitude

      return {
        id: `star-${i}`,
        size,
        scaleMin,
        scaleMax,
        duration,
        delay,
        ease,
        baseOpacity,
        top,
        left,
        rot,
      };
    });
  }, [count, minSize, maxSize]);

  // compute the maximum safe padding (in px) required so all stars always stay visible
  const maxPadding = useMemo(() => {
    // For each star estimate the farthest pixel distance from its center the visual elements can reach
    // beamHalfLength chosen consistent with previous math (we used ~size * 2.4 total length)
    let maxNeeded = 0;
    stars.forEach((s) => {
      const beamHalf = (s.size * 2.6) / 2; // half beam length (px)
      // when scaled, both beam and size scale by scaleMax
      const scaledBeamHalf = beamHalf * s.scaleMax;
      const scaledCenter = (s.size / 2) * s.scaleMax; // center circle radius scaled
      // approximate glow increase (same as earlier glowMax calculation)
      const glowMax = s.size * 3.2 * Math.min(1, s.baseOpacity + 0.4);
      // take rotation into account: rotation can extend corner further.
      // a conservative approx: rotation might extend reach by up to 1.15 factor on diagonal
      const rotationFactor = 1.15;
      const needed = (scaledBeamHalf + scaledCenter + glowMax) * rotationFactor;
      if (needed > maxNeeded) maxNeeded = needed;
    });
    // ensure at least a small padding
    return Math.ceil(Math.max(8, maxNeeded));
  }, [stars]);

  // build keyframes CSS for all stars (unique names so each has its own params)
  const keyframesCss = useMemo(() => {
    let css = "";
    stars.forEach((s) => {
      const name = `${s.id}-pulse`;
      const glowMin = (s.size * 0.6 * s.baseOpacity).toFixed(2);
      const glowMax = (s.size * 3.2 * Math.min(1, s.baseOpacity + 0.4)).toFixed(
        2
      );
      const opMin = Math.max(0.12, s.baseOpacity * 0.5).toFixed(2);
      const opMax = Math.min(1, s.baseOpacity + 0.6).toFixed(2);
      const rotNeg = (-s.rot).toFixed(2);
      const rotPos = s.rot.toFixed(2);

      css += `
        @keyframes ${name} {
          0% {
            transform: scale(${s.scaleMin}) rotate(${rotNeg}deg);
            opacity: ${opMin};
            box-shadow: 0 0 ${glowMin}px rgba(255,255,255, ${opMin});
            filter: blur(0px);
          }
          50% {
            transform: scale(${s.scaleMax}) rotate(${rotPos}deg);
            opacity: ${opMax};
            box-shadow: 0 0 ${glowMax}px rgba(255,255,255, ${opMax});
            filter: blur(0.35px);
          }
          100% {
            transform: scale(${s.scaleMin}) rotate(${rotNeg}deg);
            opacity: ${opMin};
            box-shadow: 0 0 ${glowMin}px rgba(255,255,255, ${opMin});
            filter: blur(0px);
          }
        }
      `;
    });
    return css;
  }, [stars]);

  /**
   * Simple beam (keeps original approach; you can swap with the SVG bulged version if preferred)
   */
  function Beam({ orientation = "vertical", size = 6 }) {
    if (orientation === "vertical") {
      return (
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.max(1, size * 0.22)}px`,
            height: `${size * 2.4}px`,
            top: `${-size * 0.7}px`,
            left: `${size * 0.39}px`,
            borderRadius: `${(size * 2).toFixed(1)}px`,
          }}
        />
      );
    } else {
      return (
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: `${size * 2.4}px`,
            height: `${Math.max(1, size * 0.22)}px`,
            top: `${size * 0.39}px`,
            left: `${-size * 0.7}px`,
            borderRadius: `${(size * 2).toFixed(1)}px`,
          }}
        />
      );
    }
  }

  return (
    // apply padding equal to maxPadding so top/left percentage positions are inside safe area
    <div
      className="relative w-full h-full overflow-hidden bg-black"
      style={{ padding: `${maxPadding}px` }}
    >
      {/* Inject the generated keyframes */}
      <style>{keyframesCss}</style>

      {stars.map((star) => {
        const keyframeName = `${star.id}-pulse`;
        const anim = `${keyframeName} ${star.duration}s ${star.ease} ${star.delay}s infinite`;

        return (
          <div
            key={star.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              transformOrigin: "center center",
              animation: anim,
              opacity: star.baseOpacity,
              willChange: "transform, opacity, box-shadow",
            }}
          >
            <Beam orientation="vertical" size={star.size} />
            <Beam orientation="horizontal" size={star.size} />
          </div>
        );
      })}
    </div>
  );
}
