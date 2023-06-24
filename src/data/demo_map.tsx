import { useState } from "react";

const MapSVG = () => {
  //TODO: Convert this to dynamically import locations
  const [rollovers, setRollovers] = useState({
    "32NW": 0,
    "33NW": 0,
    "39NW": 0,
    "42NW": 0,
    "49NW": 0,
    "50NW": 0,
    "51NW": 0,
    "52NW": 0,
    "54NW": 0,
    "55NW": 0,
    "56NW": 0,
    "57NW": 0,
    "58NW": 0,
    "70NW": 0,
    "72NW": 0,
    "96NW": 0,
  });

  return (
    <svg
      version="1.1"
      width="962"
      height="1253"
      viewBox="0 0 962 1253"
      xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="g15">
        <a transform="translate(92.359379,110.09842)">
          <image
            width="962"
            height="1253"
            preserveAspectRatio="none"
            href={
            }
            id="image17"
            x="-92.337967"
            y="-109.92615"
          />
        </a>
        <a href="http://localhost:5173/directory/49NW">
          <rect
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["49NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            width="153.02774"
            height="205.04926"
            x="56.000214"
            y="97.039322"
            transform="matrix(0.94446317,-0.32861728,0.30499161,0.95235504,0,0)"
            onMouseOver={() => setRollovers({ ...rollovers, "49NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "49NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/54NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["54NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="m 458.08602,504.72374 40.41936,110.89413 88.09346,-26.94624 -41.45575,-111.93052 z"
            id="path4459"
            onMouseOver={() => setRollovers({ ...rollovers, "54NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "54NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/50NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["50NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="M 261.99067,17.588185 326.48068,208.49327 447.76586,165.25565 392.43637,-0.36642051 307.42681,0 Z"
            onMouseOver={() => setRollovers({ ...rollovers, "50NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "50NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/42NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["42NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="M 445.90839,0.25909843 478.8139,83.947891 592.03991,40.937552 575.19851,0 Z"
            onMouseOver={() => setRollovers({ ...rollovers, "42NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "42NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/39NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["39NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="m 826.52399,98.9756 18.91418,66.84739 10.10484,0.2591 18.65509,-12.69582 c 9.60107,9.18833 22.52782,12.83388 38.34656,11.65943 l 12.43673,27.20533 37.31017,-6.73656 v -58.29714 l -15.5459,-53.892475 z"
            onMouseOver={() => setRollovers({ ...rollovers, "39NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "39NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/51NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["51NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="m 315.12164,412.22307 75.48262,-26.01585 29.68007,83.17745 -65.9557,24.9166 -10.62619,-8.06125 z"
            onMouseOver={() => setRollovers({ ...rollovers, "51NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "51NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/52NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["52NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="m 430.5441,376.31386 31.14574,85.00956 83.9103,-30.04648 -28.5808,-77.68115 z"
            onMouseOver={() => setRollovers({ ...rollovers, "52NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "52NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/33NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["33NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="M 600.07196,463.78619 644.11869,589.70802 769.00413,553.95244 722.36642,423.36683 Z"
            onMouseOver={() => setRollovers({ ...rollovers, "33NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "33NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/72NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["72NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="m 912.38705,367.88618 -137.77411,41.77194 30.77933,81.34535 135.57558,-38.84057 z"
            onMouseOver={() => setRollovers({ ...rollovers, "72NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "72NW": 0 })}
          />
        </a>
        <a
          href="http://localhost:5173/directory/55NW"
          transform="translate(93.27543,108.82133)"
        >
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["55NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="m 405.99392,643.43441 41.77194,115.05603 130.4457,-43.23762 -48.36751,-115.05603 z"
            onMouseOver={() => setRollovers({ ...rollovers, "55NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "55NW": 0 })}
          />
        </a>
        <a
          href="http://localhost:5173/directory/32NW"
          transform="translate(92.239036,109.85773)"
        >
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["32NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="M 609.72372,643.43441 650.76282,757.7576 769.48306,715.25282 726.24544,603.86099 Z"
            onMouseOver={() => setRollovers({ ...rollovers, "32NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "32NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/70NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["70NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="m 905.28986,614.58144 -66.32919,25.90984 62.18362,162.71381 61.14722,-23.31886 v -16.5823 z"
            onMouseOver={() => setRollovers({ ...rollovers, "70NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "70NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/57NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["57NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="M 750.42917,915.31839 883.07339,865.4852 920.44828,968.81578 788.5369,1015.7176 Z"
            onMouseOver={() => setRollovers({ ...rollovers, "57NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "57NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/58NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["58NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="m 806.85792,1047.2298 26.38228,75.4826 90.13944,6.5956 20.51955,-5.1299 -2.19853,-75.4827 -17.58818,-46.9018 z"
            onMouseOver={() => setRollovers({ ...rollovers, "58NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "58NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/56NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["56NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="m 659.55689,1068.4822 98.93353,-41.772 -32.97785,-68.88703 -6.59557,3.6642 -14.65681,-32.97784 -91.60513,35.17636 c -16.57354,6.61434 -21.96424,18.82009 -7.32841,41.03911 z"
            onMouseOver={() => setRollovers({ ...rollovers, "56NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "56NW": 0 })}
          />
        </a>
        <a href="http://localhost:5173/directory/96NW">
          <path
            style={{
              fill: "#0000ff",
              fillOpacity: 0.497992,
              opacity: rollovers["96NW"],
              stroke: "#000000",
              strokeWidth: "1px",
              strokeLinecap: "butt",
              strokeLineJoin: "miter",
              strokeOpacity: 1,
            }}
            d="M -2.9313639,857.42395 C 49.167105,832.95192 107.22541,826.35938 167.08774,825.17895 l 215.45525,-48.36751 c 18.33135,25.15055 31.98329,54.98051 42.50478,87.94092 34.94445,88.77735 72.69055,173.35224 123.11729,238.90614 l -130.4457,-13.1911 -7.32841,139.2398 252.0973,17.5882 8.79409,5.8627 -671.26092792,0.014 z"
            onMouseOver={() => setRollovers({ ...rollovers, "96NW": 1 })}
            onMouseOut={() => setRollovers({ ...rollovers, "96NW": 0 })}
          />
        </a>
      </g>
    </svg>
  );
};

export { MapSVG };