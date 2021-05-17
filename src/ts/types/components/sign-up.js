var init = function () {
  $('#submit-button').on('click', function (evt) {
    evt.preventDefault();
    $('#submit-button-message').removeClass('d-none');
  });
};
