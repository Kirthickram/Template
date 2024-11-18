// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsStar3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsStar3Icon(props: IconsStar3IconProps) {
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
          "M8.743 12.948l4.503 2.717-1.195-5.122 3.978-3.446-5.239-.444-2.047-4.83-2.047 4.83-5.239.444 3.978 3.446-1.195 5.122 4.503-2.717z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsStar3Icon;
/* prettier-ignore-end */
