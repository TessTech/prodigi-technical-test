var message = 'hey';
console.log(message);
$('#sign-up-button').on('click', function (evt) {
    evt.preventDefault();
    if ($('#full-name-input').val() == '') {
        $('#full-name-error-message').removeClass('d-none');
        $('#sign-up-button').removeClass('btn-pale');
        $('#sign-up-button').addClass('btn-solid');
    }
    if ($('#email-input').val() == '') {
        $('#email-error-message').removeClass('d-none');
    }
    if ($('#create-password-input').val() == '') {
        $('#create-password-error-message').removeClass('d-none');
    }
    if ($('#confirm-password-input').val() == '') {
        $('#confirm-password-error-message').removeClass('d-none');
    }
    if ($('#create-password-input').val() !== $('#confirm-password-input').val()) {
        $('#create-confirm-password-error-message').removeClass('d-none');
    }
});
function tenMinuteReminder() {
    alert('You have not completed the Sign up form. Remember to sign up!');
}
setTimeout(tenMinuteReminder, 600000);
