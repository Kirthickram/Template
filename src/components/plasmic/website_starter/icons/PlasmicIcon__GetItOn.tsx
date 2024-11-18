// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GetItOnIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GetItOnIcon(props: GetItOnIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.161 3.891c0-.835-.254-1.503-.754-2.002C5.832 1.298 5.083 1 4.164 1c-.877 0-1.626.302-2.24.899C1.306 2.504 1 3.246 1 4.135c0 .889.307 1.631.923 2.231.615.602 1.364.904 2.241.904.437 0 .854-.089 1.251-.254.396-.166.719-.391.953-.668l-.531-.528c-.408.474-.963.707-1.673.707-.64 0-1.194-.22-1.666-.663-.466-.445-.7-1.021-.7-1.729 0-.707.234-1.289.7-1.734a2.369 2.369 0 011.666-.663c.68 0 1.251.224 1.702.668.297.294.466.699.51 1.216H4.165v.723h2.952c.035-.156.045-.308.045-.454v0zm4.682 2.505H9.071v-1.9h2.5v-.722h-2.5v-1.9h2.772v-.737H8.286v5.995h3.557v-.736zm3.304-5.259h-.784v5.26h-1.7v.736h4.186v-.737h-1.702V1.138v0zm4.732 0v5.995h.783V1.139h-.783zm4.256 0h-.778v5.26H21.65v.736h4.192v-.737h-1.707V1.138zm9.633.772c-.6-.607-1.345-.909-2.232-.909-.893 0-1.637.302-2.238.909-.599.605-.897 1.347-.897 2.226s.298 1.621.897 2.226c.601.607 1.345.909 2.238.909.882 0 1.627-.302 2.227-.914.605-.61.903-1.347.903-2.221 0-.879-.298-1.621-.898-2.226zm-3.89.502a2.26 2.26 0 011.658-.673c.65 0 1.205.224 1.652.673.45.449.68 1.025.68 1.724 0 .699-.23 1.275-.68 1.724-.447.449-1.002.673-1.652.673a2.26 2.26 0 01-1.657-.673c-.451-.449-.68-1.025-.68-1.724 0-.699.229-1.275.68-1.724v0zm5.889-1.274v5.995h.952l2.962-4.662h.034l-.034 1.153v3.51h.783V1.138h-.818l-3.1 4.892h-.035l.034-1.158V1.138h-.778v0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".16"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default GetItOnIcon;
/* prettier-ignore-end */
