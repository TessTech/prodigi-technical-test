const checkRequestSignUp = (callback: Require): void => {
  if (document.querySelector('.sign-up') !== null) {
    callback(['components/sign-up.min'], (signUp: SignUp): void => {
      signUp.init();
    });
  }
};

const init = (): void => {
  checkRequestSignUp(requirejs);
};

return {
  init,
};
