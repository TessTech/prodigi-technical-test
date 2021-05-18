// var $ = 'jquery'
var message = 'Hello World';
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
$('#fake-button').on('click', function (evt) {
    evt.preventDefault();
    // $('#fake-button-message').removeClass('d-none');
    var count = 0;
    if ($('#full-name-input').val() == '') {
        $('#full-name-error-message').removeClass('d-none');
        count++;
    }
    if ($('#email-input').val() == '') {
        $('#email-error-message').removeClass('d-none');
        count++;
    }
    if ($('#create-password-input').val() == '') {
        $('#create-password-message').removeClass('d-none');
        count++;
    }
    if ($('#confirm-password-input').val() == '') {
        $('#confirm-password-message').removeClass('d-none');
        count++;
    }
    if ($('#create-password-input').val() !== $('#confirm-password-input').val()) {
        $('#create-confirm-password-error-message').removeClass('d-none');
        count++;
    }
});
//}
