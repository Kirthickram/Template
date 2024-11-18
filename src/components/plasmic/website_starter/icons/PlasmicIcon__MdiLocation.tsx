// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MdiLocationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MdiLocationIcon(props: MdiLocationIconProps) {
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
          "M8 7.667a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334zm0-6.334A4.667 4.667 0 003.333 6C3.333 9.5 8 14.667 8 14.667S12.667 9.5 12.667 6A4.667 4.667 0 008 1.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MdiLocationIcon;
/* prettier-ignore-end */
