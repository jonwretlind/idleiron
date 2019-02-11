import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './LayoutBanner.css';

const LayoutBanner = props => {
  const { className, rootClassName, children } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

LayoutBanner.defaultProps = {
  className: null,
  rootClassName: null,
  children: null,
};

const { node, string } = PropTypes;

LayoutBanner.propTypes = {
  children: node,
  className: string,
  rootClassName: string,
};

export default LayoutBanner;
