// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Border2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Border2Icon(props: Border2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 138 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M132.063 39.199c2.352 0 4.266-1.884 4.266-4.199V5c0-2.315-1.914-4.199-4.266-4.199H5.079C2.728.801.814 2.685.814 5v30c0 2.315 1.914 4.199 4.265 4.199h126.984zm0 .801H5.079C2.287 40 0 37.749 0 35V5c0-2.749 2.287-5 5.08-5h126.983c2.793 0 5.08 2.251 5.08 5v30c0 2.749-2.287 5-5.08 5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Border2Icon;
/* prettier-ignore-end */
