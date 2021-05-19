// var $ = 'jquery'

let message: string = 'Hellppp World';
console.log(message);

// const init = (): void => {
//     $('#back-button').on('click', (evt: Event): void => {
//       evt.preventDefault();
//       $('#ttt-h1').removeClass('d-none');
//     });
//   };

// define(['jquery'], (
//   $: JQueryStatic
// ): Page.SignUp => {
$('#sign-up-button').on('click', (evt: Event): void => {
  evt.preventDefault();
  // $('#fake-button-message').removeClass('d-none');
  let count = 0;

  if ($('#full-name-input').val() == '') {
    $('#full-name-error-message').removeClass('d-none');
    count++;
  }

  if ($('#email-input').val() == '') {
    $('#email-error-message').removeClass('d-none');
    count++;
  }

  if ($('#create-password-input').val() == '') {
    $('#create-password-error-message').removeClass('d-none');
    count++;
  }

  if ($('#confirm-password-input').val() == '') {
    $('#confirm-password-error-message').removeClass('d-none');
    count++;
  }

  if (
    $('#create-password-input').val() !== $('#confirm-password-input').val()
  ) {
    $('#create-confirm-password-error-message').removeClass('d-none');
    count++;
  }
});

//if all required fields filled out change buttons color
// if ($('#full-name-input').val() !== '') &&& $('#email-input').val() !== '') && $('#create-password-input').val() !== '') && $('#confirm-password-input').val() !== '')) {
//   $('#sign-up-button').removeClass('btn-pale');
//   $('#sign-up-button').removeClass('btn-solid');
// }

/////////////////////////////////////////
// let buttonCount: number = 0;
// if ($('#full-name-input').val() == '') {
//   $('#full-name-error-message').removeClass('d-none');
//   buttonCount++;
// }

// if ($('#email-input').val() == '') {
//   $('#email-error-message').removeClass('d-none');
//   buttonCount++;
// }

// if ($('#create-password-input').val() == '') {
//   $('#create-password-error-message').removeClass('d-none');
//   buttonCount++;
// }

// if ($('#confirm-password-input').val() == '') {
//   $('#confirm-password-error-message').removeClass('d-none');
//   buttonCount++;
// }

// if ($('#create-password-input').val() !== $('#confirm-password-input').val()) {
//   $('#create-confirm-password-error-message').removeClass('d-none');
//   buttonCount++;
// }

// console.log(buttonCount);
// if ((buttonCount = 5)) {
//   $('#sign-up-button').removeClass('btn-pale');
//   $('#sign-up-button').removeClass('btn-solid');
// }

//click on the input
//click off the input
$('#create-password-input').on('click', (evt: Event): void => {
  evt.preventDefault();
  $('#create-password-input').removeClass('input--normal');
  $('#create-password-input').addClass('input--clicked');
});

////////////////////////////////////////////
//}
