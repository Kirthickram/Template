// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse11Icon(props: Ellipse11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 702 225"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#yL0OKVOWd7_0a)"}>
        <path
          d={
            "M643.776 120.829c0 5.656-80.105 31.521-266.444 45.393C194.239 160.051 70.511 103.62 58 63.276c5.22-22.068 51.894 30.842 231.191 52.859 185.115 0 338.47-43.605 354.585 4.694z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"yL0OKVOWd7_0a"}
          x={"0"}
          y={"0"}
          width={"701.776"}
          height={"224.222"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"29"}
            result={"effect1_foregroundBlur_4623_12540"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse11Icon;
/* prettier-ignore-end */
