// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer13Icon(props: Layer13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.034 0l5.533 7.4L0 13.414h1.253L6.128 8.15l3.938 5.267h4.264L8.487 5.6 13.669 0h-1.254L7.927 4.85 4.3 0H.035zm1.843.923h1.959l8.65 11.57h-1.959L1.877.922z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer13Icon;
/* prettier-ignore-end */
