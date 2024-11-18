// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G3053IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G3053Icon(props: G3053IconProps) {
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
          "M17.068 16.52c0 2.404-1.34 4.708-4.41 4.708-2.974 0-4.03-2.11-4.03-4.708h8.44zm-5.27 10.085c7.007 0 13.144-2.688 13.144-15.078H8.347c0-3.938 1.629-5.57 4.507-5.57 2.879 0 3.837 2.306 3.837 2.306h8.157c0-3.555-4.893-8.357-12.282-8.262C4.126.001 0 6.244 0 12.68c0 6.437 3.643 13.925 11.798 13.925"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G3053Icon;
/* prettier-ignore-end */
