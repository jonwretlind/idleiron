import React from 'react';
//import config from '../../config';
//import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
//import { FormattedMessage } from 'react-intl';
import {
  LayoutSingleColumn,
  LayoutBanner,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  //ExternalLink,
  //NamedLink,
  SideNav,
} from '../../components';

import css from './HowItWorksPage.css';
import image from './default-7f90b47ba0369f4d8a979491ad6478da4f409e13f1e077aae3c4908d9f021627.jpg';

const HowItWorksPage = () => {
  //const { siteTwitterHandle, siteFacebookPage } = config;
  //const siteTwitterPage = twitterPageURL(siteTwitterHandle);

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
        '@type': 'AboutPage',
        description: 'About Idle Iron',
        name: 'About page',
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
              <h2>How it works</h2>
              <p>
              Here you can find information about how Idle Iron works.
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

export default HowItWorksPage;
