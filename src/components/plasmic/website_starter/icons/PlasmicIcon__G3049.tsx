// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G3049IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G3049Icon(props: G3049IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.898 35.92h8.922V12.485C27.82 8.455 26.091 0 13.718 0 1.343 0 0 7.88 0 12.295v4.321h8.635v-4.224c0-2.593 1.727-4.993 4.987-4.993 3.261 0 5.276 1.824 5.276 4.896V35.92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G3049Icon;
/* prettier-ignore-end */
