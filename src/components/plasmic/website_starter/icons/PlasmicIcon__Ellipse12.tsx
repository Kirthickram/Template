// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse12Icon(props: Ellipse12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"9.992"}
        cy={"9.992"}
        r={"9.992"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse12Icon;
/* prettier-ignore-end */
