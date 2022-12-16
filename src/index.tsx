import { createElement, useEffect, useRef, type FC } from 'react';
import Odometer from 'odometer';

export interface ReactOdometerProps {
  /**
   * Count is a simpler animation method which just increments the value,  use it when you're looking for something more
   * subtle.
   */
  animation?: 'count';
  /**
   * Change how long the javascript expects the CSS animation to take.
   * @default 2000
   */
  duration?: number;
  /**
   * Change how digit groups are formatted, and how many digits are shown after the decimal point.
   * (,ddd)    -  12,345,678
   * (,ddd).dd -  12,345,678.09
   * (.ddd),dd -  12.345.678,09
   * ( ddd),dd -  12 345 678,09
   * d         -  12345678
   */
  format?: string;
  /**
   * Change the selector used to automatically find things to be animated
   */
  selector?: string;
  /**
   * Specify the theme (if you have more than one theme css file on the page).
   * Will add CSS class .odometer-theme-{prop value} to wrapper `div`.
   */
  theme?: string;
  /**
   * Current value. Change it to run animation.
   */
  value: number;
}

const ReactOdometer: FC<ReactOdometerProps> = ({ value, ...options }) => {
  const node = useRef();
  const odometer = useRef(
    new Odometer({
      el: node.current,
      auto: false,
      value,
      ...options,
    }),
  );

  useEffect(() => {
    odometer.current.update(value);
  }, [value]);

  return createElement('div', {
    ref: node,
  });
};

export default ReactOdometer;