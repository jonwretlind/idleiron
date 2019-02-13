import React from 'react';
import { FormattedMessage } from 'react-intl';
import css from './SectionFeatures.css';

const sharetribeSdk = require('sharetribe-flex-sdk');

// Create new SDK instance
const sdk = sharetribeSdk.createInstance({
  clientId: 'd9b92f0a-04e0-4a68-82e5-e3352c09fdeb'
});

let listingHTML = "";

export default function SectionFeatures() {
     sdk.listings
    .query({ per_page: 3 })
    .then(response => {
      // Print listing titles
      response.data.data.forEach(listing => {
        listingHTML = listingHTML + '<div>' + listing.attributes.title + '</div>';
      })

      console.log(listingHTML);
      document.getElementById('myListings').innerHTML = listingHTML;
    })
    .catch(response => {
      // An error occurred
      console.log(`Request failed with status: ${response.status} ${response.statusText}`);
    });

    return (
      <div className={css.sectionFeatures}>
        <h1 className={css.title}>
          <FormattedMessage id="SectionFeatures.featuresTitle" />
        </h1>
        <div id="myListings">
        </div>
      </div>
    )
};
