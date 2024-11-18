// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsStar2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsStar2Icon(props: IconsStar2IconProps) {
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
          "M8.741 12.948l4.503 2.717-1.195-5.122 3.978-3.446-5.238-.444-2.048-4.83-2.047 4.83-5.238.444 3.978 3.446-1.195 5.122 4.502-2.717z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsStar2Icon;
/* prettier-ignore-end */
