(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var USER_AGENT = global.navigator.userAgent;
  var IPHONE_RE = /iPhone/i;
  var IPOD_RE = /iPod/i;
  var IPAD_RE = /iPad/i;
  var WINDOWS_RE = /Windows Phone|IEMobile|WPDesktop/i;

  var NxDetectIos = nx.declare('nx.DetectIos', {
    statics: {
      isIphone: function () {
        return /iPhone/i.test(USER_AGENT) && !NxDetectIos.iPad() && !WINDOWS_RE.test(USER_AGENT);
      },
      isIpod: function () {
        return /iPod/i.test(USER_AGENT);
      },
      isIpad: function () {
        return /iPad/i.test(USER_AGENT);
      },
      isIos: function () {
        return (NxDetectIos.iPad() || NxDetectIos.iPod() || NxDetectIos.iPhone());
      },
      version: function () {
        var splitUserAgent = USER_AGENT.split('OS ');
        if (splitUserAgent.length > 1) {
          var unformattedVersion = splitUserAgent[1].split(' ')[0];
          return unformattedVersion.split('_').join('.');
        }
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDetectIos;
  }

}());
