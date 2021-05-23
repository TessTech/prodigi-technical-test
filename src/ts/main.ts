var checkRequestSignUp = function (callback) {
  if (document.querySelector('#sign-up') !== null) {
    callback(['components/sign-up.min'], function (planit) {
      planit.init();
    });
  }
};
//# sourceMappingURL=main.js.map
