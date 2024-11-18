// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.014 16.959c-.037-4.029 3.351-5.989 3.506-6.08-1.919-2.754-4.893-3.13-5.938-3.16-2.497-.259-4.92 1.471-6.193 1.471-1.297 0-3.257-1.446-5.369-1.404-2.717.042-5.26 1.59-6.654 3.995-2.877 4.904-.731 12.11 2.026 16.074 1.379 1.941 2.99 4.109 5.1 4.032 2.063-.083 2.834-1.294 5.324-1.294 2.467 0 3.191 1.294 5.342 1.246 2.215-.035 3.61-1.95 4.94-3.909 1.594-2.225 2.234-4.416 2.259-4.529-.052-.017-4.301-1.613-4.343-6.442zM17.95 5.111C19.06 3.745 19.82 1.886 19.61 0c-1.606.07-3.615 1.094-4.772 2.43-1.024 1.177-1.938 3.107-1.702 4.922 1.805.133 3.658-.896 4.816-2.24z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
