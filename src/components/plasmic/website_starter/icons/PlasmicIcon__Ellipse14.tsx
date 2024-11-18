// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse14Icon(props: Ellipse14IconProps) {
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

      <g filter={"url(#2qI2hHt7TOqca)"}>
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
          id={"2qI2hHt7TOqca"}
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
            result={"effect1_foregroundBlur_4623_12569"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse14Icon;
/* prettier-ignore-end */