// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhPhoneFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhPhoneFillIcon(props: PhPhoneFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.069 17.698l-.329.32s-.782.76-2.916-1.314-1.352-2.834-1.352-2.834l.206-.201c.511-.496.56-1.292.114-1.874l-.91-1.188c-.552-.72-1.617-.815-2.25-.201L3.5 11.507c-.313.305-.522.699-.497 1.136.065 1.12.584 3.53 3.475 6.34 3.068 2.981 5.946 3.1 7.122 2.992.373-.034.696-.218.957-.473l1.026-.996c.693-.673.498-1.827-.389-2.298l-1.38-.733c-.581-.309-1.29-.219-1.744.223z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhPhoneFillIcon;
/* prettier-ignore-end */
