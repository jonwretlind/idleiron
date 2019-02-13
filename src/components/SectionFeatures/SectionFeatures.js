import React from 'react';
import { FormattedMessage } from 'react-intl';
import css from './SectionFeatures.css';
import {
  ListingCard
} from '../../components';

const SectionFeatures = () => {

    return (
      <div className={css.sectionFeatures}>
        <h1 className={css.title}>
          <FormattedMessage id="SectionFeatures.featuresTitle" />
        </h1>
        <ListingCard />
      </div>
    )
};


export default SectionFeatures;
