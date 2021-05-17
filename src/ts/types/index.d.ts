// declare namespace UIKit {
//     namespace Module {
//         interface Accessplanit
//     }
// }
declare module 'jquery' {
  export = $;
}
declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;

export = jQuery;

interface signUp {
  init(): void;
}

declare namespace signUp {
  interface Enquiry {
    OwnerID: string;
    Title?: string;
    Forename: string;
    Surname: string;
    Email: string;
    Phone?: string;
    Mobile?: string;
    Address?: string;
    Town?: string;
    County?: string;
    Country?: string;
    Postcode?: string;
    CompanyName: string;
    CompanyEmail?: string;
    CompanyPhone?: string;
    CompanyAddress?: string;
    CompanyTown?: string;
    CompanyCounty?: string;
    CompanyCountry?: string;
    CompanyPostcode?: string;
    CompanyGroupID?: string;
    CompanyGroupName?: string;
    IndustryName?: string;
    CourseTemplateID?: string;
    AdditionalInformation?: string;
    MarketingOptIn?: string;
  }
}
