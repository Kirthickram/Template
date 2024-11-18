// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Component1041IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Component1041Icon(props: Component1041IconProps) {
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

      <path
        d={
          "M8.997 18.124c-1.357 0-2.594-.328-3.71-.985a7.555 7.555 0 01-2.693-2.692 7.116 7.116 0 01-1.018-3.71 7.12 7.12 0 011.018-3.71 7.556 7.556 0 012.693-2.693c1.116-.657 2.353-.985 3.71-.985.832 0 1.642.142 2.43.427.788.284 1.51.668 2.167 1.15l3.086-3.022a.657.657 0 01.558-.262.8.8 0 01.591.23.8.8 0 01.23.59.66.66 0 01-.263.559l-3.02 3.086a8.558 8.558 0 011.149 2.167 7.1 7.1 0 01.427 2.43 7.364 7.364 0 01-.985 3.743 7.223 7.223 0 01-2.693 2.692 7.236 7.236 0 01-3.677.985zm0-1.641c1.05 0 2.014-.263 2.89-.788a5.769 5.769 0 002.068-2.102 5.632 5.632 0 00.755-2.856 5.812 5.812 0 00-.755-2.89 5.453 5.453 0 00-2.069-2.101 5.694 5.694 0 00-2.89-.755 5.7 5.7 0 00-2.889.755 5.692 5.692 0 00-2.101 2.101 5.624 5.624 0 00-.788 2.89c0 1.029.263 1.98.788 2.856a6.036 6.036 0 002.101 2.102 5.511 5.511 0 002.89.788z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component1041Icon;
/* prettier-ignore-end */
