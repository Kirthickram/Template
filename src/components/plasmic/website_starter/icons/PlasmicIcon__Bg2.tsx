// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Bg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Bg2Icon(props: Bg2IconProps) {
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
          "M132.063 0H5.079C2.287 0 0 2.251 0 5v30c0 2.749 2.287 5 5.08 5h126.983c2.793 0 5.08-2.251 5.08-5V5c0-2.749-2.287-5-5.08-5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Bg2Icon;
/* prettier-ignore-end */
