// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarSeatSvgrepoCom1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarSeatSvgrepoCom1Icon(props: CarSeatSvgrepoCom1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.155.608A1.92 1.92 0 0019.734 0H18.22c-1.115 0-2.18.893-2.372 1.991l-.095.544c-.096.546.033 1.064.363 1.457.33.393.818.61 1.373.61h1.954c.271 0 .534-.054.777-.15l-.207 1.774c-.2-.084-.42-.129-.65-.129h-2.23c-.955 0-1.894.76-2.092 1.695l-1.971 9.293-9.3-.668c-.503-.036-.923.134-1.183.469-.244.313-.315.733-.2 1.183l1.08 4.258C3.703 23.249 4.668 24 5.62 24h11.886c.964 0 1.831-.78 1.933-1.74l1.526-14.383a1.73 1.73 0 00.007-.244l.522-4.46c.074-.192.12-.397.135-.608l.035-.497a1.918 1.918 0 00-.508-1.46z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CarSeatSvgrepoCom1Icon;
/* prettier-ignore-end */
