// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse13Icon(props: Ellipse13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 260 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#4MXfO6XUlc3Ta)"}>
        <ellipse
          cx={"130"}
          cy={"14"}
          rx={"122"}
          ry={"6"}
          fill={"currentColor"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"4MXfO6XUlc3Ta"}
          x={"0"}
          y={"0"}
          width={"260"}
          height={"28"}
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
            stdDeviation={"4"}
            result={"effect1_foregroundBlur_4623_12568"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse13Icon;
/* prettier-ignore-end */
