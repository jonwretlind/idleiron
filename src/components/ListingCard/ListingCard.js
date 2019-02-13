import React from 'react';

import css from './ListingCard.css';

const sharetribeSdk = require('sharetribe-flex-sdk');
// Create new SDK instance
const sdk = sharetribeSdk.createInstance({
  clientId: 'd9b92f0a-04e0-4a68-82e5-e3352c09fdeb'
});

let Cards = "";

const ListingCard = () => {
  sdk.listings
 .query({ per_page: 3 })
 .then(response => {
   // Print listing titles
   response.data.data.forEach(function(listing, idx) {
    console.log("Idx: " + idx, listing);

    const cardStyle = "color:#555;";

    Cards += "<div style="+cardStyle+">"+ listing.attributes.title +
                "<span className="+ css.price +">"+ listing.attributes.price.amount +"</span>" +
                "<span className="+ css.location +">"+ listing.attributes.publicData.location.address +"</span>" +
             "</div>";

     document.getElementById('myListings').innerHTML = Cards;
   })

   console.log(response);

 })
 .catch(response => {
   // An error occurred
   console.log(`Request failed with status: ${response.status} ${response.statusText}`);
 });

 return (
   <div id="myListings" className={css.featuresContainer} />
 )

};

export default ListingCard;
