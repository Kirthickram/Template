// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Component5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Component5Icon(props: Component5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.624 0H6.174a.475.475 0 100 .95h9.303L.14 16.288a.475.475 0 10.671.672L16.15 1.622v9.303a.475.475 0 10.95 0V.475A.475.475 0 0016.624 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component5Icon;
/* prettier-ignore-end */
