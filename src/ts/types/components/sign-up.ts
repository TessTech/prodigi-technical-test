const init = (): void => {
  $('#submit-button').on('click', (evt: Event): void => {
    evt.preventDefault();
    $('#submit-button-message').removeClass('d-none');
  });
};
