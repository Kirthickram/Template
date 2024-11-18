// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsStar5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsStar5Icon(props: IconsStar5IconProps) {
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
          "M8.904 12.68l-.162-.097-.161.097-3.87 2.335 1.028-4.4.042-.184-.142-.124L2.22 7.346l4.501-.382.188-.016.073-.174 1.76-4.152 1.76 4.152.073.174.188.016 4.501.382-3.418 2.961-.143.124.043.183 1.027 4.401-3.87-2.335z"
        }
        stroke={"currentColor"}
        strokeWidth={".624"}
      ></path>
    </svg>
  );
}

export default IconsStar5Icon;
/* prettier-ignore-end */
