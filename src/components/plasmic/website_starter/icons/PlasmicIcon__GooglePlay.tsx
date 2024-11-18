// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GooglePlayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GooglePlayIcon(props: GooglePlayIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 87 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.525 12.325c-2.386 0-4.335-1.787-4.335-4.254 0-2.446 1.949-4.252 4.335-4.252 2.391 0 4.34 1.806 4.34 4.252 0 2.466-1.949 4.254-4.34 4.254zm0-6.831c-1.31 0-2.435 1.064-2.435 2.577 0 1.534 1.126 2.579 2.435 2.579 1.31 0 2.44-1.045 2.44-2.579 0-1.513-1.13-2.577-2.44-2.577zm-9.459 6.831c-2.391 0-4.335-1.787-4.335-4.254 0-2.446 1.944-4.252 4.335-4.252 2.39 0 4.335 1.806 4.335 4.252 0 2.466-1.945 4.254-4.335 4.254zm0-6.831c-1.31 0-2.44 1.064-2.44 2.577 0 1.534 1.13 2.579 2.44 2.579s2.436-1.045 2.436-2.579c0-1.513-1.127-2.577-2.436-2.577zM6.81 11.02V9.214h4.385c-.128-1.01-.471-1.753-.997-2.27-.64-.625-1.637-1.319-3.388-1.319a4.776 4.776 0 00-4.81 4.8c0 2.656 2.113 4.8 4.811 4.8 1.46 0 2.52-.561 3.304-1.289l1.294 1.274c-1.096 1.03-2.553 1.821-4.598 1.821-3.7 0-6.81-2.963-6.81-6.606s3.11-6.606 6.81-6.606c2 0 3.502.645 4.683 1.855 1.21 1.191 1.588 2.866 1.588 4.218 0 .42-.036.807-.1 1.13h-6.17zm46.027-1.4c-.357.951-1.458 2.705-3.7 2.705-2.223 0-4.073-1.724-4.073-4.254 0-2.382 1.831-4.252 4.286-4.252a4.299 4.299 0 013.601 1.885l-1.473.966c-.491-.707-1.16-1.176-2.128-1.176-.961 0-1.651.434-2.093 1.288l5.78 2.354-.2.484zm-5.892-1.416c-.05 1.64 1.294 2.48 2.256 2.48.755 0 1.395-.371 1.608-.903l-3.864-1.577zm-4.697-4.127h1.9v12.5h-1.9v-12.5zm-3.111 7.3h-.064c-.427.498-1.24.948-2.272.948-2.163 0-4.142-1.87-4.142-4.268 0-2.383 1.979-4.238 4.142-4.238 1.031 0 1.845.454 2.272.966h.063v-.61c0-1.626-.882-2.5-2.306-2.5-1.16 0-1.88.825-2.177 1.519L33 2.515C33.477 1.387 34.738 0 36.83 0c2.227 0 4.106 1.29 4.106 4.429v7.637h-1.8v-.689zm-2.173-5.883c-1.31 0-2.405 1.079-2.405 2.563 0 1.5 1.096 2.593 2.405 2.593 1.29 0 2.307-1.094 2.307-2.593 0-1.485-1.017-2.563-2.307-2.563zM61.73 16.578h-4.544v-12.5h1.895v4.736h2.649c2.104 0 4.167 1.498 4.167 3.882 0 2.383-2.068 3.882-4.167 3.882zm.05-6.025h-2.7v4.286h2.7a2.186 2.186 0 002.221-2.143c0-.967-.807-2.143-2.222-2.143zm11.711 1.796c-1.369 0-2.792-.595-3.378-1.914l1.681-.694c.362.694 1.028.919 1.731.919.983 0 1.98-.581 1.995-1.607V8.92c-.343.195-1.077.484-1.98.484-1.81 0-3.655-.981-3.655-2.812 0-1.675 1.483-2.754 3.15-2.754 1.275 0 1.979.566 2.42 1.225h.065v-.966h1.83v4.795c0 2.216-1.681 3.456-3.859 3.456zm-.229-6.85c-.62 0-1.483.302-1.483 1.059 0 .967 1.077 1.338 2.01 1.338.834 0 1.225-.181 1.731-.42-.148-1.157-1.16-1.977-2.258-1.977zm10.755 6.576L81.84 6.656h-.065l-2.251 5.419H77.48l3.383-7.572-1.93-4.214h1.979l5.213 11.786h-2.108zM66.94 4.078h1.9v12.5h-1.9v-12.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GooglePlayIcon;
/* prettier-ignore-end */