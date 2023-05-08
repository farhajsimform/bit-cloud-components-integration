import React, { ComponentType, ReactNode } from 'react';
import classNames from 'classnames';
import { Link } from '@teambit/base-react.navigation.link';
import { Logo } from '@teambit/design.ui.brand.logo';
import { NavigationMenu, NavigationMenuProps, MenuLinkType } from '@teambit/design.ui.navigation.menu';
import { wideColumn } from '@teambit/base-ui.layout.page-frame';

import styles from './header.module.scss';

export type HeaderProps = {
  /**
   * A list of links to be displayed in the header.
   */
  menuLinks?: MenuLinkType[];
  /**
   * An element to override the default logo link.
   */
  logo?: ReactNode;
  /**
   * An element to use to override the icon in the header.
   */
  Icon?: ComponentType<any>;
  /**
   * An element to use to override the link menu in the header.
   */
  Menu?: ComponentType<NavigationMenuProps>;
  /**
   * Widgets to be displayed at the right side of the header (before the plugins)
   */
  badges?: ReactNode[];

  maxWidth?: string | number;

  /**
   * A list of plugins to be displayed in the right side of the header.
   */
  plugins?: ReactNode[];
} & React.HTMLAttributes<HTMLElement>;

export function Header({
  className,
  Menu = NavigationMenu,
  Icon = Logo,
  logo = (
    <Link href="/" className={styles.logoLink}>
      <Icon />
    </Link>
  ),
  menuLinks,
  children,
  maxWidth,
  plugins,
  badges,
  ...rest
}: HeaderProps) {
  return (
    <header {...rest} className={classNames(styles.header, className)}>
      <div style={{ maxWidth }} className={classNames(styles.headerContent, wideColumn)}>
        <div className={styles.left}>
          {logo}
          <Menu links={menuLinks} className={styles.linkMenu} />
        </div>
        <div className={styles.widgets}>
          {badges?.map((badge, key) => (
            <span key={key}>{badge}</span>
          ))}
        </div>
        <div className={styles.plugins}>
          {plugins?.map((plugin, key) => (
            <span key={key}>{plugin}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
