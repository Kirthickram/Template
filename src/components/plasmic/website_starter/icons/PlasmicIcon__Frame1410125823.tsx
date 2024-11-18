// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1410125823IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1410125823Icon(props: Frame1410125823IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M13.484 20.987L6 13.492 13.484 6m14.24 7.493H7.679"}
        stroke={"currentColor"}
        strokeWidth={"2.455"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Frame1410125823Icon;
/* prettier-ignore-end */
