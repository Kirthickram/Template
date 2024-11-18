// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Svg2Icon(props: Svg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.654 0H5.443a.418.418 0 100 .837h8.2L.123 14.358a.419.419 0 10.592.592l13.52-13.52v8.2a.418.418 0 10.838 0V.419A.418.418 0 0014.654 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Svg2Icon;
/* prettier-ignore-end */
