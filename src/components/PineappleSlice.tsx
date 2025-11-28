export function PineappleSlice() {
  return (
    <div className="pineapple-wrapper">
      <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        {/* Main flesh gradient - more realistic yellow tones */}
        <radialGradient
          id="fleshGradient"
          cx="45%"
          cy="45%"
          r="55%"
        >
          <stop offset="0%" stopColor="#FFFAE6" />
          <stop offset="25%" stopColor="#FFF4C4" />
          <stop offset="50%" stopColor="#FFEB99" />
          <stop offset="75%" stopColor="#FFD966" />
          <stop offset="100%" stopColor="#EFC94C" />
        </radialGradient>

        {/* Outer ring gradient for depth */}
        <radialGradient
          id="outerRing"
          cx="50%"
          cy="50%"
          r="50%"
        >
          <stop
            offset="0%"
            stopColor="#FFD966"
            stopOpacity="0"
          />
          <stop
            offset="85%"
            stopColor="#E6B800"
            stopOpacity="0.3"
          />
          <stop
            offset="100%"
            stopColor="#CC9933"
            stopOpacity="0.5"
          />
        </radialGradient>

        {/* Center hole gradient with depth - softened */}
        <radialGradient
          id="holeGradient"
          cx="50%"
          cy="50%"
          r="50%"
        >
          <stop offset="0%" stopColor="#F5E6B3" />
          <stop offset="30%" stopColor="#E6CC7A" />
          <stop offset="60%" stopColor="#D4A73A" />
          <stop offset="85%" stopColor="#C69A38" />
          <stop
            offset="100%"
            stopColor="#B8863F"
            stopOpacity="0.8"
          />
        </radialGradient>

        {/* Shadow gradient for hole */}
        <radialGradient
          id="holeShadow"
          cx="50%"
          cy="50%"
          r="50%"
        >
          <stop
            offset="0%"
            stopColor="#000000"
            stopOpacity="0"
          />
          <stop
            offset="70%"
            stopColor="#000000"
            stopOpacity="0"
          />
          <stop
            offset="100%"
            stopColor="#000000"
            stopOpacity="0.3"
          />
        </radialGradient>

        {/* Sunbeam/fiber gradient - very subtle */}
        <linearGradient
          id="sunbeamGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor="#FFE87C"
            stopOpacity="0"
          />
          <stop
            offset="50%"
            stopColor="#FFE87C"
            stopOpacity="0.15"
          />
          <stop
            offset="100%"
            stopColor="#FFE87C"
            stopOpacity="0"
          />
        </linearGradient>

        {/* Texture overlay */}
        <pattern
          id="noiseTexture"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r={Math.random() * 0.5 + 0.2}
              fill="#E6B800"
              opacity={Math.random() * 0.15}
            />
          ))}
        </pattern>

        {/* Blur filter for softening the inner brown ring */}
        <filter id="softenFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>

        {/* Drop shadow filter for outer rim */}
        <filter
          id="dropShadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>


      {/* Micro drop shadow beneath the pineapple slice */}
      <ellipse
        cx="300"
        cy="310"
        rx="235"
        ry="220"
        fill="rgba(0, 0, 0, 0.08)"
        filter="url(#dropShadow)"
      />

      <g className="pineapple-core">

      {/* Main circular body */}
      <circle
        cx="300"
        cy="300"
        r="240"
        fill="url(#fleshGradient)"
      />

      {/* Outer rim shading for depth */}
      <circle
        cx="300"
        cy="300"
        r="240"
        fill="url(#outerRing)"
      />

      {/* Faint sunbeam fiber lines radiating from center - very subtle */}
      {Array.from({ length: 48 }).map((_, i) => {
        const angle = (i * 360) / 48;
        const radians = ((angle - 90) * Math.PI) / 180;

        const innerRadius = 65;
        const outerRadius = 240;

        const x1 = 300 + innerRadius * Math.cos(radians);
        const y1 = 300 + innerRadius * Math.sin(radians);
        const x2 = 300 + outerRadius * Math.cos(radians);
        const y2 = 300 + outerRadius * Math.sin(radians);

        return (
          <line
            key={`sunbeam-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#sunbeamGradient)"
            strokeWidth="2"
            opacity="0.4"
          />
        );
      })}

      {/* Create realistic radial segments */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const nextAngle = ((i + 1) * 360) / 24;
        const radians1 = ((angle - 90) * Math.PI) / 180;
        const radians2 = ((nextAngle - 90) * Math.PI) / 180;

        const innerRadius = 75;
        const outerRadius = 240;

        const x1Inner = 300 + innerRadius * Math.cos(radians1);
        const y1Inner = 300 + innerRadius * Math.sin(radians1);
        const x1Outer = 300 + outerRadius * Math.cos(radians1);
        const y1Outer = 300 + outerRadius * Math.sin(radians1);

        const x2Inner = 300 + innerRadius * Math.cos(radians2);
        const y2Inner = 300 + innerRadius * Math.sin(radians2);
        const x2Outer = 300 + outerRadius * Math.cos(radians2);
        const y2Outer = 300 + outerRadius * Math.sin(radians2);

        return (
          <path
            key={`segment-${i}`}
            d={`M ${x1Inner} ${y1Inner} L ${x1Outer} ${y1Outer} L ${x2Outer} ${y2Outer} L ${x2Inner} ${y2Inner} Z`}
            fill={
              i % 2 === 0
                ? "rgba(230, 184, 0, 0.08)"
                : "rgba(255, 235, 153, 0.06)"
            }
          />
        );
      })}

      {/* Radial fiber lines - more prominent */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const radians = ((angle - 90) * Math.PI) / 180;

        const innerRadius = 75;
        const outerRadius = 238;

        const x1 = 300 + innerRadius * Math.cos(radians);
        const y1 = 300 + innerRadius * Math.sin(radians);
        const x2 = 300 + outerRadius * Math.cos(radians);
        const y2 = 300 + outerRadius * Math.sin(radians);

        return (
          <line
            key={`fiber-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(204, 153, 51, 0.25)"
            strokeWidth="1.5"
          />
        );
      })}

      {/* Concentric texture rings for realistic fiber pattern */}
      {[220, 200, 180, 160, 140, 120, 100, 85].map(
        (radius, i) => (
          <circle
            key={`ring-${i}`}
            cx="300"
            cy="300"
            r={radius}
            fill="none"
            stroke={
              radius > 140
                ? "rgba(230, 184, 0, 0.15)"
                : "rgba(204, 153, 51, 0.2)"
            }
            strokeWidth={radius > 180 ? "0.8" : "1"}
            strokeDasharray={radius > 160 ? "4 6" : "3 5"}
            opacity="0.6"
          />
        ),
      )}

      {/* Cell-like patterns for realistic texture */}
      {Array.from({ length: 8 }).map((_, ring) => {
        const baseRadius = 90 + ring * 18;
        const pointsInRing = 12 + ring * 2;

        return Array.from({ length: pointsInRing }).map(
          (_, i) => {
            const angle =
              (i * 360) / pointsInRing + (ring % 2) * 7.5;
            const radians = (angle * Math.PI) / 180;
            const randomOffset = Math.sin(i * 2.3 + ring) * 3;
            const radius = baseRadius + randomOffset;
            const cx = 300 + radius * Math.cos(radians);
            const cy = 300 + radius * Math.sin(radians);

            return (
              <g key={`cell-${ring}-${i}`}>
                {/* Seed pockets */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="3.5"
                  fill="rgba(204, 153, 51, 0.15)"
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r="1.5"
                  fill="rgba(153, 102, 51, 0.4)"
                />
              </g>
            );
          },
        );
      })}

      {/* Add subtle highlights for glossiness */}
      {Array.from({ length: 40 }).map((_, i) => {
        const angle = Math.random() * 360;
        const radians = (angle * Math.PI) / 180;
        const radius = 80 + Math.random() * 140;
        const cx = 300 + radius * Math.cos(radians);
        const cy = 300 + radius * Math.sin(radians);
        const size = Math.random() * 8 + 3;

        return (
          <ellipse
            key={`highlight-${i}`}
            cx={cx}
            cy={cy}
            rx={size}
            ry={size * 0.6}
            fill="#FFFFFF"
            opacity={Math.random() * 0.15 + 0.05}
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        );
      })}

      {/* Noise texture overlay */}
      <circle
        cx="300"
        cy="300"
        r="240"
        fill="url(#noiseTexture)"
        opacity="0.3"
      />

      {/* Center hole rim with gradient - now with softened edges */}
      <circle
        cx="300"
        cy="300"
        r="75"
        fill="url(#holeGradient)"
        filter="url(#softenFilter)"
      />

      {/* Hole shadow layer */}
      <circle
        cx="300"
        cy="300"
        r="75"
        fill="url(#holeShadow)"
      />

      {/* Texture detail around hole rim - softened */}
      {Array.from({ length: 48 }).map((_, i) => {
        const angle = (i * 360) / 48;
        const radians = (angle * Math.PI) / 180;
        const radius = 72 + Math.sin(i * 0.5) * 2;
        const cx = 300 + radius * Math.cos(radians);
        const cy = 300 + radius * Math.sin(radians);

        return (
          <circle
            key={`rim-detail-${i}`}
            cx={cx}
            cy={cy}
            r="0.8"
            fill="rgba(153, 102, 51, 0.3)"
            opacity="0.6"
          />
        );
      })}

      {/* White center hole */}
      <circle cx="300" cy="300" r="60" fill="white" />

      {/* Inner hole shadow detail - softened */}
      <circle
        cx="300"
        cy="300"
        r="60"
        fill="none"
        stroke="rgba(184, 134, 63, 0.25)"
        strokeWidth="8"
        filter="url(#softenFilter)"
      />

      {/* Subtle inner rim highlight */}
      <circle
        cx="300"
        cy="300"
        r="63"
        fill="none"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="2"
      />

      {/* Outer edge definition */}
      <circle
        cx="300"
        cy="300"
        r="240"
        fill="none"
        stroke="rgba(204, 153, 51, 0.3)"
        strokeWidth="2"
      />
      </g>
      </svg>
    </div>
  );
}
