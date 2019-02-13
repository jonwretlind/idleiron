import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '../../components';
import css from './SectionGetStarted.css';

const SectionGetStarted = props => {
  //const { options, selectedOptions } = props;
  return (
    <div className={css.SectionGetStarted}>
      <h1 className={css.title}>
        <FormattedMessage id="SectionGetStarted.featuresTitle" />
      </h1>
      <p className={css.textContent}>
      	<FormattedMessage id="SectionGetStarted.textContent" />
      </p>
      <Button className={css.getStartedButton}>Get Started</Button>
    </div>
  );
};

export default SectionGetStarted;
