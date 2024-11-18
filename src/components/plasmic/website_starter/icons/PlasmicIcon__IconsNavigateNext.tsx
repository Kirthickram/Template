// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsNavigateNextIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsNavigateNextIcon(props: IconsNavigateNextIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.668 4.996L7.494 6.17l3.814 3.822-3.814 3.822 1.174 1.174 4.996-4.996-4.996-4.996z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsNavigateNextIcon;
/* prettier-ignore-end */
