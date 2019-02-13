import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '../../components';
import css from './Section3Col.css';

const Section3Col = props => {
  //const { options, selectedOptions } = props;
  return (
    <div className={css.Section3Col}>
      <h1 className={css.title}>
        <FormattedMessage id="Section3Col.featuresTitle" />
      </h1>
      <div className={css.columnWrapper}>
        <div className={css.col1}>
          <div className={css.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M18.5 2.5h2v21h-18v-21h2"></path><path d="M13.5 2.5c0-1.104-.895-2-2-2-1.104 0-2 .896-2 2h-3v2h10v-2h-3zM18.5 4.5v17h-14v-17M9.5 8.5h6M9.5 11.5h6M9.5 14.5h6M9.5 17.5h6M7 8.5h.5M7 11.5h.5M7 14.5h.5M7 17.5h.5"></path></g></svg>
          </div>
          <h2><FormattedMessage id="Section3Col.subheadCol1" /></h2>
          <p className={css.textContent}>
          	<FormattedMessage id="Section3Col.textContentCol1" />
          </p>
          <Button className={css.colButton}><FormattedMessage id="Section3Col.btn1" /></Button>
        </div>

        <div className={css.col2}>
          <div className={css.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="17.5" cy="17.5" r="4"></circle><path d="M20.328 20.328L23.5 23.5M3.539 5.5l2.606-5M17.434 5.5l-2.605-5M18.634 11.282l.537-2.782H1.8l1.48 7.656A1.713 1.713 0 0 0 4.989 17.5H10"></path><rect x=".5" y="5.5" width="20" height="3" rx="1" ry="1"></rect><path d="M10.5 11v3.039M6.592 11l.434 3.039"></path></g></svg>
          </div>
          <h2><FormattedMessage id="Section3Col.subheadCol2" /></h2>
          <p className={css.textContent}>
            <FormattedMessage id="Section3Col.textContentCol2" />
          </p>
          <Button className={css.colButton}><FormattedMessage id="Section3Col.btn2" /></Button>
        </div>

        <div className={css.col3}>
          <div className={css.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M2 12.5h20a19.46 19.46 0 0 0 .915 7.774L23 20.5H1l.085-.226A19.46 19.46 0 0 0 2 12.5zM5.5 16.92h13M16 6.5v-4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4M3 20.5v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1M17 20.5v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1M10 8.516V10.5M12 8.516V10.5M14 8.516V10.5M8 3.5h8"></path><path d="M18.737 10.92l-.655-3.927A.612.612 0 0 0 17.5 6.5h-11a.612.612 0 0 0-.582.493l-.655 3.927"></path></g></svg>
          </div>
          <h2><FormattedMessage id="Section3Col.subheadCol3" /></h2>
          <p className={css.textContent}>
            <FormattedMessage id="Section3Col.textContentCol3" />
          </p>
          <Button className={css.colButton}><FormattedMessage id="Section3Col.btn3" /></Button>
        </div>

      </div>
    </div>
  );
};

export default Section3Col;
