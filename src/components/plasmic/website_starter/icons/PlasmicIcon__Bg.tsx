// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BgIcon(props: BgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 170 49"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M169.524 43.29c0 2.665-2.183 4.823-4.882 4.823H4.888C2.19 48.113 0 45.955 0 43.29V4.83C0 2.165 2.19 0 4.888 0h159.753c2.7 0 4.882 2.166 4.882 4.83l.001 38.46z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BgIcon;
/* prettier-ignore-end */
