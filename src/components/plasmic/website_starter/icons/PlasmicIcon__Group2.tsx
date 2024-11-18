// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.144 0H3.72A3.724 3.724 0 000 3.72v6.795a3.724 3.724 0 003.72 3.72h7.424c2.05 0 3.72-1.669 3.72-3.72V3.72A3.724 3.724 0 0011.143 0zM1.312 3.72A2.41 2.41 0 013.72 1.314h7.424A2.41 2.41 0 0113.55 3.72v6.794a2.41 2.41 0 01-2.407 2.408H3.72a2.41 2.41 0 01-2.408-2.408V3.72z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.432 10.578a3.464 3.464 0 003.46-3.461 3.464 3.464 0 00-3.46-3.461 3.464 3.464 0 00-3.46 3.46 3.464 3.464 0 003.46 3.462zm0-5.609a2.15 2.15 0 012.147 2.149 2.15 2.15 0 01-2.147 2.148 2.15 2.15 0 01-2.148-2.148 2.15 2.15 0 012.148-2.149zm3.78-.754a.933.933 0 000-1.865.933.933 0 000 1.865z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
