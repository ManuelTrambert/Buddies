'use strict';

/* eslint-disable */

angular.module('main.constant')
  .constant('appConfig', {

    // gulp environment: injects environment vars
    ENV: {
      /*inject-env*/
      'env': 'local',
    'baseUrl': '',
    'git_commit': '95c2900',
    'version': '1.0.0',
    'apiversion': '',
    'proxies': [
      {
        'proxyMapFrom': '/api',
        'proxyMapTo': 'http://127.0.0.1:1212/api'
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
