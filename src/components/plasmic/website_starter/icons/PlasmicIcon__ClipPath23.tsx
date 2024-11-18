// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClipPath23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClipPath23Icon(props: ClipPath23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 24h24V0H0v24z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default ClipPath23Icon;
/* prettier-ignore-end */