'use strict';

/* eslint-disable */

angular.module('main.constant')
  .constant('appConfig', {

    // gulp environment: injects environment vars
    ENV: {
      /*inject-env*/
      'env': 'development',
    'baseUrl': 'http://46.101.80.30:1212',
    'git_commit': '3edb2d2',
    'version': '1.0.0',
    'apiversion': '',
    'proxies': [
      {
        'proxyMapFrom': '/api',
        'proxyMapTo': 'http://46.101.80.30:1212/api'
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
