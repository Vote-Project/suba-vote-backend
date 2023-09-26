import type { Schema, Attribute } from '@strapi/strapi';

export interface VoterContactDetails extends Schema.Component {
  collectionName: 'components_voter_contact_details';
  info: {
    displayName: 'Voter_Contact_Details';
    description: '';
  };
  attributes: {
    Mobile_Number_1: Attribute.String;
    Mobile_Number_2: Attribute.String;
    WhatsApp_Number: Attribute.String;
    Facebook_Link: Attribute.String;
  };
}

export interface VoterVoterLocationIdentification extends Schema.Component {
  collectionName: 'components_voter_voter_location_identifications';
  info: {
    displayName: 'Voter_Location';
    description: '';
  };
  attributes: {
    District: Attribute.Enumeration<['Colombo']>;
    Seat: Attribute.Enumeration<
      [
        'ColomboNorth',
        'ColomboCentral',
        'Borella',
        'ColomboEast',
        'ColomboWest',
        'Dehiwala',
        'Ratmalana',
        'Kollonnawa',
        'Kotte',
        'Kaduwela',
        'Awissawella',
        'Homagama',
        'Maharagama',
        'Kesbewa',
        'Moratuwa'
      ]
    >;
    Local_Authority: Attribute.Enumeration<
      [
        'Colombo Municipal Council',
        'Dehiwala',
        'MountLavinia',
        'Municipal Council Dehiwala',
        'MountLavinia Municipal Council',
        'Kollonnawa Urban Council',
        'Kotikawatta',
        'Mulleriyawa Pradeshiyasabha',
        'Sri Jayawardenepura Kotte Municipal Council',
        'Kaduwela Municipal Council',
        'Seethawakapura Urban Council',
        'Seethawakapura Pradeshiyasabha',
        'Homagama PradeshiyaSabha',
        'Maharagama UrbanCouncil',
        'Kesbewa UrbanCouncil',
        'Boralesgamuwa Urban Council',
        'Moratuwa Municipal Council'
      ]
    >;
    Ward: Attribute.Enumeration<
      [
        'Sammanthranapura',
        'Mattakkuliya',
        'Modara',
        'Mahawatta',
        'AluthMawatha',
        'Lunupokuna',
        'KotahenaWest',
        'KotahenaEast',
        'Bloemendhal',
        'Jintupitiya',
        'Kochchikade',
        'KochchikadeSouth',
        'GrandpassNorth',
        'Navagampura',
        'MaligawattaEast',
        'GrandpassSouth',
        'Khettarama',
        'NewBazaar',
        'Masangasweediya',
        'Fort',
        'HultsdorfWest',
        'HultsdorfEast',
        'Keselwatta',
        'Panchikawatta',
        'MaligawattaWest',
        'Maradana',
        'Hunupitiya',
        'Wekanda',
        'Dematagoda',
        'KuppiyawattaEast',
        'Wanathamulla',
        'BorellaNorth',
        'KuppiyawattaWest',
        'CinnamonGardens',
        'BorellaSouth',
        'Gothamipura',
        'Narahenpita',
        'Thimbirigasyaya'
      ]
    >;
    GN_Division: Attribute.Enumeration<
      [
        'Sammanthranapura 005',
        'Mattakkuliya 010',
        'Modara 015',
        'Madampitiya 020',
        'Mahawatta 025',
        'Aluthmawatha 030',
        'Lunupokuna 035',
        'Kotahena West 050',
        'Kotahena East 045',
        'Bloemendhal 040',
        'Jinthupitiya 060',
        'Kochchikade North 055',
        'Kochchikade South 110',
        'Grandpass North 080',
        'Nawagampura 085',
        'Maligawatta East 090',
        'Grandpass South 075',
        'Kettarama 095',
        'New Bazaar 070'
      ]
    >;
    Street_Village: Attribute.Enumeration<
      [
        'Sri Wickramapura',
        'Sammanthranapura Road',
        'Gemunu pura',
        'Pichchamal watta',
        'Gemunupura Road',
        'Hadala Thotupla Rd',
        'farm Rd',
        'kadiranawath Housing   Scheme',
        'Mudali john Rodrigo  Mw',
        'Modara Street',
        'S.D Fernando Road',
        "St. Mery's Road",
        'Pranshawatta Lane',
        'Kelani Ganga Mill Road',
        'Sri Kalyani gangarama Mawatha',
        'Sri Wckrama Mawatha',
        'Rawatta Lane',
        'Malwatta Lane',
        'Center Road',
        'Saviya Lane',
        'Fergussion Lane',
        'Crow Island Road',
        'Rodrigo place',
        'Jubili Mawatha',
        'Church Lane',
        'Madampitiya Road',
        'Bloemendhal Road',
        'Mahawaththa Rd',
        'Henamulla lane'
      ]
    >;
  };
}

export interface VoterVoterPersonalDetails extends Schema.Component {
  collectionName: 'components_voter_voter_personal_details';
  info: {
    displayName: 'Voter_Personal_Details';
  };
  attributes: {
    NIC_Number: Attribute.String;
    Title: Attribute.Enumeration<
      ['Madam', 'Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Professor ']
    >;
    Occupation: Attribute.String;
    Name: Attribute.String;
    Gender: Attribute.Enumeration<['Male', 'Female', 'Other']>;
    Address: Attribute.String;
    Civil_Status: Attribute.String;
    NJP_Party_Member: Attribute.Boolean;
    Date_of_Birth: Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'voter.contact-details': VoterContactDetails;
      'voter.voter-location-identification': VoterVoterLocationIdentification;
      'voter.voter-personal-details': VoterVoterPersonalDetails;
    }
  }
}
