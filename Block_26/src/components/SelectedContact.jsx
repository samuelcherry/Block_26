import React, { useState, useEffect } from "react";

function SelectedContact({ contactId }) {
  const [contactDetails, setContacts] = useState([]);
  const API = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/";

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(API + `${contactId}`);
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <>
      <div className="contactCard">
        <h1>{contactDetails.name}</h1>
        <h4>EMAIL: {contactDetails.email}</h4>
        <h4>PHONE: {contactDetails.phone}</h4>
        <h4>WEBSITE: {contactDetails.website}</h4>
      </div>
    </>
  );
}

export default SelectedContact;

// "id": 1,
// "name": "Mrs. Jerald Schulist",
// "username": "Antwan",
// "email": "Coby_Zieme@libby.tv",
// "address": {
//     "street": "Morissette Heights",
//     "suite": "Apt. 633",
//     "city": "Port Liashire",
//     "zipcode": "04270",
//     "geo": {
//         "lat": "27.7501",
//         "lng": "-83.1776"
//     }
// },
// "phone": "(663)839-3814 x845",
// "website": "arvel.io",
// "company": {
//     "name": "D'Amore-Krajcik",
//     "catchPhrase": "Down-sized empowering Graphic Interface",
//     "bs": "extend cross-media relationships"
// }
