'use strict';

(function () {

  var options = {};
  options.isCordovaApp = !!window.cordova;
  options.appUpToDate = true;
  options.loggedBefore = false;
  options.states = ['En attente', 'Prêt', 'Attribué', 'En magasin', 'En route', 'A destination', 'Complété', 'Annulé', 'Retour'];
  options.statePayment = ['En attente', 'En cours', 'Payé', 'Annulé'];
  options.statesAll = options.states.concat(['En attente d\'email', 'En attente de sms', 'A relancer à la main', 'Refusé']);
  options.datePickerConfig = { date: moment().add(1, 'hours').add(30, 'minutes').toDate(), mode: 'datetime', is24Hour: true, locale: 'fr', doneButtonLabel: 'Ok', cancelText: 'Annuler', okText: 'Ok', cancelButtonLabel: 'Annuler', allowOldDates: false, minuteInterval: 15 };

  angular.module('main.constant', [])
    .constant('options', options);

})();
