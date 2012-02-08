/*
 * jQuery human readable file size plugin
 * https://github.com/pencil/HumanReadableFileSize.js
 *
 * Copyright (c) 2012 "Pencil" Nils Caspar
 * Licensed under the MIT, GPL, and BSD licenses.
 */
(function($, undefined){
	$.fileSize = (function() {
		var _prefixesSI = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
			_prefixesIEC = ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi', 'Yi'];
		return (function(fileSize, precision, useIECPrefixes) {
			var prefixes = useIECPrefixes ? _prefixesIEC : _prefixesSI,
				base = useIECPrefixes ? 1024 : 1000,
				index = (fileSize == 0 ? 0 : Math.floor(Math.log(fileSize)/Math.log(base)));
			if(precision === undefined) {
				precision = 2;
			}
			if(index != 0) {
				var pow = Math.pow(10, precision);
				fileSize = fileSize/Math.pow(base, index);
				fileSize = Math.round(fileSize * Math.pow(10, precision))/Math.pow(10, precision);
			}
			return fileSize + ' ' + prefixes[index] + 'B';
		});
	})();
})(jQuery);