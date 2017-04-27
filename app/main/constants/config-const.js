'use strict';

/* eslint-disable */

angular.module('main.constant')
  .constant('appConfig', {

    // gulp environment: injects environment vars
    ENV: {
      /*inject-env*/
      'env': 'development',
    'git_commit': 'd35acfb',
    'version': '1.0.0',
    'apiversion': '',
    'proxies': [
      {
        'proxyMapFrom': '/api',
      }
    ]
      /*endinject*/
    },

    // gulp build-vars: injects build vars
    BUILD: {
      /*inject-build*/
      /*endinject*/
    }

  });
