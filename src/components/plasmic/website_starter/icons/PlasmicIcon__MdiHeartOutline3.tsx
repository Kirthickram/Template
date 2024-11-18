// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MdiHeartOutline3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MdiHeartOutline3Icon(props: MdiHeartOutline3IconProps) {
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
          "M14.779 22.657l-.122.122-.135-.122c-5.801-5.265-9.636-8.745-9.636-12.275 0-2.443 1.832-4.275 4.274-4.275 1.881 0 3.713 1.221 4.36 2.882h2.273c.647-1.66 2.479-2.882 4.36-2.882 2.443 0 4.275 1.832 4.275 4.275 0 3.53-3.835 7.01-9.65 12.275zm5.374-18.993c-2.125 0-4.165.99-5.496 2.54-1.332-1.55-3.371-2.54-5.497-2.54-3.761 0-6.717 2.944-6.717 6.718 0 4.604 4.153 8.378 10.443 14.082l1.77 1.613 1.772-1.613c6.29-5.704 10.442-9.478 10.442-14.082 0-3.774-2.955-6.718-6.717-6.718z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MdiHeartOutline3Icon;
/* prettier-ignore-end */
