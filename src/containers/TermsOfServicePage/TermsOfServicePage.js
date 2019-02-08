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

import css from './TermsOfServicePage.css';
import image from './default-7f90b47ba0369f4d8a979491ad6478da4f409e13f1e077aae3c4908d9f021627.jpg';

const TermsOfServicePage = () => {
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
        '@type': 'TermsOfServicePage',
        description: 'About Idle Iron',
        name: 'Terms of Service page',
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
              <h2>Idle Iron terms of service</h2>
              <p>The general terms below apply also to the use of Idle Iron.</p>
              <p>Idle Iron is a social media service that allows its users to change favors and items and communicate with each other. The Idle Iron -service may only be used in accordance with these terms of use. The service provider reserves the right to change these terms of use if required. Valid terms of use can be found from Idle Iron's website.
              </p>
              <h3>Rights of Content</h3>
              <p>
              The users themselves retain the right to all text, pictures and other content that they create in the service. The users allow others to utilize the content in accordance with the nature of the service and furthermore allow the service provider to file information and data and make changes that are necessary for the service or the study, however other rights are not transferred from the users, unless specifically otherwise agreed. The responsibility of the content lies with the user, who has produced it to the service. The service provider has the right to remove any material when it deems it necessary.
              </p>
              <h3>Disclaimer</h3>
              <p>
              No guarantees of the functioning of the Idle Iron service are given. The users are themselves responsible for their actions in the service and they should estimate the reliability of other users before dealing with them. The service provider can under no circumstances be liable for damage that is caused to the user. The user may not store any information or data in the service, and expect it to remain there.
              </p>
              <h3>The Removal of a User</h3>
              <p>
              The service provider has the right to remove any users from Idle Iron and terminate their right of use of the service without any specific reason and without being liable for compensation.
              </p>
              <h3>Applicable Jurisdiction</h3>
              <p>
              The jurisdiction that is applicable in this service and these terms of use is that of Finland, unless something else is required by binding law.
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

export default TermsOfServicePage;
