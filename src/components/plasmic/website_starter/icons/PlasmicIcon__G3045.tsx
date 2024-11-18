// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G3045IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G3045Icon(props: G3045IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 34"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.155 20.456c-.089-4.895.967-7.488 4.998-7.488 4.024 0 4.601 4.417 4.601 7.778 0 3.364-.763 6.629-4.991 6.629-2.594 0-4.509-2.018-4.608-6.919zM0 0v33.136h8.254v-1.344c0-1.793.723-1.054 1.305-.355.097.117 1.937 2.371 6.08 2.371 4.13 0 10.556-2.88 10.556-13.062 0-7.875-3.834-13.637-10.454-13.637-3.649 0-5.758 1.438-6.24 2.018-.483.573-1.154.672-1.154 0V0H0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G3045Icon;
/* prettier-ignore-end */
