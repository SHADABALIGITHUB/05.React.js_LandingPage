import React from 'react';

const RedSvgBig = (props) => {
    return (
        <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 700 700"
          width={props.width}
          height={props.height}
        >
          <defs>
            <radialGradient id="gggrain-gradient" r="0.4">
              <stop offset="0%" stopColor="hsl(0, 100%, 60%)" />
              <stop offset="50%" stopColor="#ff5555" />
              <stop offset="100%" stopColor="hsla(34, 83%, 49%, 0.00)" />
            </radialGradient>
            <filter
              id="gggrain-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.55"
                numOctaves={2}
                seed={15}
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              />
              <feColorMatrix
                type="saturate"
                values={0}
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="colormatrix"
              />
              <feComponentTransfer
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="colormatrix"
                result="componentTransfer"
              >
                <feFuncR type="linear" slope={3} />
                <feFuncG type="linear" slope={3} />
                <feFuncB type="linear" slope={3} />
              </feComponentTransfer>
              <feColorMatrix
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="componentTransfer"
                result="colormatrix2"
                type="matrix"
                values="1 0 0 0 0
      0 1 0 0 0
      0 0 1 0 0
      0 0 0 23 -15"
              />
            </filter>
          </defs>
          <g>
            <rect width="100%" height="100%" fill="url(#gggrain-gradient)" />
            <rect
              width="50%"
              height="50%"
              fill="transparent"
              filter="url(#gggrain-filter)"
              opacity={1}
              style={{ mixBlendMode: "soft-light" }}
            />
          </g>
        </svg>
      </div>
    );
}
RedSvgBig.defaultProps = {
  width: 600,
  height: 600,
};

export default RedSvgBig;
