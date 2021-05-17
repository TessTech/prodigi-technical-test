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
    Fullname: string;
    Email: string;
    Company?: string;
    PasswordCreate: string;
    PasswordConfirm: string;
  }
}
