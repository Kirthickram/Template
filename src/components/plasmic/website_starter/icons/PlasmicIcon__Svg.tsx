// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SvgIcon(props: SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.61 0H5.056a.389.389 0 100 .778h7.617L.114 13.336a.389.389 0 10.55.55L13.222 1.328v7.616a.389.389 0 10.778 0V.39a.389.389 0 00-.39-.39z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SvgIcon;
/* prettier-ignore-end */
