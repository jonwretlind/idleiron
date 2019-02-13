import React from 'react';
import { string, func, object } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { TopbarSearchForm } from '../../forms';

import css from './SectionHero.css';



const SectionHero = props => {

	const {
    onSearchSubmit,
    initialSearchFormValues,
  } = props;

  const search = (
    <TopbarSearchForm
      className={css.heroSearchForm}
      form="TopbarSearchFormDesktop"
      onSubmit={onSearchSubmit}
      initialValues={initialSearchFormValues}
    />
  );

  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2>
        { search }
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
  onSearchSubmit: func,
  initialSearchFormValues: object,
};

export default SectionHero;
