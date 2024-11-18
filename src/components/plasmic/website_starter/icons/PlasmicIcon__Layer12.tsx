// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer12Icon(props: Layer12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M38.25 2.908c8.318 4.295 14 12.858 14 22.729 0 9.87-5.682 18.46-14 22.729V45.43a23.18 23.18 0 007.83-7.577l-7.83-3.12v-4.75l8.59 6.59a22.522 22.522 0 002.8-10.938c0-8.377-4.568-15.74-11.39-19.795V2.908zM26.152 0c4.35 0 8.455 1.04 12.098 2.908v2.935c-3.344-1.975-7.26-3.148-11.39-3.283l2.99 20.995 8.4 6.43v4.748l-12.152-4.829-12.07 4.855v-4.722l8.454-6.483L25.445 2.56c-4.187.134-8.074 1.308-11.418 3.281V2.908C17.643 1.04 21.775 0 26.153 0zM38.25 48.366a26.44 26.44 0 01-12.098 2.933 26.702 26.702 0 01-12.124-2.907v-2.961c3.534 2.107 7.693 3.307 12.124 3.307 4.405 0 8.537-1.2 12.098-3.307v2.935zm-24.222.026C5.68 44.097 0 35.507 0 25.636c0-9.87 5.681-18.433 14.028-22.728v2.935C7.177 9.898 2.61 17.233 2.61 25.637c0 3.974 1.033 7.736 2.827 10.99l8.59-6.589v4.723l-7.802 3.146a23.164 23.164 0 007.803 7.524v2.961z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer12Icon;
/* prettier-ignore-end */
