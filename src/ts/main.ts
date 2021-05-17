const checkRequestSignUp = (callback: Require): void => {
  if (document.querySelector('#sign-up') !== null) {
    callback(['components/sign-up.min'], (planit: signUp): void => {
      planit.init();
    });
  }
};
