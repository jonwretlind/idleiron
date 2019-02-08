import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '../../components';
import css from './Section2Col.css';

const Section2Col = props => {
  const { options, selectedOptions } = props;
  return (
    <div className={css.Section2Col}>
      <h1 className={css.title}>
        <FormattedMessage id="Section2Col.featuresTitle" />
      </h1>
      <div className={css.columnWrapper}>
        <div className={css.col1}>
        <div className={css.icon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.894 5l1.915-3.246A.5.5 0 0 0 16.378 1h-6.245a.5.5 0 0 0-.43.755L11.63 5M15.254 11c.825.639 4 3.979 4 7.739 0 3.038-3.281 4.261-6.319 4.261s-6.181-1.223-6.181-4.261c0-3.91 3.245-7.245 4-7.739M4.754 4h2a.472.472 0 0 1 .5.5v6a.472.472 0 0 1-.5.5h-2"></path><path d="M10.389 2.911L9.254 4.5a1.343 1.343 0 0 1-1 .5h-1M7.254 9.5c1.965.982 2.819 1.5 4 1.5h4c1 0 1.184-.051 1.5-1 .5-1.5 1-4 1-4 0-.5-.5-1-1.5-1H11.63M13.254 19v1M13.254 14v1M11.254 19h3a1 1 0 0 0 0-2h-2a1 1 0 1 1 0-2h3"></path></g></svg></div>
        <h2><FormattedMessage id="Section2Col.subheadCol1" /></h2>
        <p className={css.textContent}>
        	<FormattedMessage id="Section2Col.textContentCol1" />
        </p>
        <Button className={css.colButton}>Rent Out Your Equipment</Button>
        </div>

        <div className={css.col2}>
        <div className={css.icon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="17.5" r="4"></circle><circle cx="4.5" cy="19" r="2.5"></circle><path d="M1 17v-4a17.255 17.255 0 0 1 5.5-2 22.735 22.735 0 0 1 3-.5l.5 5h2s.5-4.5 6-4.5a5.893 5.893 0 0 1 5 2.5M6.95 19.5h7.589M18.5 4.5l1.575 6.827M7.944 10.725L9.5 4.5M9.5 2.5h9a1 1 0 0 1 1 1V4a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-.5a1 1 0 0 1 1-1zM9.5 10.5l1.5-1M10.5 8.5l1 1.5M12 12.5h1.602M15.418 11.411L16 8.5"></path><circle cx="18" cy="17.5" r="1.5"></circle><path d="M5.5 14.5h4.4"></path></g></svg></div>
        <h2><FormattedMessage id="Section2Col.subheadCol2" /></h2>
        <p className={css.textContent}>
          <FormattedMessage id="Section2Col.textContentCol2" />
        </p>
        <Button className={css.colButton}>Discover Listings In Your Area</Button>
        </div>
      </div>
    </div>
  );
};

export default Section2Col;
