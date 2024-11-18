// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G3061IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G3061Icon(props: G3061IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.275 2.66a2.379 2.379 0 004.758 0A2.384 2.384 0 002.657.277 2.387 2.387 0 00.275 2.66zM0 2.66A2.658 2.658 0 012.657 0a2.661 2.661 0 012.654 2.66 2.661 2.661 0 01-2.654 2.66A2.658 2.658 0 010 2.66"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G3061Icon;
/* prettier-ignore-end */
