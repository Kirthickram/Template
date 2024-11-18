// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G3065IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G3065Icon(props: G3065IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.02 0l-.55 1.304c.175.06.233.104.326.204.121.13.198.335.198.522 0 .47-.362.79-.885.79H0V0h.329v1.221h.8L1.655 0h.366zM.32 1.508v1.005h.78c.327 0 .534-.186.534-.475 0-.327-.22-.53-.58-.53H.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G3065Icon;
/* prettier-ignore-end */
