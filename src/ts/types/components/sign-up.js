// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
// define(['jquery', 'accessplanit'], (
//   $: JQueryStatic
// ):
// $('#request-interest').on('submit', (evt: Event): void => {
//   evt.preventDefault();
//   $('#successfully-submitted').removeClass('d-none');
// })
// })
// declare var $: jquery;
var init = function () {
    $('#submit-button').on('click', function (evt) {
        evt.preventDefault();
        $('#submit-button-message').removeClass('d-none');
    });
};
//password
// if createpassword!=confirmpassword print error
// as well as the * error
