/*jslint indent: 2*/
/*
 * jQuery human readable file size plugin
 * https://github.com/pencil/HumanReadableFileSize.js
 *
 * Copyright (c) 2012 "Pencil" Nils Caspar (www.nilscaspar.ch)
 * Licensed under the MIT, GPL, and BSD licenses.
 */
(function ($, udef) {
  "use strict";
  $.fileSize = (function () {
    var prefixesSI = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
      prefixesIEC = ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi', 'Yi'];
    return function (fileSize, precision, useIECPrefixes) {
      var prefixes = useIECPrefixes ? prefixesIEC : prefixesSI,
        base = useIECPrefixes ? 1024 : 1000,
        powedPrecision = Math.pow(10, precision === udef ? 2 : precision),
        index = (!fileSize ? 0 : Math.floor(Math.log(fileSize) / Math.log(base)));
      index = Math.min(index, prefixes.length - 1);
      fileSize = fileSize / Math.pow(base, index);
      fileSize = Math.round(fileSize * powedPrecision) / powedPrecision;
      return fileSize + ' ' + prefixes[index] + 'B';
    };
  }());
  $.fn.fileSize = function (precision, useIECPrefixes) {
    this.each(function (key, element, size) {
      element = $(element);
      size = Number(element.text());
      if (isFinite(size)) {
        element.text($.fileSize(size, precision, useIECPrefixes));
      }
    });
  };
}(jQuery));
