// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G3057IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G3057Icon(props: G3057IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.07 16.52c0 2.404-1.341 4.708-4.411 4.708-2.973 0-4.031-2.11-4.031-4.708h8.443zM11.8 26.605c7.006 0 13.142-2.688 13.142-15.078H8.347c0-3.938 1.631-5.57 4.511-5.57 2.876 0 3.836 2.306 3.836 2.306h8.157c0-3.555-4.894-8.357-12.28-8.262C4.125.001 0 6.244 0 12.68c0 6.437 3.647 13.925 11.8 13.925"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G3057Icon;
/* prettier-ignore-end */
