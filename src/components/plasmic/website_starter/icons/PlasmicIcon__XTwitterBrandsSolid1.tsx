// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XTwitterBrandsSolid1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XTwitterBrandsSolid1Icon(props: XTwitterBrandsSolid1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.443 1.781h2.62L11.34 8.32l6.731 8.899h-5.27l-4.13-5.396-4.72 5.396H1.328l6.12-6.995L.994 1.78h5.404l3.73 4.932 4.315-4.932zm-.92 13.872h1.45L5.608 3.266H4.05l9.474 12.387z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default XTwitterBrandsSolid1Icon;
/* prettier-ignore-end */
