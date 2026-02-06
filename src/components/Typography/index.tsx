import React from "react";
import "./styles.scss";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption"
  | "overline"
  | "subtitle1"
  | "subtitle2";

export type TypographyAlign = "left" | "center" | "right" | "justify";

export type TypographyColor =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "error"
  | "disabled";

export interface TypographyProps {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  color?: TypographyColor;
  component?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  gutterBottom?: boolean;
  noWrap?: boolean;
}

const variantToComponent: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
  subtitle1: "h6",
  subtitle2: "h6",
};

export function Typography({
  variant = "body1",
  align = "left",
  color = "default",
  component,
  className = "",
  children,
  gutterBottom = false,
  noWrap = false,
}: TypographyProps): JSX.Element {
  const Component = component || variantToComponent[variant];

  const classes = [
    "typography",
    `typography--${variant}`,
    `typography--align-${align}`,
    `typography--color-${color}`,
    gutterBottom && "typography--gutter-bottom",
    noWrap && "typography--no-wrap",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
}
