'use strict';

/* eslint-disable */

angular.module('main.constant')
  .constant('appConfig', {

    // gulp environment: injects environment vars
    ENV: {
      /*inject-env*/
      'env': 'development',
    'baseUrl': 'http://46.101.80.30:1212',
    'git_commit': '5ce4e64',
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
