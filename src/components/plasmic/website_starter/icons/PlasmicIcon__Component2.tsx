// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Component2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Component2Icon(props: Component2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.985 9.014c0-2.492-.733-4.715-2.199-6.669a.803.803 0 00-.586-.33.911.911 0 00-.66.183.777.777 0 00-.33.55.853.853 0 00.184.623c1.27 1.661 1.905 3.542 1.905 5.643 0 1.66-.415 3.2-1.246 4.617A9.208 9.208 0 0115.646 17a9.164 9.164 0 01-4.654 1.246 9.164 9.164 0 01-4.653-1.245A9.208 9.208 0 012.93 13.63a8.969 8.969 0 01-1.246-4.617c0-2.101.636-3.982 1.906-5.643a.854.854 0 00.183-.623.777.777 0 00-.33-.55.912.912 0 00-.66-.183.803.803 0 00-.586.33C.733 4.299 0 6.522 0 9.014c0 1.954.489 3.774 1.466 5.46a10.803 10.803 0 003.994 3.993c1.685.977 3.53 1.466 5.532 1.466 2.003 0 3.848-.489 5.533-1.466a10.803 10.803 0 003.994-3.994 10.701 10.701 0 001.466-5.46zm-5.57 5.13a.696.696 0 00.293-.587.697.697 0 00-.293-.586l-2.784-2.858c.244-.44.366-.904.366-1.392 0-.83-.293-1.54-.88-2.126a2.896 2.896 0 00-2.125-.879c-.83 0-1.539.293-2.125.88a2.895 2.895 0 00-.88 2.125c0 .83.294 1.538.88 2.125.586.586 1.295.88 2.125.88a2.83 2.83 0 001.393-.367l2.858 2.784a.697.697 0 00.586.294c.244 0 .44-.098.586-.293zM12.312 8.72c0 .342-.135.635-.404.879a1.324 1.324 0 01-1.832 0 1.148 1.148 0 01-.403-.88c0-.341.135-.647.403-.915.269-.27.574-.403.916-.403.342 0 .648.134.916.403.27.268.404.574.404.916z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component2Icon;
/* prettier-ignore-end */
