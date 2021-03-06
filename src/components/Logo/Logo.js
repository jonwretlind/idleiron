import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
import IconLogo from './IconLogo';
//import LogoImage from './saunatime-logo.png';
import css from './Logo.css';

const Logo = props => {
  const { className, format } = props;
  const mobileClasses = classNames(css.logoMobile, className);

  if (format === 'desktop') {
    return <IconLogo alt={config.siteTitle} />;
   // return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />;
  }

  return <IconLogo className={mobileClasses}/>;
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
