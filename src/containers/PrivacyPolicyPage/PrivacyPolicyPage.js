import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import { FormattedMessage } from 'react-intl';
import {
  LayoutSingleColumn,
  LayoutBanner,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  NamedLink,
  SideNav,
} from '../../components';

import css from './PrivacyPolicyPage.css';
import image from './default-7f90b47ba0369f4d8a979491ad6478da4f409e13f1e077aae3c4908d9f021627.jpg';

const PrivacyPolicyPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

const bannerStyle = {
  backgroundImage: 'url(' + image + ')',
  backgroundSize: 'cover',
}


  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PrivacyPolicyPage',
        description: 'About Idle Iron',
        name: 'Privacy Policy page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutBanner className={css.layoutBannerMain}>
          <div className={css.pageBanner} style={bannerStyle}>
          <div className={css.screened}></div>
            <h2 className={css.pageTitle}>Information about Idle Iron</h2>
          </div>
        </LayoutBanner>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <SideNav />
            </div>

            <div className={css.contentMain}>
              <h2>Privacy Policy</h2>
              <h3>
              Registrar
              </h3>
              <p>
              Idle Iron service.<br />
              <a href="http://www.sharetribe.com/en"></a><a href="www.idleiron.com ">www.idleiron.com</a><br />
              info (at) idleiron.com
              </p>
              <h3>
              Contact person
              </h3>
              <p>Hunter Wylie<br />
              hunter@beyondbluemedia.com
              </p>
              <h3>
              Name of the register
              </h3>
              <p>
              User register of the Idle Iron service
              </p>
              <h3>
              Use of personal details (purpose of register)
              </h3>
              <p>
              Personal details are collected to make communication and use of service possible. Details can be used for communication between service providers and users and also for direct communication between users. Some personal details are visible on the profile page of the user, but those details are voluntary (except name).
              </p>
              <p>
              The handling of personal details is not outsourced, but the register data is stored on a server that is rented from a third party company.
              </p>
              <h3>
              Information content of the register
              </h3>
              <p>
              The following information may be stored in the register:
              </p><ul>
              <li>
              Personal details: Name, email address, phone number, street address
              </li>
              <li>
              Account details: username, password (stored in encrypted format)
              </li>
              <li>
              The description text that the user may write about him/herself
              </li>
              <li>
              The offers and requests the user has posted to the service
              </li>
              <li>
              The given and received feedback and badges
              </li>
              <li>
              Statistical data about service usage, e.g. number times the user has logged in
              </li>
              </ul>
              <p></p>
              <h3>
              Regular sources of information
              </h3>
              <p>
              Personal details are given by the user on registration to the service or when using it later.
              </p>
              <h3>
              Regular handovers of the information
              </h3>
              <p>
              The information may be handed over for research purposes as described in the
              <a href="/en/infos/terms"> Terms of use </a>
              that the user accepts before starting to use the service. The researchers may not publish any research results so that identifying information would be revealed or that any specific user could be detected.
              </p>
              <p>
              Information considering users of a single Idle Iron community may be handed over to the client who has founded that community or to the community administrators appointed by that client.
              </p>
              <h3>
              Transfers of the information outside the EU and the European Economic Area
              </h3>
              <p>
              Information may be stored to a server that may be located inside or outside of the EU and the European Economic Area
              </p>
              <h3>
              Register protection principles
              </h3>
              <p>
              The information is stored on computers. The access to the information is restricted with passwords and physical access to the computers is restricted by the server hosting company.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default PrivacyPolicyPage;
