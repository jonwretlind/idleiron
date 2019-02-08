import React from 'react';
import config from '../../config';
import { FormattedMessage } from 'react-intl';
import {
  NamedLink,
} from '../../components';

import css from './SideNav.css';

const SideNav = () => {
  
    const aboutLink = (
      <NamedLink name="AboutPage" className={css.sideLink}>
          <FormattedMessage id="sideNav.about" />
      </NamedLink>
    );

    const howItWorks = (
      <NamedLink name="HowItWorksPage" className={css.sideLink}>
          <FormattedMessage id="sideNav.howItWorks" />
      </NamedLink>
    );

    const privacyPolicy = (
      <NamedLink name="PrivacyPolicyPage" className={css.sideLink}>
          <FormattedMessage id="sideNav.privacyPolicy" />
      </NamedLink>
    );

    const termsOfService = (
      <NamedLink name="TermsOfServicePage" className={css.sideLink}>
          <FormattedMessage id="sideNav.termsOfService" />
      </NamedLink>
    );

    var icon1 = `${css.ssicon} ${css.infoIcon}`;
    var icon2 = `${css.ssicon} ${css.howIcon}`;
    var icon3 = `${css.ssicon} ${css.privacyIcon}`;
    var icon4 = `${css.ssicon} ${css.termsIcon}`;

    return (
      <ul className={css.sideMenu}>
        <li><div className={icon1}></div>{aboutLink}</li>
        <li><div className={icon2}></div>{howItWorks}</li>
        <li><div className={icon3}></div>{privacyPolicy}</li>
        <li><div className={icon4}></div>{termsOfService}</li>
      </ul>
    );
};

export default SideNav;
