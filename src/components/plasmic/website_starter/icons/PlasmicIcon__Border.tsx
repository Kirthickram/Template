// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BorderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BorderIcon(props: BorderIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 172 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M165.079 48.998c2.94 0 5.332-2.354 5.332-5.248V6.25c0-2.894-2.392-5.248-5.332-5.248H6.349c-2.94 0-5.332 2.354-5.332 5.248v37.5c0 2.894 2.393 5.248 5.332 5.248h158.73zm0 1.002H6.349C2.86 50 0 47.186 0 43.75V6.25C0 2.814 2.859 0 6.35 0h158.729c3.491 0 6.35 2.814 6.35 6.25v37.5c0 3.436-2.859 6.25-6.35 6.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BorderIcon;
/* prettier-ignore-end */
