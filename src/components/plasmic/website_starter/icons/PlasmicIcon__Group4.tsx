// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.305 4.39a1.695 1.695 0 100-3.39 1.695 1.695 0 000 3.39zM11 4.39A1.695 1.695 0 1011 1a1.695 1.695 0 000 3.39zm-8.305 0a1.695 1.695 0 100-3.39 1.695 1.695 0 000 3.39zm0 16.61a1.695 1.695 0 100-3.39 1.695 1.695 0 000 3.39zM11 21a1.695 1.695 0 100-3.39A1.695 1.695 0 0011 21z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19.305 4.39v4.746c0 .936-.759 1.695-1.695 1.695H2.695v6.78m0-6.781V4.39m8.305 0v13.22M19.305 21a1.695 1.695 0 100-3.39 1.695 1.695 0 000 3.39zm0-6.78v3.39"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
