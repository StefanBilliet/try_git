(function (ko) {
  "use strict";

  // create binding handler for sliding views
  ko.bindingHandlers.showResults = (function () {
    var func = function (element, valueAccessor) {
      var visible = ko.utils.unwrapObservable(valueAccessor());
      if (visible) {
        $(element).patientsearch('slideOpen');
      } else {
        $(element).patientsearch('slideClosed');
      }
    };
    return {
      init: func,
      update: func
    };
  }());

  ko.bindingHandlers.showDetail = (function () {
    var func = function (element, valueAccessor) {
      var visible = ko.utils.unwrapObservable(valueAccessor());
      if (visible) {
        $('#searchPatientTab').patientsearch('showDetail', $(element));
      } else {
        $('#searchPatientTab').patientsearch('hideDetail');
      }
    };
    return {
      init: func,
      update: func
    };
  }());

}(window.ko));



