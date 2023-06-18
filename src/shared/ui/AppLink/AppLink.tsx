import { classNames } from "helpers/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMERY = "primery",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMERY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
