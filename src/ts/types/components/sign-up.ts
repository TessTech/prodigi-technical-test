define(['jquery', 'accessplanit'], (
  $: JQueryStatic
): UIKit.Module.Accessplanit => {
  const init = (): void => {
    $('#back-button').on('click', (evt: Event): void => {
      evt.preventDefault();
      $('#ttt-h1').removeClass('d-none');
    });
  };
  return {
    init,
  };
});
