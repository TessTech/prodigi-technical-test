define([], (): object => {
  requirejs.config({
    config: {
      i18n: {
        locale:
          (document.querySelector('html') as HTMLElement).getAttribute(
            'lang'
          ) || 'en',
      },
    },
    paths: {
      i18n: '../lib/i18n.min',
      jquery: '../lib/jquery-3.4.1',
      prettier: '../lib/prettier',
      popper: '../lib/popper',
      bootstrap: '../lib/bootstrap/bootstrap',
      promise: '../lib/polyfill/promise',
      mapboxgl: '../lib/mapbox/mapbox-gl',
      'mapboxgl-supported': '../lib/mapbox/mapbox-gl-supported',
      leaflet: '../lib/leaflet/leaflet',
      turf: '../lib/mapbox/turf',
      observer: '../lib/polyfill/observer',
      hoverIntent: '../lib/hover-intent.min',
      tableSort: '../lib/table/table-sort',
      embedly: '../lib/embedly/embedly',
      sticky: '../lib/polyfill/sticky',
      validate: '../lib/validate/validate',
      mathJax: '../lib/mathJax',
      youtube: 'https://www.youtube.com/iframe_api?',
      accessplanit:
        'https://cardiffcpd.accessplanit.com/accessplan/NetLibrary/ClientScripts/webintegration',
    },
    shim: {
      tableSort: {
        deps: ['jquery'],
      },
      popper: {
        exports: 'popper.js',
      },
      bootstrap: {
        deps: ['popper', 'jquery'],
        exports: 'bootstrap',
      },
      validate: {
        deps: ['jquery'],
        exports: 'validate',
      },
      'components/map': {
        deps: ['leaflet'],
      },
    },
  });

  const checkRequestAccessplanit = (callback: Require): void => {
    if (document.querySelector('#request-interest') !== null) {
      callback(
        ['components/sign-up'],
        (planit: UIKit.Module.Accessplanit): void => {
          planit.init();
        }
      );
    }
  };

  const init = (): void => {
    checkRequestAccessplanit(requirejs);
  };

  init();

  return {
    init,
  };
});
