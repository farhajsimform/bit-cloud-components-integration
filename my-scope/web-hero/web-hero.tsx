import React, { ReactNode } from 'react';

export type WebHeroProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function WebHero({ children }: WebHeroProps) {
  return (
    <div>
      {children}
    </div>
  );
}
