// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MdiHeartOutlineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MdiHeartOutlineIcon(props: MdiHeartOutlineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.005 17.1H2.443v2.442h8.562v3.664l4.873-4.885-4.873-4.886V17.1zm7.303-1.222v-3.664h8.562V9.77h-8.562V6.107l-4.873 4.885 4.873 4.886z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MdiHeartOutlineIcon;
/* prettier-ignore-end */
