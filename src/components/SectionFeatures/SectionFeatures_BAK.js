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
      response.data.data.forEach(function(listing, idx) {
        console.log("Idx: " + idx, listing);
        listingHTML = listingHTML + '<div id="card-' + idx + '" class="card">' + listing.attributes.title;
        listingHTML = listingHTML + '<span class="price">' + listing.attributes.price.amount + '</span>';
        listingHTML = listingHTML + '<span class="location">' + listing.attributes.publicData.location.address + '</span>';
        listingHTML = listingHTML + '</div>';
      })

      console.log(response);
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
        <div id="myListings" className={css.featuresContainer}>
        </div>
      </div>
    )
};
